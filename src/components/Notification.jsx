// Importing the necessary assets and constants
import { notification1 } from "../assets";
import { notificationImages } from "../constants";

// Notification component definition
// It accepts two props: 'className' and 'title'
const Notification = ({ className, title }) => {
  return (
    // Main notification container
    // Applies default classes, and additional classes passed via 'className'
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* Notification icon image */}
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      {/* Main content area of the notification */}
      <div className="flex-1">
        {/* Notification title */}
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        {/* Bottom section: user avatars and time */}
        <div className="flex items-center justify-between">
          {/* List of user avatar images */}
          <ul className="flex -m-0.5">
            {/* Looping through the notificationImages array to display each image */}
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                {/* Avatar image inside the circular border */}
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>

          {/* Timestamp displaying how long ago the notification was */}
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

// Export the Notification component as the default export of this module
export default Notification;
