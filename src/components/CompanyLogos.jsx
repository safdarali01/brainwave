// Importing company logos from constants
import { companyLogos } from "../constants";

// CompanyLogos component definition
// This component receives a className prop and displays a list of company logos
const CompanyLogos = ({ className }) => {
  return (
    // The main container with the provided className prop
    <div className={className}>
      
      {/* Tagline text displayed above the logos */}
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>

      {/* Unordered list to display the company logos */}
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          // Each logo is wrapped in a list item
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}  // Use index as key for uniqueness in mapping
          >
            {/* Logo image with specified width, height, and alt text */}
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
