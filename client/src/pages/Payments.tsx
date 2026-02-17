export default function Payments() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Historial de Pagos</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 text-2xl">
          💰
        </div>
        <h3 className="text-lg font-bold text-gray-800">Transacciones</h3>
        <p className="text-gray-500 max-w-sm mt-2">
          Visualiza y filtra todos los ingresos y pagos realizados en el
          sistema.
        </p>
      </div>
    </div>
  );
}
