// Importing the SVG icon for the button
import ButtonSvg from "../assets/svg/ButtonSvg";

// Button component definition with props for className, href, onClick, children, px (padding), and white (color variation)
const Button = ({ className, href, onClick, children, px, white }) => {
  
  // Combining class names based on the props provided
  // If 'px' is not passed, default padding of 'px-7' is used
  // 'white' prop determines the text color, and 'className' allows additional classes to be passed
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  
  // Span element's class used for styling the button's content
  const spanClasses = "relative z-10";

  // Function to render a <button> element (if no href is provided)
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {/* Button content (children) */}
      <span className={spanClasses}>{children}</span>
      {/* Adding the SVG icon, with color variation based on 'white' prop */}
      {ButtonSvg(white)}
    </button>
  );

  // Function to render an <a> link element (if href is provided)
  const renderLink = () => (
    <a href={href} className={classes}>
      {/* Button content (children) */}
      <span className={spanClasses}>{children}</span>
      {/* Adding the SVG icon, with color variation based on 'white' prop */}
      {ButtonSvg(white)}
    </a>
  );

  // If 'href' is passed, render a link; otherwise, render a button
  return href ? renderLink() : renderButton();
};

// Exporting the Button component to be used in other parts of the application
export default Button;
