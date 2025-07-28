import { Link } from "react-router";
import { FiCheck } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import usePurchased from "../../../hooks/usePurchased";

const MembershipPackages = () => {
  const alreadyPurchased = usePurchased();
  const axiosSecure = useAxiosSecure();
  const { data: packages } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/packages");
      return res.data;
    },
  });
  return (
    <section className="py-12 bg-base-100 mb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-poppins font-bold mb-4">
          Upgrade Your Membership
        </h2>
        <p className="mb-10 text-gray-600 font-inter">
          Choose the perfect plan to enjoy exclusive hostel meal benefits.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {packages?.map((pkg) => (
            <div
              key={pkg.name}
              className={`card rounded-2xl shadow-md border hover:shadow-lg transition-all py-10 ${
                pkg.name === "Silver" && "bg-slate-200 border-slate-300"
              } ${
                pkg.name === "Gold" && "bg-yellow-500/10 border-yellow-300"
              } ${pkg.name === "Platinum" && "bg-slate-300 border-slate-300"}`}
            >
              <div className="card-body">
                <h3
                  className={`text-3xl ${
                    pkg.name === "Silver" && "text-slate-400"
                  } ${pkg.name === "Gold" && "text-yellow-500"} ${
                    pkg.name === "Platinum" && "text-slate-600"
                  } font-poppins font-semibold mb-2`}
                >
                  {pkg.name}
                </h3>
                <p className="text-2xl font-bold mb-4">
                  ${pkg.price}
                  <span className="text-sm font-semibold text-slate-500">
                    /month
                  </span>
                </p>

                <ul className="text-left mb-6 font-inter space-y-2">
                  {pkg.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiCheck className="text-primary mt-1" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/checkout/${pkg._id}`}
                  className={`btn text-white ${
                    pkg.name === "Silver" && "bg-slate-400"
                  } ${pkg.name === "Gold" && "bg-yellow-500"} ${
                    pkg.name === "Platinum" && "bg-slate-600"
                  }`}
                >
                  {alreadyPurchased.packageName === pkg.name
                    ? "purchased"
                    : `Get ${pkg.name}`}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPackages;
