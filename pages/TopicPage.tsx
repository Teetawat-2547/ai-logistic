import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../constants';

const Accordion = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        {title}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="p-4 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 leading-relaxed">{children}</div>}
    </div>
  );
};

const TopicPage: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">AI กับการแก้ปัญหาการขาดแคลนแรงงาน</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-3xl">
          เจาะลึกการใช้ระบบอัตโนมัติและปัญญาประดิษฐ์เพื่อลดการพึ่งพาแรงงานคนในจุดที่วิกฤต พร้อมแบบทดสอบวัดความเข้าใจ
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-bold mb-6 text-blue-600">เนื้อหาหลัก</h2>
          <Accordion title="บทนำ: วิกฤตแรงงานโลจิสติกส์">
            ปัจจุบันอุตสาหกรรมโลจิสติกส์กำลังเผชิญกับปัญหาการขาดแคลนแรงงานอย่างหนัก โดยเฉพาะในส่วนของการคัดแยกสินค้าและการขนส่งขั้นสุดท้าย (Last-mile delivery)
          </Accordion>
          <Accordion title="AI เข้ามาช่วยอย่างไร?">
            AI ช่วยในการประมวลผลข้อมูลขนาดใหญ่เพื่อวางแผนเส้นทางที่สั้นที่สุด ลดภาระของพนักงานขับรถ และการใช้หุ่นยนต์ AMR (Autonomous Mobile Robots) ในคลังสินค้าช่วยให้งานคัดแยกทำได้ตลอด 24 ชั่วโมง
          </Accordion>
          <Accordion title="ความแม่นยำและการลดความผิดพลาด">
            จากการศึกษาพบว่าการใช้ AI ลดความผิดพลาดจากมนุษย์ (Human Error) ได้มากกว่า 30-50% ซึ่งส่งผลต่อความพึงพอใจของลูกค้าโดยตรง
          </Accordion>
          <Accordion title="อนาคตของแรงงานสายโลจิสติกส์">
            แรงงานในอนาคตจะไม่ใช่คนแบกของ แต่จะเป็น "ผู้ควบคุมระบบ AI" ซึ่งจำเป็นต้องมีการ Re-skill และ Up-skill ทักษะด้านดิจิทัลเป็นหลัก
          </Accordion>

          <div className="mt-10">
            <h2 className="text-xl font-bold mb-6">Infographic</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg" className="w-full transform group-hover:scale-105 transition-transform duration-700" alt="Warehouse AI" />
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="text-blue-600" /> ควิซทดสอบความเข้าใจ
            </h2>
            <div className="space-y-8">
              {QUIZ_QUESTIONS.map((q) => (
                <div key={q.id}>
                  <p className="font-bold mb-4 text-slate-800 dark:text-slate-200">{q.id}. {q.question}</p>
                  <div className="grid gap-2">
                    {q.options.map((opt, idx) => {
                      const isCorrect = idx === q.correctAnswer;
                      const isSelected = answers[q.id] === idx;
                      let bgClass = "bg-slate-50 dark:bg-slate-800";
                      if (submitted) {
                        if (isCorrect) bgClass = "bg-emerald-100 dark:bg-emerald-900/40 border-emerald-500";
                        else if (isSelected) bgClass = "bg-rose-100 dark:bg-rose-900/40 border-rose-500";
                      } else if (isSelected) {
                        bgClass = "bg-blue-100 dark:bg-blue-900/40 border-blue-500";
                      }
                      
                      return (
                        <button
                          key={idx}
                          disabled={submitted}
                          onClick={() => setAnswers(prev => ({ ...prev, [q.id]: idx }))}
                          className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${bgClass} ${isSelected ? 'border-2' : 'border-transparent'}`}
                        >
                          <span>{opt}</span>
                          {submitted && isCorrect && <CheckCircle2 className="text-emerald-600" size={18} />}
                          {submitted && isSelected && !isCorrect && <XCircle className="text-rose-600" size={18} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
              {!submitted ? (
                <button 
                  onClick={() => setSubmitted(true)}
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-colors"
                >
                  ส่งคำตอบ
                </button>
              ) : (
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">คะแนนของคุณ: {calculateScore()} / {QUIZ_QUESTIONS.length}</div>
                  <button 
                    onClick={() => { setAnswers({}); setSubmitted(false); }}
                    className="mt-4 px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    เริ่มทำใหม่
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopicPage;