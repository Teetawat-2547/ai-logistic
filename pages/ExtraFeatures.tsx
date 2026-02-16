import React, { useState } from 'react';
import { Search, Moon, Monitor, Wind } from 'lucide-react';

const features = [
  { id: 1, title: "Search Bar", icon: Search, desc: "ผู้ใช้งานสามารถค้นหาเนื้อหาภายในหน้านี้ได้แบบ Real-time", color: "text-blue-500" },
  { id: 2, title: "Dark Mode", icon: Moon, desc: "รองรับการใช้งานในสภาพแสงน้อย ลดอาการล้าของสายตา", color: "text-indigo-500" },
  { id: 3, title: "Scroll Animation", icon: Monitor, desc: "เพิ่มเอฟเฟกต์ Fade-in และ Slide-in เมื่อเลื่อนหน้าจอ", color: "text-emerald-500" },
  { id: 4, title: "Weather API Integration", icon: Wind, desc: "การดึงข้อมูลสภาพอากาศปัจจุบันมาช่วยในการตัดสินใจด้านโลจิสติกส์", color: "text-rose-500" },
];

const ExtraFeatures: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFeatures = features.filter(f => 
    f.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">ฟีเจอร์เสริม (Extra Features)</h1>
        <p className="text-slate-500 dark:text-slate-400">ตัวอย่างระบบการทำงานเพิ่มเติมที่ช่วยให้เว็บไซต์น่าสนใจยิ่งขึ้น</p>
      </div>

      <div className="mb-8 relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="ค้นหาฟีเจอร์..." 
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredFeatures.map((f) => (
          <div key={f.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-start gap-6 hover:shadow-lg transition-shadow">
            <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 ${f.color}`}>
              <f.icon size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">{f.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
        {filteredFeatures.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-500">ไม่พบฟีเจอร์ที่คุณค้นหา...</div>
        )}
      </div>
    </div>
  );
};

export default ExtraFeatures;