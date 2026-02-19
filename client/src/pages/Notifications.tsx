import { useState, useEffect } from "react";
import { Bell, CheckCircle, Clock, Trash2, Info } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  is_read: number;
  created_at: string;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notifications");
      const data = await res.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const markAsRead = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/notifications/${id}/read`, {
        method: "PUT",
      });
      fetchNotifications();
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">
            Notificaciones
          </h1>
          <p className="text-gray-500">Alertas del sistema y recordatorios</p>
        </div>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
          Marcar todas como leídas
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Cargando notificaciones...
          </div>
        ) : notifications.length === 0 ? (
          <div className="p-16 text-center text-gray-400">
            <Bell size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium">No tienes notificaciones</p>
            <p className="text-sm">
              Te avisaremos cuando pase algo importante.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-6 flex gap-4 transition-colors ${n.is_read ? "opacity-60" : "bg-primary-50/10"}`}
              >
                <div
                  className={`mt-1 h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${
                    n.is_read
                      ? "bg-gray-100 text-gray-400"
                      : "bg-primary-100 text-primary-600"
                  }`}
                >
                  <Info size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3
                      className={`font-bold ${n.is_read ? "text-gray-700" : "text-gray-900"}`}
                    >
                      {n.title}
                    </h3>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12} />
                      {new Date(n.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {n.message}
                  </p>
                  {!n.is_read && (
                    <button
                      onClick={() => markAsRead(n.id)}
                      className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      <CheckCircle size={14} />
                      Marcar como leída
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
