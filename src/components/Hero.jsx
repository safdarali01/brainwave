// Import assets and components used in the Hero component
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

// Define the Hero component
const Hero = () => {
  // Create a reference for parallax scrolling using useRef
  const parallaxRef = useRef(null);

  return (
    // Use the Section component to define the structure of the hero section
    // Apply paddings, margin adjustments, and set the ID for this section
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Container to hold the hero content, with a ref for parallax effects */}
      <div className="container relative" ref={parallaxRef}>
        
        {/* Header text section */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          {/* Main headline with a dynamic word 'Brainwave' */}
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              {/* Decorative curve under the text */}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          {/* Supporting paragraph text */}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          {/* Button component to redirect users to the pricing page */}
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        {/* Section with the robot image and various effects */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* Outer container with gradient background */}
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* Decorative top bar */}
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* Robot image section with aspect ratio adjustments */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* Generating component with absolute positioning */}
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {/* Parallax effect for icons on the left */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {/* Map over heroIcons array to display each icon */}
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                {/* Parallax effect for the notification on the right */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            {/* Gradient background element */}
            <Gradient />
          </div>

          {/* Background image positioned absolutely */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          {/* Background circles design element */}
          <BackgroundCircles />
        </div>

        {/* Company logos section, displayed only on large screens */}
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      {/* Bottom line decorative element */}
      <BottomLine />
    </Section>
  );
};

// Export the Hero component as the default export
export default Hero;
