import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)]">
      <h1>404</h1>
      <p className="mb-4">Page Not Found</p>
      <p>
        <Link to="/" className="bg-green-600 text-white p-2 rounded-md">
          Go Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
