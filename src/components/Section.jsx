// Importing the SectionSvg asset for decorative purposes
import SectionSvg from "../assets/svg/SectionSvg";

// Defining the Section component with various props
const Section = ({
  className,      // Custom class names for additional styling
  id,            // Section id for navigation or anchor purposes
  crosses,       // Boolean to determine if cross lines should be rendered
  crossesOffset, // Custom offset for cross lines
  customPaddings,// Boolean to determine if custom padding should be applied
  children,      // The child elements passed into the section
}) => {
  return (
    // Main section container with dynamic class names based on props
    <div
      id={id} // Setting the id for the section
      className={`
      relative  
      ${ 
        customPaddings || 
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        // Default padding, dynamically adjusted for larger screens if crosses is true
      } 
      ${className || ""}`} // Append any additional class names passed via props
    >
      {/* Rendering the children elements inside the section */}
      {children}

      {/* Decorative vertical stroke lines on the left and right sides for larger screens */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Conditional rendering of cross lines and SectionSvg if the 'crosses' prop is true */}
      {crosses && (
        <>
          {/* Top horizontal cross line with dynamic offset */}
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset // Apply crossesOffset if provided
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          {/* SectionSvg component for additional decorative elements */}
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

// Exporting the Section component as the default export
export default Section;
