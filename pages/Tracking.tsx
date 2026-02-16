
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MOCK_PARCELS } from '../constants';
import { Package, MapPin, Clock, AlertTriangle, Sparkles, Navigation, CloudRain, Info, Search } from 'lucide-react';
import { getLogisticsInsights } from '../services/gemini';

const Tracking: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [insights, setInsights] = useState<string>('');
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredParcels = MOCK_PARCELS.filter(p => 
    p.parcelId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.receiver.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (mapRef.current && !mapInstance) {
      // Initialize Map pointing to Thailand center
      const map = L.map(mapRef.current).setView([13.75, 100.5], 6);
      
      // Use Standard OpenStreetMap tiles for better compatibility
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add data points
      MOCK_PARCELS.forEach(p => {
        const color = p.status === 'Delivered' ? '#10b981' : p.status === 'Delayed' ? '#ef4444' : '#3b82f6';
        
        // Draw Route Line (Origin to Destination)
        L.polyline([[p.originLat, p.originLon], [p.destLat, p.destLon]], {
          color: color,
          weight: 1,
          opacity: 0.2,
          dashArray: '5, 5'
        }).addTo(map);

        // Marker for Current Location
        const marker = L.circleMarker([p.currentLat, p.currentLon], {
          radius: 8,
          fillColor: color,
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9
        }).addTo(map);

        marker.bindPopup(`
          <div class="p-2 font-sans min-w-[150px]">
            <b class="text-blue-600 text-lg">${p.parcelId}</b><br/>
            <div class="mt-1 border-t pt-1 border-slate-100">
              <div class="flex justify-between"><b>สถานะ:</b> <span class="text-slate-600">${p.status}</span></div>
              <div class="flex justify-between"><b>ปลายทาง:</b> <span class="text-slate-600">${p.destCity}</span></div>
              <div class="flex justify-between"><b>อากาศ:</b> <span class="text-slate-600">${p.weather}</span></div>
              <div class="mt-2 text-center text-[10px] font-bold py-0.5 rounded ${
                p.riskLevel === 'High Risk' ? 'bg-red-100 text-red-600' : 
                p.riskLevel === 'Medium Risk' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
              }">${p.riskLevel}</div>
            </div>
          </div>
        `);
      });

      // Force Leaflet to recalculate container size
      setTimeout(() => {
        map.invalidateSize();
      }, 200);

      setMapInstance(map);
    }
  }, [mapInstance]);

  const handleAnalyze = async () => {
    setLoadingInsights(true);
    const dataStr = MOCK_PARCELS.map(p => 
      `${p.parcelId}: ${p.status}, Weather: ${p.weather}, Risk: ${p.riskLevel}, Traffic: ${p.trafficScore}`
    ).join(' | ');
    const result = await getLogisticsInsights(`วิเคราะห์ความเสี่ยงและประสิทธิภาพจากข้อมูลพัสดุ 15 รายการนี้: ${dataStr}`);
    setInsights(result || '');
    setLoadingInsights(false);
  };

  const stats = {
    total: MOCK_PARCELS.length,
    inTransit: MOCK_PARCELS.filter(p => p.status === 'In Transit').length,
    delayed: MOCK_PARCELS.filter(p => p.status === 'Delayed').length,
    delivered: MOCK_PARCELS.filter(p => p.status === 'Delivered').length,
  };

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      {/* Header & Control */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-500/20">
              <Navigation size={28} />
            </div>
            Command Center
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Real-time GPS Tracking System (from Excel Data)</p>
        </div>
        <div className="flex gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="ค้นหา Tracking ID..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={handleAnalyze}
            disabled={loadingInsights}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50"
          >
            {loadingInsights ? (
              <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> AI Thinking...</span>
            ) : (
              <><Sparkles size={20} /> AI Analysis</>
            )}
          </button>
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="text-slate-400 text-xs font-bold uppercase mb-2">Total Parcels</div>
          <div className="text-3xl font-black">{stats.total}</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-[2rem] border border-blue-100 dark:border-blue-800/50 shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase mb-2">In Transit</div>
          <div className="text-3xl font-black">{stats.inTransit}</div>
        </div>
        <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-[2rem] border border-rose-100 dark:border-rose-800/50 shadow-sm">
          <div className="text-rose-600 dark:text-rose-400 text-xs font-bold uppercase mb-2">Delayed</div>
          <div className="text-3xl font-black">{stats.delayed}</div>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-[2rem] border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
          <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase mb-2">Delivered</div>
          <div className="text-3xl font-black">{stats.delivered}</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Map */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 h-[600px] relative">
            <div ref={mapRef} className="h-full w-full z-0" />
            <div className="absolute top-6 right-6 z-[1000] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-[10px] font-black mb-3 uppercase tracking-widest text-slate-400">Map Legend</h4>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 text-xs font-bold"><div className="w-3 h-3 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" /> In Transit</div>
                <div className="flex items-center gap-3 text-xs font-bold"><div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" /> Delivered</div>
                <div className="flex items-center gap-3 text-xs font-bold"><div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" /> Delayed / Risk</div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Package size={24} className="text-blue-600" /> ตารางพัสดุทั้งหมด
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-[10px] font-black uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                    <th className="pb-4 pr-4">ID / Destination</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Weather</th>
                    <th className="pb-4 text-right">Delay (Min)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                  {filteredParcels.map(p => (
                    <tr key={p.parcelId} className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-5 pr-4">
                        <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600">{p.parcelId}</div>
                        <div className="text-xs text-slate-500 font-medium">To: {p.destCity}</div>
                      </td>
                      <td className="py-5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                          p.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                          p.status === 'Delayed' ? 'bg-rose-100 text-rose-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="py-5">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                           <CloudRain size={14} className="text-blue-400" /> {p.weather}
                        </div>
                      </td>
                      <td className="py-5 text-right font-black">
                        {p.predictedDelay > 0 ? <span className="text-rose-500">+{p.predictedDelay}</span> : <span className="text-slate-300">-</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-8">
          {/* AI Insights Card */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group min-h-[300px]">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <Sparkles size={24} className="text-blue-400" /> AI Insights Analysis
              </h2>
              <div className="text-blue-100/90 leading-relaxed text-sm font-medium">
                {insights ? (
                  <div className="animate-in slide-in-from-left duration-500 whitespace-pre-wrap">{insights}</div>
                ) : (
                  <div className="opacity-60 italic py-10 text-center">
                    กดปุ่ม AI Analysis เพื่อเริ่มต้นวิเคราะห์สถานะ...
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-colors" />
          </div>

          {/* Quick Stats Grid */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Fleet Monitoring</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] font-black mb-2 uppercase tracking-widest text-slate-400">Current Avg. Speed</div>
                <div className="text-2xl font-black">64.5 <span className="text-xs font-bold text-slate-400">KM/H</span></div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800">
                <div className="flex justify-between text-[10px] font-black mb-2 uppercase tracking-widest text-slate-400">Weather Impact</div>
                <div className="text-2xl font-black text-rose-500">Moderate</div>
              </div>
            </div>
          </div>

          {/* Alert List */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <AlertTriangle size={20} className="text-rose-500" /> Critical Alerts
            </h2>
            <div className="space-y-4">
              {MOCK_PARCELS.filter(p => p.status === 'Delayed').map(p => (
                <div key={p.parcelId} className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border-l-4 border-rose-500">
                  <div className="text-[10px] font-black text-rose-700 dark:text-rose-400 uppercase tracking-widest mb-1">{p.parcelId}</div>
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300">ล่าช้าที่จุด {p.destCity}</div>
                  <div className="text-[10px] text-slate-400 mt-1">สาเหตุ: {p.weather} + การจราจรหนาแน่น</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
