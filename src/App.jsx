// Importing the necessary components and assets
import ButtonGradient from "./assets/svg/ButtonGradient"; // Gradient button component
import Benefits from "./components/Benefits"; // Component for displaying benefits
import Collabration from "./components/Collabration"; // Collaboration section
import Header from "./components/Header"; // Header/navigation component
import Hero from "./components/Hero"; // Hero section/component
import Pricing from "./components/Pricing"; // Pricing information component
import Roadmap from "./components/Roadmap"; // Development roadmap component
import Services from "./components/Services"; // Services offered component
import Footer from "./components/Footer"; // Footer section/component

// Main App component definition
const App = () => {
  return (
    <>
      {/* Main container for the application with padding and overflow settings */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* Rendering the header/navigation */}
        <Header />
        {/* Rendering the hero section, likely the first impression of the app */}
        <Hero />
        {/* Rendering the benefits section to highlight advantages of the app */}
        <Benefits />
        {/* Rendering the collaboration section for teamwork features */}
        <Collabration />
        {/* Rendering the services section to showcase what the app offers */}
        <Services />
        {/* Rendering the pricing section for subscription or service costs */}
        <Pricing />
        {/* Rendering the roadmap section to outline future developments */}
        <Roadmap />
        {/* Rendering the footer section for additional information and links */}
        <Footer />
      </div>
      {/* Rendering a gradient button, possibly a call to action */}
      <ButtonGradient />
    </>
  );
};

// Exporting the App component for use in other parts of the application
export default App;
