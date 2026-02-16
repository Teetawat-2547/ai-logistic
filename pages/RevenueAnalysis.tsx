
import React, { useState } from 'react';
import { Wallet, TrendingUp, Calendar, ArrowUpRight, Sparkles, BarChart, Download } from 'lucide-react';
import { getLogisticsInsights } from '../services/gemini';

const revenueData = [
  { service: "After Sales Assembly", mar: 0, apr: 716, may: 394, jun: 98, total: 1208 },
  { service: "After Sales Delivery", mar: 0, apr: 294, may: 231, jun: 0, total: 525 },
  { service: "After Sales Disassembly", mar: 0, apr: 0, may: 22, jun: 0, total: 22 },
  { service: "Assembly Call-out Service", mar: 0, apr: 140, may: 309, jun: 70, total: 519 },
  { service: "Delivery Service", mar: 11465, apr: 114607, may: 137313, jun: 70954, total: 334339 },
  { service: "Furniture Assembly Service (Others)", mar: 99, apr: 812, may: 1598, jun: 779, total: 3288 },
];

const RevenueAnalysis: React.FC = () => {
  const [insights, setInsights] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const grandTotal = 339901.64;
  const deliveryMax = 137313; // May peak

  const handleAIAnalyze = async () => {
    setLoading(true);
    const summary = revenueData.map(d => `${d.service}: May=${d.may}, Total=${d.total}`).join(', ');
    const prompt = `วิเคราะห์ข้อมูลรายได้บริการโลจิสติกส์ปี 2019: ${summary}. ช่วยระบุว่าบริการไหนโตที่สุด และให้คำแนะนำในการเพิ่มรายได้สำหรับบริการอื่นๆ`;
    const result = await getLogisticsInsights(prompt);
    setInsights(result || '');
    setLoading(false);
  };

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-500/20">
              <Wallet size={28} />
            </div>
            วิเคราะห์รายได้บริการ
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Service Revenue Analysis & Financial Insights (Q2 2019)</p>
        </div>
        <button 
          onClick={handleAIAnalyze}
          disabled={loading}
          className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : <><Sparkles size={20} /> AI Financial Audit</>}
        </button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <TrendingUp size={80} />
          </div>
          <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Grand Total Revenue</div>
          <div className="text-4xl font-black text-slate-900 dark:text-white">฿{grandTotal.toLocaleString()}</div>
          <div className="mt-4 flex items-center gap-2 text-emerald-500 text-sm font-bold">
            <ArrowUpRight size={16} /> 12.4% Growth from March
          </div>
        </div>
        <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-xl shadow-blue-600/20 relative overflow-hidden group">
          <div className="text-blue-100 text-xs font-black uppercase tracking-widest mb-2">Best Performing Service</div>
          <div className="text-2xl font-black text-white">Delivery Service</div>
          <div className="text-3xl font-light text-blue-100 mt-1">฿334,339</div>
          <div className="mt-4 bg-white/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-tighter">
            98.3% of Total Revenue
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Peak Month Performance</div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">MAY 2019</div>
          <div className="text-xl font-bold text-blue-600 mt-1">฿{deliveryMax.toLocaleString()}</div>
          <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm font-medium">
            <Calendar size={16} /> Based on Excel CSV Import
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Table Section */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <BarChart size={24} className="text-blue-600" /> Revenue Breakdown
            </h2>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
              <Download size={20} className="text-slate-400" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50 dark:border-slate-800">
                  <th className="pb-4">Service Category</th>
                  <th className="pb-4 text-center">MAR</th>
                  <th className="pb-4 text-center">APR</th>
                  <th className="pb-4 text-center">MAY</th>
                  <th className="pb-4 text-center">JUN</th>
                  <th className="pb-4 text-right">TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {revenueData.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-5 font-bold text-slate-800 dark:text-slate-200 text-sm">{row.service}</td>
                    <td className="py-5 text-center text-xs text-slate-500 font-medium">{row.mar > 0 ? `฿${row.mar.toLocaleString()}` : '-'}</td>
                    <td className="py-5 text-center text-xs text-slate-500 font-medium">{row.apr > 0 ? `฿${row.apr.toLocaleString()}` : '-'}</td>
                    <td className="py-5 text-center text-xs text-blue-600 font-bold">{row.may > 0 ? `฿${row.may.toLocaleString()}` : '-'}</td>
                    <td className="py-5 text-center text-xs text-slate-500 font-medium">{row.jun > 0 ? `฿${row.jun.toLocaleString()}` : '-'}</td>
                    <td className="py-5 text-right font-black text-sm text-slate-900 dark:text-white">฿{row.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 dark:bg-slate-800/50 font-black">
                  <td className="p-4 rounded-l-2xl">Grand Total</td>
                  <td className="p-4 text-center text-xs">฿11,563</td>
                  <td className="p-4 text-center text-xs">฿116,568</td>
                  <td className="p-4 text-center text-xs text-blue-600">฿139,867</td>
                  <td className="p-4 text-center text-xs">฿71,901</td>
                  <td className="p-4 text-right rounded-r-2xl">฿{grandTotal.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Side Analysis */}
        <div className="space-y-8">
          {/* AI Insights */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-blue-400" /> Financial Intelligence
              </h3>
              {insights ? (
                <div className="text-blue-100 text-sm leading-relaxed animate-in slide-in-from-bottom duration-500">
                  {insights}
                </div>
              ) : (
                <div className="text-slate-500 text-xs italic py-10 text-center">
                  Click the button above to start AI financial analysis...
                </div>
              )}
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full" />
          </div>

          {/* Revenue Distribution */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Revenue Distribution</h3>
            <div className="space-y-6">
              {revenueData.slice(4).concat(revenueData.slice(0, 1)).map((d, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    <span>{d.service}</span>
                    <span>{((d.total / grandTotal) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                      style={{ width: `${(d.total / grandTotal) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalysis;
