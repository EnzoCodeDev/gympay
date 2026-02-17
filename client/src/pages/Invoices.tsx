export default function Invoices() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Facturación</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-gray-50 text-gray-500 rounded-full flex items-center justify-center mb-4 text-2xl">
          🧾
        </div>
        <h3 className="text-lg font-bold text-gray-800">Facturas Emitidas</h3>
        <p className="text-gray-500 max-w-sm mt-2">
          Consulta el historial de facturas generadas para los clientes.
        </p>
      </div>
    </div>
  );
}
