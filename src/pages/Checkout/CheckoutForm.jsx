import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, {  useState } from 'react';
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import usePurchased from "../../hooks/usePurchased";
import { useNavigate } from "react-router";


const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "18px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const CheckoutForm = ({ packageDetail, amount }) => {
  const { user } = useAuth();
  const elements = useElements();
  const stripe = useStripe();
  const axiosSecure = useAxiosSecure();
  const [cardBrand, setCardBrand] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const amountInCents = parseFloat(amount) * 100;
  const alreadyPurchased = usePurchased();
  const navigate = useNavigate();

  const cardBrandIcons = {
    visa: "https://img.icons8.com/color/48/000000/visa.png",
    mastercard: "https://img.icons8.com/color/48/000000/mastercard-logo.png",
    amex: "https://img.icons8.com/color/48/000000/amex.png",
    discover: "https://img.icons8.com/color/48/000000/discover.png",
    diners: "https://img.icons8.com/color/48/000000/diners-club.png",
    jcb: "https://img.icons8.com/color/48/000000/jcb.png",
    unionpay: "https://img.icons8.com/color/48/000000/unionpay.png",
    unknown: "https://img.icons8.com/color/48/000000/bank-card-back-side.png",
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!user){
      return navigate('/login');
    }

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: user?.displayName,
        email: user?.email,
      },
    });

    if (payload.error) {
      setErrorMessage(payload.error);
      return;
    } else {
      setErrorMessage(null);
    }

    // check if already purchased package
    if (
      alreadyPurchased?.email === user?.email &&
      packageDetail?.name === alreadyPurchased.packageName
    ) {
      Swal.fire({
        title: "You already purchased this package",
        icon: "error",
      });
      return;
    }

    // create payment intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amountInCents,
    });
    const clientSecret = res.data.clientSecret;
    if (clientSecret) {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(
            CardNumberElement,
            CardCvcElement,
            CardExpiryElement
          ),
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

      if (result.error) {
        Swal.fire({
          title: result.error.message,
          text: result.error,
          icon: "error",
        });
        setErrorMessage(result.error);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setErrorMessage(null);
          const paymentData = {
            packageName: packageDetail.name,
            email: user?.email,
            amount: parseFloat(amount),
            transactionId: result.paymentIntent.id,
            paymentMethod: result.paymentIntent.payment_method_types,
          };
          try {
            const paymentRes = await axiosSecure.put("/payments", paymentData);
            if (paymentRes.data.modifiedCount === 1) {
              Swal.fire({
                title: "Payment successful",
                text: `You successfully purchased ${packageDetail.name} package`,
                icon: "success",
              });
            }
          } catch (error) {
            console.log(error);
            Swal.fire({
              title: error.response.data.message,
              text: error.message,
              icon: "error",
            });
          }
        }
      }
    }
  }; 
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 p-4">
        <h2 className="text-2xl font-semibold mb-3">Card Information</h2>

        <div className="p-4 space-y-4 shadow-sm bg-white">
          {/* Card Number Row */}
          <div>
            <div className="border border-slate-300 p-2 rounded-lg flex items-center justify-between gap-2">
              <div className="flex-1">
                <CardNumberElement
                  id="cardNumber"
                  options={ELEMENT_OPTIONS}
                  onChange={(event) => {
                    if (event.brand) {
                      setCardBrand(event.brand);
                    }
                  }}
                />
              </div>
              {/* Card brand icons */}
              <div className="flex gap-2 items-center">
                {cardBrand && (
                  <img
                    src={cardBrandIcons[cardBrand]}
                    alt={cardBrand}
                    className="w-7 ml-2 inline-block"
                  />
                )}
              </div>
            </div>
            <p className="text-red-500">
              {errorMessage?.code === "incomplete_number" && errorMessage?.message}
              {errorMessage?.code === "card_declined" && errorMessage?.message}
            </p>
          </div>

          {/* Expiry and CVC Row */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <CardExpiryElement
                id="expiry"
                options={ELEMENT_OPTIONS}
                className="border border-slate-300 p-2 rounded-lg"
              />
              <p className="text-red-500 text-sm">
                {errorMessage?.code === "incomplete_expiry" &&
                  errorMessage?.message}
              </p>
            </div>
            <div className="flex-1">
              <CardCvcElement
                id="cvc"
                options={ELEMENT_OPTIONS}
                className="border border-slate-300 p-2 rounded-lg"
              />
              <p className="text-red-500 text-sm">
                {errorMessage?.code === "incomplete_cvc" &&
                  errorMessage?.message}
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe}
          className="w-full btn btn-primary text-white rounded-md transition cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;