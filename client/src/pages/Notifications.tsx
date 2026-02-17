export default function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Notificaciones</h1>
        <button className="text-primary text-sm font-medium hover:underline">
          Marcar todo como leído
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-4 text-2xl">
          🔔
        </div>
        <h3 className="text-lg font-bold text-gray-800">Centro de Mensajes</h3>
        <p className="text-gray-500 max-w-sm mt-2">
          Aquí recibirás alertas sobre pagos vencidos, nuevos registros y avisos
          del sistema.
        </p>
      </div>
    </div>
  );
}
