import { IconX, IconCheck } from "@tabler/icons-react";
import { Notification, rem } from "@mantine/core";
import useNotificationStore from "../../stores/NotificationStore";
import { useEffect } from "react";

type MyNotificationProps = {
  message: string;
  type: "success" | "error";
  id: number;
};
const MyNotification: React.FC<MyNotificationProps> = ({
  message,
  type,
  id,
}) => {
  const removeNotification = useNotificationStore(
    (state) => state.removeNotification
  );
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(id);
    }, 50000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Notification
      title={type}
      color={type === "success" ? "green" : "red"}
      onClose={() => removeNotification(id)}
      icon={type === "success" ? checkIcon : xIcon}
      style={{width:'25vw', margin: '0.5rem'}}
    >
      {message}
    </Notification>
  );
};

export default MyNotification;
