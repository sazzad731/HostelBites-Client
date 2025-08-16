import { Link } from "react-router";
import errorImg from "../../assets/error.png"
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-3">
      <div className="text-center w-full">
        <div className="flex justify-center mb-8">
          <img className="md:w-1/2" src={errorImg} alt="error image" />
        </div>
        <p className="text-2xl md:text-3xl font-bold mt-4">Page Not Found</p>
        <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mt-2">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary rounded-lg text-lg px-8 py-3">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
