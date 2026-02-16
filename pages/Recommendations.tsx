import React, { useState, useEffect } from 'react';
// Added Zap to the imports to fix the undefined name error
import { Rocket, TrendingUp, Leaf, Monitor, Cloud, Zap } from 'lucide-react';
import { WeatherData } from '../types';

const RecCard = ({ icon: Icon, title, desc, tag }: any) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
    <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
      <Icon size={20} />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">{tag}</span>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Recommendations: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02")
      .then(res => res.json())
      .then(data => {
        if (data.main) {
          setWeather({
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            city: "Bangkok"
          });
        }
      })
      .catch(err => console.error("Weather API error", err));
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Rocket className="text-blue-600" /> ข้อเสนอแนะและทิศทางอนาคต
        </h1>
        <p className="text-slate-500 dark:text-slate-400">สรุปแนวโน้มเทคโนโลยีที่คุณควรจับตามองเพื่อปรับตัวให้ทันโลก</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <RecCard 
          icon={TrendingUp} 
          tag="Strategic"
          title="AI Support for Decision"
          desc="นำ AI มาประมวลผลข้อมูล Real-time เพื่อช่วยผู้บริหารตัดสินใจเรื่องการสต็อกสินค้าอย่างแม่นยำ"
        />
        <RecCard 
          icon={Cloud} 
          tag="Infrastructure"
          title="Cloud-based Platform"
          desc="เปลี่ยนจากระบบ Offline เป็นระบบ Cloud เพื่อความยืดหยุ่นและการทำงานร่วมกับคู่ค้าได้ทั่วโลก"
        />
        <RecCard 
          icon={Monitor} 
          tag="Emerging Tech"
          title="Digital Twin Logistics"
          desc="การจำลองคลังสินค้าในโลกดิจิทัลเพื่อทดสอบการจัดวางและหาจุดบกพร่องก่อนเริ่มใช้งานจริง"
        />
        <RecCard 
          icon={Leaf} 
          tag="Sustainability"
          title="Green Logistics"
          desc="ใช้ AI ออกแบบเส้นทางที่สั้นที่สุดเพื่อลดการปล่อยคาร์บอนและประหยัดน้ำมันเชื้อเพลิง"
        />
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 mb-12 text-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
           <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 min-w-[200px] text-center">
             {weather ? (
               <>
                 <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} className="mx-auto w-16" alt="Weather" />
                 <div className="text-4xl font-bold mb-1">{weather.temp}°C</div>
                 <div className="text-blue-100 text-sm font-medium">{weather.description}</div>
                 <div className="text-blue-200 text-xs mt-2 uppercase tracking-widest">{weather.city}</div>
               </>
             ) : (
               <div className="animate-pulse">Loading Weather...</div>
             )}
           </div>
           <div>
             <h2 className="text-2xl font-bold mb-4">บูรณาการข้อมูลสภาพอากาศ</h2>
             <p className="text-blue-100 leading-relaxed mb-4">
               ข้อมูลสภาพอากาศแบบเรียลไทม์เป็นปัจจัยสำคัญในงานโลจิสติกส์ยุคใหม่ 
               AI จะนำข้อมูลนี้ไปคำนวณความเสี่ยงบนท้องถนนแบบวินาทีต่อวินาที 
               เพื่อหลีกเลี่ยงพายุและฝนตกหนัก ช่วยให้การจัดส่งสินค้าตรงตามเวลาเสมอ
             </p>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl text-sm font-bold">
               {/* Fixed missing Zap icon reference */}
               <Zap size={16} /> ระบบปรับเส้นทางอัตโนมัติตามสภาพอากาศเปิดใช้งานอยู่
             </div>
           </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">แบบฟอร์มแสดงความคิดเห็น</h2>
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
           <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMYFORMURL/viewform?embedded=true" 
            className="w-full h-full"
            title="Feedback Form"
           >
             กำลังโหลด...
           </iframe>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;