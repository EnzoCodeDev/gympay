export default function Attendance() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Control de Asistencia
      </h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center mb-4 text-2xl">
          📅
        </div>
        <h3 className="text-lg font-bold text-gray-800">Registro de Visitas</h3>
        <p className="text-gray-500 max-w-sm mt-2">
          Monitorea la asistencia de los clientes en tiempo real.
        </p>
      </div>
    </div>
  );
}
