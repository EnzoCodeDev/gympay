import { useState, useEffect } from "react";
import {
  Settings as SettingsIcon,
  Save,
  Building,
  Bell,
  Shield,
  Paintbrush,
} from "lucide-react";

export default function Settings() {
  const [settings, setSettings] = useState({
    gym_name: "GymPay Centro",
    email: "contacto@gympay.com",
    address: "Calle Principal #123",
    notifications_enabled: "true",
    theme: "dark",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/settings");
        const data = await res.json();
        if (data.length > 0) {
          const mapped = data.reduce(
            (acc: any, curr: any) => ({ ...acc, [curr.key]: curr.value }),
            {},
          );
          setSettings((prev) => ({ ...prev, ...mapped }));
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      for (const [key, value] of Object.entries(settings)) {
        await fetch("http://localhost:3000/api/settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, value }),
        });
      }
      alert("Configuración guardada");
    } catch (error) {
      console.error("Error saving settings:", error);
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: "general", label: "General", icon: Building },
    { id: "notifications", label: "Notificaciones", icon: Bell },
    { id: "security", label: "Seguridad", icon: Shield },
    { id: "appearance", label: "Apariencia", icon: Paintbrush },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">
          Configuración
        </h1>
        <p className="text-gray-500">
          Administra los parámetros globales del sistema
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Navigation */}
        <div className="w-full md:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                tab.id === "general"
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20"
                  : "text-gray-500 hover:bg-white hover:text-primary-600"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1">
          <form
            onSubmit={handleSave}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6"
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Nombre del Gimnasio
                </label>
                <input
                  type="text"
                  value={settings.gym_name}
                  onChange={(e) =>
                    setSettings({ ...settings, gym_name: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email de Contacto
                </label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) =>
                    setSettings({ ...settings, email: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Dirección
                </label>
                <input
                  type="text"
                  value={settings.address}
                  onChange={(e) =>
                    setSettings({ ...settings, address: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    Notificaciones por Email
                  </p>
                  <p className="text-xs text-gray-500">
                    Enviar alertas automáticas a los clientes
                  </p>
                </div>
                <div
                  onClick={() =>
                    setSettings({
                      ...settings,
                      notifications_enabled:
                        settings.notifications_enabled === "true"
                          ? "false"
                          : "true",
                    })
                  }
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors relative ${settings.notifications_enabled === "true" ? "bg-primary-600" : "bg-gray-300"}`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.notifications_enabled === "true" ? "left-7" : "left-1"}`}
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="btn-primary flex items-center gap-2 px-8"
              >
                <Save size={18} />
                {saving ? "Guardando..." : "Guardar Cambios"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
