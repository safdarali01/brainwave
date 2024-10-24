// Import the TagLine component from the relative path "./Tagline"
import TagLine from "./Tagline";

// Define a functional component called Heading
// The component accepts 'className', 'title', 'text', and 'tag' as props
const Heading = ({ className, title, text, tag }) => {
  return (
    // A div container that applies a set of classes, including the passed 'className'
    // It centers content horizontally (mx-auto) and applies margin-bottom (mb) 
    // for different screen sizes (lg, md).
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* If the 'tag' prop is passed, render the TagLine component */}
      {/* The TagLine will have an additional bottom margin (mb-4) 
          and centered alignment on medium screens (md:justify-center) */}
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      
      {/* If the 'title' prop is passed, render it inside an h2 element with a class 'h2' */}
      {title && <h2 className="h2">{title}</h2>}
      
      {/* If the 'text' prop is passed, render it inside a paragraph element */}
      {/* It applies a top margin (mt-4) and a text color class 'text-n-4' */}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

// Export the Heading component as the default export of this module
export default Heading;
