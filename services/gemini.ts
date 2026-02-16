
import { GoogleGenAI } from "@google/genai";

// Service to analyze logistics data using Gemini AI
export const getLogisticsInsights = async (parcelsData: string) => {
  // Always create a new GoogleGenAI instance right before making an API call
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `วิเคราะห์ข้อมูลสถานะพัสดุเหล่านี้ในเชิงรุก (Proactive Analysis): ${parcelsData}. ช่วยระบุว่า (1) เส้นทางไหนเสี่ยงที่สุด (2) สาเหตุหลักของความล่าช้าจากข้อมูลที่ให้มา และ (3) ข้อแนะนำในการปรับแผนการขนส่งเพื่อลดผลกระทบ ตอบเป็นภาษาไทย สรุปกระชับไม่เกิน 5 บรรทัด`,
      config: {
        systemInstruction: "You are a senior supply chain risk analyst and AI operations manager. Provide professional and data-driven insights in Thai.",
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "ขออภัย ไม่สามารถดึงข้อมูลวิเคราะห์จาก AI ได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง";
  }
};
