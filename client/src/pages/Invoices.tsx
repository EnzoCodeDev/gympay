import { useState, useEffect } from "react";
import { FileText, Download, Search, Eye, Filter } from "lucide-react";

interface Invoice {
  id: number;
  invoice_number: string;
  client_name: string;
  total: number;
  issue_date: string;
  amount: number;
}

export default function Invoices() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchInvoices = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/invoices");
      const data = await res.json();
      setInvoices(data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.invoice_number.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">
            Facturación
          </h1>
          <p className="text-gray-500">
            Consulta y descarga comprobantes de pago
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Filter size={18} />
            Filtros
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por cliente o número de factura..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Factura #
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Cliente
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Fecha
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Total
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    Cargando...
                  </td>
                </tr>
              ) : filteredInvoices.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-400"
                  >
                    No se encontraron facturas
                  </td>
                </tr>
              ) : (
                filteredInvoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono text-sm text-gray-900 font-bold">
                      {inv.invoice_number}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {inv.client_name}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {new Date(inv.issue_date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      ${inv.total.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                          <Download size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
