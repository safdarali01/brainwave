// Import the loading asset (likely a spinner or loading icon)
import { loading } from "../assets";

// Generating component definition
const Generating = ({ className }) => {
  return (
    // Container div for the loading state
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""  // If className is passed, it will be added
      } text-base`}
    >
      {/* Loading icon */}
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      
      {/* Text displayed during loading */}
      AI is generating
    </div>
  );
};

export default Generating;
