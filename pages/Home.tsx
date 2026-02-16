
import React from 'react';
import { ArrowRight, Users, Zap, BarChart, ShieldCheck, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-10 lg:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            <Sparkles size={16} /> Solution for Future Logistics
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            แก้ปัญหาการ <span className="text-blue-600 bg-clip-text">ขาดแคลนแรงงาน</span> ด้วยพลัง AI
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            เปลี่ยนวิกฤตแรงงานให้เป็นโอกาสในการยกระดับธุรกิจ ด้วยระบบอัตโนมัติและปัญญาประดิษฐ์
            ที่ช่วยให้การทำงานในคลังสินค้าและการขนส่งมีประสิทธิภาพเหนือกว่าที่เคย
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/topic" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center gap-3">
              เริ่มเรียนรู้บทเรียน <ArrowRight size={20} />
            </Link>
            <Link to="/videos" className="px-10 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center gap-3">
              <PlayCircle size={20} /> ดูวิดีโอแนะนำ
            </Link>
          </div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "ประสิทธิภาพเพิ่มขึ้น", value: "45%", icon: Zap, color: "text-amber-500" },
          { label: "ลดการใช้แรงงาน", value: "30%", icon: Users, color: "text-blue-500" },
          { label: "ความแม่นยำสูงถึง", value: "99.9%", icon: BarChart, color: "text-emerald-500" },
          { label: "ความปลอดภัยพุ่ง", value: "60%", icon: ShieldCheck, color: "text-indigo-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center hover:shadow-lg transition-shadow">
            <div className={`mx-auto w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div className="text-3xl font-black mb-1 text-slate-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Main Content Split */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            ทำไมต้องใช้ AI มาทดแทนแรงงานในจุดที่สำคัญ?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">งานที่เสี่ยงอันตรายและซ้ำซาก</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">AI สามารถควบคุมหุ่นยนต์เพื่อทำงานในสภาวะที่มนุษย์ทำได้ยาก หรือลดความเมื่อยล้าจากงานยกของหนัก</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">การทำงานที่ต้องการความเร็วสูง</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">การคัดแยกพัสดุหลายหมื่นชิ้นต่อชั่วโมงเป็นเรื่องที่ AI และระบบอัตโนมัติทำได้แม่นยำกว่ามนุษย์หลายเท่า</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <img 
            src="https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg" 
            className="relative w-full h-[500px] object-cover rounded-[3rem] shadow-2xl border-8 border-white dark:border-slate-800"
            alt="AI Warehouse" 
          />
        </div>
      </section>
    </div>
  );
};

import { Sparkles } from 'lucide-react';
export default Home;
