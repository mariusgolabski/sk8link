import { useContext } from "react";

import NotificationContext from "../../store/NotificationContext";

function Notification({ title, message, status }) {
  const notificationCtx = useContext(NotificationContext);

  let statusClasses =
    "p-2 md:p-8 fixed bottom-0 left-0 w-full flex justify-between items-center text-white cursor-pointer shadow-md";

  if (status === "success") {
    statusClasses += " bg-green-500";
  } else if (status === "error") {
    statusClasses += " bg-red-600";
  } else if (status === "pending") {
    statusClasses += " bg-blue-500";
  } else {
    statusClasses += " bg-gray-900";
  }

  return (
    <div className={statusClasses} onClick={notificationCtx.hideNotification}>
      <h2 className="m-0 text-lg md:text-xl">{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
