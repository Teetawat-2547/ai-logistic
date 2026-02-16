import React from 'react';
import { Library, ExternalLink } from 'lucide-react';

const references = [
  { id: 1, title: "Supply Chain Management: Strategy, Planning, and Operation", author: "Chopra, S., & Meindl, P. (2016)", publisher: "Pearson Education" },
  { id: 2, title: "The Handbook of Logistics and Distribution Management", author: "Rushton, A., Croucher, P., & Baker, P. (2017)", publisher: "Kogan Page" },
  { id: 3, title: "Top Strategic Technology Trends for Supply Chain", author: "Gartner. (2024)", url: "https://www.gartner.com" },
  { id: 4, title: "Artificial Intelligence in Supply Chain Operations", author: "McKinsey & Company. (2023)", url: "https://www.mckinsey.com" },
  { id: 5, title: "Logistics Trend Radar", author: "DHL. (2022)", url: "https://www.dhl.com" },
  { id: 6, title: "AI-powered Supply Chain Solutions", author: "IBM. (2023)", url: "https://www.ibm.com" },
];

const References: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
       <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Library className="text-blue-600" /> เอกสารอ้างอิง
        </h1>
        <p className="text-slate-500 dark:text-slate-400">แหล่งรวบรวมข้อมูลสนับสนุนงานวิจัยและบทความวิชาการ</p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <ul className="space-y-6">
          {references.map((ref) => (
            <li key={ref.id} className="flex gap-4 group">
              <div className="text-blue-600 font-bold text-lg min-w-[24px]">{ref.id}.</div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1 group-hover:text-blue-600 transition-colors">
                  {ref.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 italic">
                  {ref.author}. {ref.publisher && `— ${ref.publisher}`}
                </p>
                {ref.url && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-500 hover:underline">
                    เยี่ยมชมเว็บไซต์ <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default References;