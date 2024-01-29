import { create } from "zustand";

export type NotificationType = {
  message: string;
  type: "success" | "error";
  id: number;
};

type NotificationStore = {
  notifications: NotificationType[];
  addNotification: (message: string, type: "success" | "error") => void;
  removeNotification: (id: number) => void;
};

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { message, type, id: Date.now() },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    })),
}));

export default useNotificationStore;