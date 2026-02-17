export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Reportes y Estadísticas
      </h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4 text-2xl">
          📊
        </div>
        <h3 className="text-lg font-bold text-gray-800">
          Análisis del Negocio
        </h3>
        <p className="text-gray-500 max-w-sm mt-2">
          Genera reportes detallados sobre ingresos, retención de clientes y
          más.
        </p>
      </div>
    </div>
  );
}
