import { useContext } from "react";
import Notification from "../ui/Notification";
import MainHeader from "./MainHeader";
import NotificationContext from "@/store/NotificationContext";

export default function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <MainHeader />
      <main className="container mx-auto px-4">{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}
