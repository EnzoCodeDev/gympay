import { Users, DollarSign, CalendarCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Clientes Activos
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2 font-display">
              1,240
            </h3>
            <span className="text-green-500 text-xs font-semibold bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">
              +12% este mes
            </span>
          </div>
          <div className="p-4 bg-blue-50 text-blue-500 rounded-full">
            <Users size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Ingresos Mensuales
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">$42.5k</h3>
            <span className="text-green-500 text-xs font-semibold bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">
              +8% vs mes anterior
            </span>
          </div>
          <div className="p-4 bg-green-50 text-green-500 rounded-full">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Asistencias Hoy</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">145</h3>
            <span className="text-gray-400 text-xs font-semibold mt-2 inline-block">
              Promedio: 180
            </span>
          </div>
          <div className="p-4 bg-purple-50 text-purple-500 rounded-full">
            <CalendarCheck size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">
            Actividad Reciente
          </h2>
          <button className="text-primary text-sm font-medium hover:underline">
            Ver todo
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Usuario</th>
                <th className="px-6 py-4">Acción</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm text-gray-700">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    JP
                  </div>
                  Juan Pérez
                </td>
                <td className="px-6 py-4">Pago de Membresía</td>
                <td className="px-6 py-4 text-gray-500">Hoy, 10:23 AM</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Completado
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                    MG
                  </div>
                  Maria Garcia
                </td>
                <td className="px-6 py-4">Registro Nuevo</td>
                <td className="px-6 py-4 text-gray-500">Ayer, 4:15 PM</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    Nuevo
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">
                    CR
                  </div>
                  Carlos Ruiz
                </td>
                <td className="px-6 py-4">Intento de Acceso</td>
                <td className="px-6 py-4 text-gray-500">Ayer, 2:30 PM</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    Denegado
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
