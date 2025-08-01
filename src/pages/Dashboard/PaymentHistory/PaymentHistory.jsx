import { useQuery } from "@tanstack/react-query";
import useAxiosSecureOrPublic from "../../../hooks/useAxiosSecureOrPublic";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const PaymentHistory = () => {
  const { user } = useAuth();
  const {axiosSecure} = useAxiosSecureOrPublic();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment-history?email=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading)
    return <LoadingSpinner/>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-10 text-center">Payment History</h2>

      {payments.length === 0 ? (
        <p className="text-gray-500 text-center">No payment records found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="table">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th>#</th>
                <th>Package</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.packageName}</td>
                  <td className="font-mono text-sm">{payment.transactionId}</td>
                  <td>${payment.amount}</td>
                  <td>
                    <span className="badge badge-success">Paid</span>
                  </td>
                  <td>{new Date(payment.paidAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
