// Importing required assets, constants, and components
import { brainwaveSymbol, check } from "../assets";      // Icons and images for the collaboration section
import { collabApps, collabContent, collabText } from "../constants";  // Content data for collaboration section
import Button from "./Button";                          // Button component
import Section from "./Section";                        // Section component for layout
import { LeftCurve, RightCurve } from "./design/Collaboration";  // Curves for design elements

const Collaboration = () => {
  return (
    // Section wrapper with crosses background (passed as prop)
    <Section crosses>
      {/* Main container with flex layout on larger screens */}
      <div className="container lg:flex">

        {/* Left side: Heading and content list */}
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration  {/* Main heading */}
          </h2>

          {/* List of collaboration features */}
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>  {/* Unique key for each item */}
                <div className="flex items-center">
                  {/* Check icon */}
                  <img src={check} width={24} height={24} alt="check" />
                  {/* Feature title */}
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {/* Optional description text for each feature */}
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* Call to action button */}
          <Button>Try it now</Button>
        </div>

        {/* Right side: Visual representation and additional content */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/* Collaboration description text */}
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}  {/* Text provided via collabText constant */}
          </p>

          {/* Circular graphic for the collaboration apps */}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            {/* Inner circle with the Brainwave symbol */}
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  {/* Brainwave symbol in the center */}
                  <img
                    src={brainwaveSymbol}  // Symbol image source
                    width={48}
                    height={48}
                    alt="brainwave"  // Alt text for accessibility
                  />
                </div>
              </div>
            </div>

            {/* List of collaboration apps displayed around the circle */}
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}  // Unique key for each app
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45  // Positioning the app icons around the circle with rotation
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45  // Rotating each icon to align them correctly
                    }`}
                  >
                    {/* App icon */}
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}  // Alt text for each app
                      src={app.icon}  // Icon source for each app
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative curves for visual styling */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
