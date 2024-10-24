// Importing required components and assets
import { benefits } from "../constants";        // Array of benefit items (data)
import Heading from "./Heading";                // Custom Heading component
import Section from "./Section";                // Custom Section component for layout
import Arrow from "../assets/svg/Arrow";        // SVG arrow icon for the UI
import { GradientLight } from "./design/Benefits";  // Gradient light effect for specific benefits
import ClipPath from "../assets/svg/ClipPath";  // SVG clip path effect for benefits

const Benefits = () => {
  return (
    // Section component with "features" ID for navigation
    <Section id="features">
      <div className="container relative z-2 text-center">
        {/* Heading Component with a max width on different screen sizes */}
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"  // Main heading title
        />

        {/* Flex container for wrapping the benefit boxes, centered and spaced */}
        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {/* Mapping through benefits array to display each benefit item */}
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:basis-[30%] min-w-[280px] max-w-[30%]"  // Each box takes up 30% of width in medium screens
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,  // Background image for each benefit box
              }}
              key={item.id}  // Unique key for each item
            >
              {/* Benefit content with title, text, and call to action */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>  // Benefit title
                <p className="body-2 mb-6 text-n-3">{item.text}</p>  // Description text
                <div className="flex items-center mt-auto">  // Call to action at the bottom
                  <img
                    src={item.iconUrl}  // Icon for the benefit
                    width={48}
                    height={48}
                    alt={item.title}  // Alt text for accessibility
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more  // Action text
                  </p>
                  <Arrow />  // Arrow icon component for "Explore more"
                </div>
              </div>

              {/* Optional gradient light effect based on item property */}
              {item.light && <GradientLight />}

              {/* Clip path effect for hover interaction */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}  // Clip path for styling the outer container
              >
                {/* Hover effect to show image */}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}  // Image for hover effect
                      width={380}
                      height={362}
                      alt={item.title}  // Alt text for image
                      className="w-full h-full object-cover"  // Cover image to fill container
                    />
                  )}
                </div>
              </div>

              {/* ClipPath SVG component */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
