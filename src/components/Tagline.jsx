import brackets from "../assets/svg/Brackets";  // Importing the SVG for the brackets

// TagLine component
const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>  {/* Wrapper for the tagline */}
      
      {/* Left bracket SVG */}
      {brackets("left")}
      
      {/* Tagline text with optional className */}
      <div className="mx-3 text-n-3">{children}</div>
      
      {/* Right bracket SVG */}
      {brackets("right")}
    </div>
  );
};

export default TagLine;
