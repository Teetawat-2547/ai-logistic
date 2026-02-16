import React from 'react';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';

const StatBox = ({ label, value, color }: any) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{label}</p>
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <BarChart3 className="text-blue-600" /> กรณีศึกษา: องค์กรระดับโลก
        </h1>
        <p className="text-slate-500 dark:text-slate-400">ตัวอย่างความสำเร็จจากการนำ AI มาใช้งานจริงในระดับอุตสาหกรรม</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp size={80} />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Tesco (UK)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            เทสโก้นำ AI มาใช้ในการวิเคราะห์ความต้องการสินค้าอาหารสดวันต่อวัน ช่วยลดปริมาณอาหารที่ต้องทิ้ง (Food Waste) ได้มหาศาล และบริหารจัดการสต็อกได้อย่างมีประสิทธิภาพ
          </p>
          <div className="grid grid-cols-2 gap-4">
            <StatBox label="ลดของเสีย" value="15%" color="text-emerald-600" />
            <StatBox label="แม่นยำขึ้น" value="25%" color="text-blue-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={80} />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Walmart (USA)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            วอลมาร์ตใช้ระบบ AI คัดเลือกเส้นทางการเดินรถขนส่ง และใช้หุ่นยนต์สำรวจชั้นวางสินค้าอัตโนมัติ ทำให้สินค้าไม่เคยขาดสต็อกในสาขาใหญ่ๆ
          </p>
          <div className="grid grid-cols-2 gap-4">
            <StatBox label="ลดต้นทุนขนส่ง" value="30%" color="text-emerald-600" />
            <StatBox label="เพิ่มความเร็ว" value="40%" color="text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Timeline การพัฒนาสู่ยุค AI</h2>
          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-blue-600/30">
            <div className="relative pl-10">
               <div className="absolute left-0 top-1.5 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900" />
               <div className="text-blue-400 font-bold text-sm mb-1">2018 - 2019</div>
               <div className="font-bold mb-1 text-lg">ยุค Big Data & ERP</div>
               <p className="text-slate-400 text-sm">เริ่มการเก็บรวบรวมข้อมูลอย่างเป็นระบบและการติดตั้งระบบ Cloud ERP</p>
            </div>
            <div className="relative pl-10">
               <div className="absolute left-0 top-1.5 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900" />
               <div className="text-blue-400 font-bold text-sm mb-1">2020 - 2022</div>
               <div className="font-bold mb-1 text-lg">ยุค Machine Learning</div>
               <p className="text-slate-400 text-sm">การใช้โมเดลพยากรณ์ความต้องการในช่วง COVID-19 ที่ตลาดมีความผันผวนสูง</p>
            </div>
            <div className="relative pl-10">
               <div className="absolute left-0 top-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 animate-pulse" />
               <div className="text-blue-400 font-bold text-sm mb-1">2023 - Present</div>
               <div className="font-bold mb-1 text-lg">ยุค Autonomous & GenAI</div>
               <p className="text-slate-400 text-sm">การควบคุมคลังสินค้าด้วยหุ่นยนต์เต็มรูปแบบและการใช้ GenAI ช่วยตัดสินใจ</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target size={20} className="text-blue-400" /> กราฟสรุปผลลัพธ์ (โดยเฉลี่ย)
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="text-slate-300">ความแม่นยำในการจัดส่ง</span><span className="text-blue-400 font-bold">98%</span></div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[98%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="text-slate-300">การประหยัดพลังงาน</span><span className="text-blue-400 font-bold">45%</span></div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[45%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="text-slate-300">ความพึงพอใจของลูกค้า</span><span className="text-blue-400 font-bold">92%</span></div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[92%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;