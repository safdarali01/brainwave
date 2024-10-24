// Importing the required assets and constants
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

// PricingList component definition
const PricingList = () => {
  return (
    // Main container for the pricing cards, adjusts layout for mobile with flex-wrap
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {/* Mapping through the pricing array and rendering each pricing item */}
      {pricing.map((item) => (
        <div
          key={item.id} // Unique key for each pricing item
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 
          [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          {/* Pricing item title */}
          <h4 className="h4 mb-4">{item.title}</h4>

          {/* Pricing item description */}
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          {/* Displaying the price (if available) in large font */}
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div> {/* Dollar sign */}
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price} {/* Price */}
                </div>
              </>
            )}
          </div>

          {/* Button to get started or contact, depending on the presence of a price */}
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price} // Conditional styling for the button based on the presence of price
          >
            {item.price ? "Get started" : "Contact us"} {/* Button text */}
          </Button>

          {/* List of features included in the pricing plan */}
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index} // Unique key for each feature
                className="flex items-start py-5 border-t border-n-6"
              >
                {/* Check icon for each feature */}
                <img src={check} width={24} height={24} alt="Check" />
                {/* Feature description */}
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Export the PricingList component as the default export
export default PricingList;
