
import React, { useState } from 'react';
import { Play, Clock, Tag, X, ArrowRight } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  duration: string;
  tag: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

const videos: VideoItem[] = [
  { 
    id: 1, 
    title: "AI & Robotics Solving Labor Shortage in Warehouses", 
    duration: "12:45", 
    tag: "Intelligence",
    thumbnail: "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg",
    videoUrl: "https://www.youtube.com/embed/H5mS5V_8B9E",
    description: "เจาะลึกการทำงานของหุ่นยนต์อัตโนมัติในคลังสินค้าที่ช่วยลดภาระงานหนักและแก้ปัญหาการขาดแคลนแรงงาน"
  },
  { 
    id: 2, 
    title: "The Future of Autonomous Last-Mile Delivery", 
    duration: "08:20", 
    tag: "Delivery",
    thumbnail: "https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg",
    videoUrl: "https://www.youtube.com/embed/6_3M_XN_D60",
    description: "นวัตกรรมรถส่งของไร้คนขับที่จะมาเปลี่ยนโฉมหน้าการขนส่งสินค้าถึงหน้าบ้านคุณ"
  },
  { 
    id: 3, 
    title: "How Global Giants Use AI for Supply Chain", 
    duration: "15:10", 
    tag: "Case Study",
    thumbnail: "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg",
    videoUrl: "https://www.youtube.com/embed/I5YvE1_o-1U",
    description: "วิเคราะห์กลยุทธ์ของบริษัทระดับโลกในการใช้ Big Data และ AI เพื่อควบคุม Supply Chain ให้แม่นยำ"
  },
  { 
    id: 4, 
    title: "Green Logistics: Reducing Carbon with AI", 
    duration: "10:30", 
    tag: "Environment",
    thumbnail: "https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg",
    videoUrl: "https://www.youtube.com/embed/gW7-qE_R6H8",
    description: "การใช้ AI ออกแบบเส้นทางเดินรถเพื่อลดการใช้พลังงานและลดการปล่อยก๊าซคาร์บอนสู่ชั้นบรรยากาศ"
  },
];

const VideoLessons: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">วิดีโอความรู้ (Video Insights)</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
          เรียนรู้ผ่านวิดีโอเพื่อความเข้าใจที่ลึกซึ้งยิ่งขึ้นเกี่ยวกับการประยุกต์ใช้เทคโนโลยี AI และระบบอัตโนมัติในอุตสาหกรรมโลจิสติกส์ยุคใหม่
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {videos.map((v) => (
          <div 
            key={v.id} 
            onClick={() => setSelectedVideo(v)}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-72 overflow-hidden">
              <img 
                src={v.thumbnail} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={v.title} 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-2">
                <Clock size={14} /> {v.duration}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1.5 border border-blue-100 dark:border-blue-800">
                  <Tag size={12} /> {v.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight mb-3">
                {v.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {v.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all">
                คลิกเพื่อรับชมวิดีโอ <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedVideo(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 dark:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-white rounded-full transition-all"
            >
              <X size={24} />
            </button>

            <div className="aspect-video w-full bg-black">
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                  Now Playing
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-2">
                  <Clock size={14} /> {selectedVideo.duration}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {selectedVideo.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoLessons;
