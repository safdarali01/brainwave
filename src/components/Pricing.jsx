// Importing necessary components and assets
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

// Pricing component definition
const Pricing = () => {
  return (
    // Section component that wraps the entire pricing section
    <Section className="overflow-hidden" id="pricing">
      {/* Main container to hold the content, with relative positioning and z-index for layering */}
      <div className="container relative z-2">

        {/* Decorative section with a small sphere and stars, visible only on large screens */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          {/* Small sphere image */}
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          
          {/* Stars image with absolute positioning to overlay the sphere */}
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* Heading section for the pricing page */}
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        {/* Pricing list and decorative lines */}
        <div className="relative">
          {/* Component that displays the list of pricing plans */}
          <PricingList />
          
          {/* Left and right decorative lines */}
          <LeftLine />
          <RightLine />
        </div>

        {/* Link to see full pricing details */}
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

// Exporting the Pricing component as the default export
export default Pricing;
