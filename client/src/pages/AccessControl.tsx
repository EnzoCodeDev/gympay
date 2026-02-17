export default function AccessControl() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Control de Acceso</h1>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
            ● Sistema Activo
          </span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 text-2xl">
          🔑
        </div>
        <h3 className="text-lg font-bold text-gray-800">Puerta Principal</h3>
        <p className="text-gray-500 max-w-sm mt-2">
          Configura los permisos de acceso y revisa los logs de entrada/salida.
        </p>
      </div>
    </div>
  );
}
