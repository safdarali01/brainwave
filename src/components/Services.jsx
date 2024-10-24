// Importing necessary components and assets
import Section from "./Section";            // Section wrapper component for layout
import Heading from "./Heading";            // Heading component for section titles
import { service1, service2, service3, check } from "../assets";  // Assets for images and icons
import { brainwaveServices, brainwaveServicesIcons } from "../constants"; // Array constants for service data
import { 
  PhotoChatMessage, Gradient, VideoBar, VideoChatMessage 
} from "./design/Services"; // Design elements used within the services section
import Generating from "./Generating";      // Component for rendering a "generating" message

const Services = () => {
  return (
    <Section id="how-to-use">  {/* Section Wrapper with ID for navigation */}
      <div className="container">  {/* Container for layout structure */}
      
        {/* Heading component with a title and text for the section */}
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
        
          {/* First Service Block (Smartest AI) */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              {/* Image for Smartest AI service */}
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            {/* Text Content for Smartest AI service */}
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>

              {/* List of Brainwave services features */}
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} /> {/* Checkmark icon */}
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* A "Generating" message component */}
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Photo Editing Service Block */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                {/* Image for Photo Editing service */}
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              {/* Text Content for Photo Editing service */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app's photo editing feature. Try it now!
                </p>
              </div>

              {/* Photo Chat Message Design Component */}
              <PhotoChatMessage />
            </div>

            {/* Video Generation Service Block */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation engine. What will you create?
                </p>

                {/* Icons for different service features */}
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video generation preview section */}
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/* Video chat message and video control bar */}
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          {/* Gradient Design Element */}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;