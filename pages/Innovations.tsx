import React from 'react';
import { Lightbulb, Layers, Zap } from 'lucide-react';

const InnovationCard = ({ title, desc, features, company }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col hover:border-blue-200 dark:hover:border-blue-900 transition-all group">
    <h3 className="text-xl font-bold text-blue-600 mb-4 group-hover:translate-x-1 transition-transform">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{desc}</p>
    <ul className="space-y-2 mb-6">
      {features.map((f: string) => (
        <li key={f} className="text-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {f}
        </li>
      ))}
    </ul>
    <div className="pt-4 border-t border-slate-50 dark:border-slate-800 text-sm">
      <span className="text-slate-400">ตัวอย่างองค์กร: </span>
      <span className="font-bold text-slate-700 dark:text-slate-200">{company}</span>
    </div>
  </div>
);

const Innovations: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Lightbulb className="text-blue-600" /> นวัตกรรมล้ำสมัยในโลจิสติกส์
        </h1>
        <p className="text-slate-500 dark:text-slate-400">เทคโนโลยีที่กำลังเปลี่ยนโฉมหน้าอุตสาหกรรมการขนส่งในปัจจุบัน</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <InnovationCard 
          title="AI Demand Forecasting"
          desc="ใช้ AI วิเคราะห์ข้อมูลประวัติยอดขาย สภาพอากาศ และเทรนด์โซเชียลเพื่อคาดการณ์ความต้องการ"
          features={["ลดสินค้าล้นคลัง", "เพิ่มความแม่นยำ 40%", "ลดต้นทุนบริหารจัดการ"]}
          company="Amazon, CP Group"
        />
        <InnovationCard 
          title="IoT Asset Tracking"
          desc="เซนเซอร์อัจฉริยะติดตามอุณหภูมิ ความชื้น และพิกัดสินค้าแบบวินาทีต่อวินาที"
          features={["ลดอัตราการเสียของสินค้า", "ความโปร่งใส 100%", "แจ้งเตือนอัตโนมัติ"]}
          company="DHL, SCG Logistics"
        />
        <InnovationCard 
          title="Warehouse Robotics"
          desc="หุ่นยนต์อัตโนมัติ (AMR) ที่คัดแยกและลำเลียงสินค้าโดยไม่ต้องใช้คนควบคุม"
          features={["ทำงานต่อเนื่อง 24/7", "ความแม่นยำเกือบ 100%", "ลดการใช้พื้นที่ 30%"]}
          company="Amazon Robotics, Alibaba"
        />
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Layers className="text-blue-600" /> ตารางเปรียบเทียบเทคโนโลยี
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-4 text-left font-bold rounded-l-xl">เทคโนโลยี</th>
                <th className="p-4 text-left font-bold">ผลกระทบ</th>
                <th className="p-4 text-left font-bold rounded-r-xl">ความยากในการติดตั้ง</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-4 font-bold text-blue-600">AI Forecasting</td>
                <td className="p-4">สูงมาก (ลดต้นทุนได้มหาศาล)</td>
                <td className="p-4"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs">ปานกลาง</span></td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-blue-600">IoT Sensors</td>
                <td className="p-4">สูง (เพิ่มคุณภาพบริการ)</td>
                <td className="p-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs">ง่าย</span></td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-blue-600">AMR Robots</td>
                <td className="p-4">สูงมาก (แก้ปัญหาแรงงาน)</td>
                <td className="p-4"><span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-lg text-xs">ยาก</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Innovations;