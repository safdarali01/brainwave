// Importing necessary components and assets
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

// Roadmap component definition
const Roadmap = () => (
  // Section wrapper for the roadmap content, with id "roadmap"
  <Section className="overflow-hidden" id="roadmap">
    {/* Container for the roadmap content */}
    <div className="container md:pb-10">
      {/* Heading component with a tagline and title */}
      <Heading tag="Ready to get started" title="What we’re working on" />

      {/* Grid layout for the roadmap items, responsive for medium screens */}
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {/* Looping through the roadmap items */}
        {roadmap.map((item) => {
          // Setting the status of each roadmap item ("Done" or "In progress")
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              key={item.id} // Unique key for each roadmap item
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`} // Dynamic background based on item color
            >
              {/* Inner container with padding and background styling */}
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                {/* Decorative grid background */}
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                {/* Main content */}
                <div className="relative z-1">
                  {/* Tagline and status display */}
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline> {/* Date of the roadmap item */}

                    {/* Status badge with icon (checkmark for done, loading icon for in-progress) */}
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  {/* Roadmap item image */}
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>

                  {/* Roadmap item title */}
                  <h4 className="h4 mb-4">{item.title}</h4>

                  {/* Roadmap item description */}
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Gradient background effect */}
        <Gradient />
      </div>

      {/* Button linking to the full roadmap */}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

// Exporting the Roadmap component as the default export
export default Roadmap;
