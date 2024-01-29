import { Container, Paper } from "@mantine/core";
import useNotificationStore from "../../stores/NotificationStore";

import MyNotification from "./Notification";

const NotificationList = () => {
  const notifications = useNotificationStore((state) => state.notifications);

  return (
    <Container style={{ position: 'fixed', top: 0, right: 0 }}>
      {notifications.map((notification) => (
        <MyNotification
          message={notification.message}
          type={notification.type}
          id={notification.id}
        />
      ))}
    </Container>
  );
};

export default NotificationList;
