
import { Parcel, QuizQuestion } from './types';

export const MOCK_PARCELS: Parcel[] = [
  {
    parcelId: 'SHP001', sender: 'Center-BKK', receiver: 'Chiang Mai', originCity: 'Bangkok', destCity: 'Chiang Mai',
    originLat: 13.75, originLon: 100.5, destLat: 18.79, destLon: 98.98, currentLat: 15.23, currentLon: 99.85,
    status: 'In Transit', timestamp: '10:30', speed: 65, weather: 'Rain', trafficScore: 85,
    distanceRemaining: 406.51, predictedDelay: 85, riskLevel: 'High Risk'
  },
  {
    parcelId: 'SHP002', sender: 'Center-BKK', receiver: 'Phuket Hub', originCity: 'Bangkok', destCity: 'Phuket',
    originLat: 13.75, originLon: 100.5, destLat: 7.88, destLon: 98.39, currentLat: 10.5, currentLon: 99.1,
    status: 'In Transit', timestamp: '10:35', speed: 70, weather: 'Clear', trafficScore: 20,
    distanceRemaining: 301.57, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP003', sender: 'Center-BKK', receiver: 'Khon Kaen', originCity: 'Bangkok', destCity: 'Khon Kaen',
    originLat: 13.75, originLon: 100.5, destLat: 16.43, destLon: 102.82, currentLat: 14.8, currentLon: 101.5,
    status: 'Delayed', timestamp: '10:00', speed: 15, weather: 'Storm', trafficScore: 95,
    distanceRemaining: 229.85, predictedDelay: 160, riskLevel: 'High Risk'
  },
  {
    parcelId: 'SHP004', sender: 'Center-BKK', receiver: 'Hat Yai', originCity: 'Bangkok', destCity: 'Hat Yai',
    originLat: 13.75, originLon: 100.5, destLat: 7.0, destLon: 100.47, currentLat: 8.5, currentLon: 99.8,
    status: 'In Transit', timestamp: '11:00', speed: 80, weather: 'Clear', trafficScore: 30,
    distanceRemaining: 182.39, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP005', sender: 'Eastern Hub', receiver: 'Rayong Hub', originCity: 'Chonburi', destCity: 'Rayong',
    originLat: 13.36, originLon: 100.98, destLat: 12.68, destLon: 101.28, currentLat: 12.9, currentLon: 101.1,
    status: 'Delivered', timestamp: '9:00', speed: 0, weather: 'Clear', trafficScore: 10,
    distanceRemaining: 31.29, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP006', sender: 'Center-BKK', receiver: 'Ayutthaya', originCity: 'Bangkok', destCity: 'Ayutthaya',
    originLat: 13.75, originLon: 100.5, destLat: 14.35, destLon: 100.58, currentLat: 14.1, currentLon: 100.55,
    status: 'In Transit', timestamp: '10:45', speed: 55, weather: 'Rain', trafficScore: 75,
    distanceRemaining: 27.98, predictedDelay: 65, riskLevel: 'High Risk'
  },
  {
    parcelId: 'SHP007', sender: 'North Hub', receiver: 'Chiang Rai', originCity: 'Chiang Mai', destCity: 'Chiang Rai',
    originLat: 18.79, originLon: 98.98, destLat: 19.91, destLon: 99.84, currentLat: 19.2, currentLon: 99.4,
    status: 'In Transit', timestamp: '10:15', speed: 60, weather: 'Fog', trafficScore: 60,
    distanceRemaining: 91.42, predictedDelay: 50, riskLevel: 'Medium Risk'
  },
  {
    parcelId: 'SHP008', sender: 'Center-BKK', receiver: 'Korat Hub', originCity: 'Bangkok', destCity: 'Korat',
    originLat: 13.75, originLon: 100.5, destLat: 14.97, destLon: 102.1, currentLat: 14.5, currentLon: 101.2,
    status: 'In Transit', timestamp: '11:10', speed: 75, weather: 'Clear', trafficScore: 35,
    distanceRemaining: 109.99, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP009', sender: 'South Hub', receiver: 'Surat Thani', originCity: 'Phuket', destCity: 'Surat Thani',
    originLat: 7.88, originLon: 98.39, destLat: 9.13, destLon: 99.33, currentLat: 8.5, currentLon: 98.9,
    status: 'Delayed', timestamp: '9:45', speed: 20, weather: 'Rain', trafficScore: 80,
    distanceRemaining: 84.49, predictedDelay: 65, riskLevel: 'High Risk'
  },
  {
    parcelId: 'SHP010', sender: 'Center-BKK', receiver: 'Ubon Hub', originCity: 'Bangkok', destCity: 'Ubon',
    originLat: 13.75, originLon: 100.5, destLat: 15.24, destLon: 104.85, currentLat: 14.8, currentLon: 103.5,
    status: 'In Transit', timestamp: '10:55', speed: 85, weather: 'Clear', trafficScore: 25,
    distanceRemaining: 153.01, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP011', sender: 'Center-BKK', receiver: 'Pattaya Hub', originCity: 'Bangkok', destCity: 'Pattaya',
    originLat: 13.75, originLon: 100.5, destLat: 12.92, destLon: 100.88, currentLat: 13.2, currentLon: 100.7,
    status: 'In Transit', timestamp: '11:20', speed: 90, weather: 'Clear', trafficScore: 40,
    distanceRemaining: 36.73, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP012', sender: 'West Hub', receiver: 'Kanchanaburi', originCity: 'Ratchaburi', destCity: 'Kanchanaburi',
    originLat: 13.53, originLon: 99.82, destLat: 14.02, destLon: 99.53, currentLat: 13.8, currentLon: 99.65,
    status: 'In Transit', timestamp: '10:25', speed: 65, weather: 'Cloudy', trafficScore: 45,
    distanceRemaining: 27.68, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP013', sender: 'Center-BKK', receiver: 'Tak Hub', originCity: 'Bangkok', destCity: 'Tak',
    originLat: 13.75, originLon: 100.5, destLat: 16.88, destLon: 99.12, currentLat: 15.5, currentLon: 99.8,
    status: 'In Transit', timestamp: '10:40', speed: 72, weather: 'Rain', trafficScore: 65,
    distanceRemaining: 169.76, predictedDelay: 65, riskLevel: 'High Risk'
  },
  {
    parcelId: 'SHP014', sender: 'NE Hub', receiver: 'Udon Thani', originCity: 'Khon Kaen', destCity: 'Udon Thani',
    originLat: 16.43, originLon: 102.82, destLat: 17.41, destLon: 102.78, currentLat: 16.9, currentLon: 102.8,
    status: 'In Transit', timestamp: '11:05', speed: 68, weather: 'Clear', trafficScore: 20,
    distanceRemaining: 56.74, predictedDelay: 0, riskLevel: 'Low Risk'
  },
  {
    parcelId: 'SHP015', sender: 'South Hub', receiver: 'Trang Hub', originCity: 'Hat Yai', destCity: 'Trang',
    originLat: 7.0, originLon: 100.47, destLat: 7.56, destLon: 99.6, currentLat: 7.3, currentLon: 100.0,
    status: 'Delayed', timestamp: '10:10', speed: 30, weather: 'Storm', trafficScore: 90,
    distanceRemaining: 52.73, predictedDelay: 160, riskLevel: 'High Risk'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "AI ช่วยลดแรงงานคนได้มากที่สุดในส่วนใดของโลจิสติกส์?",
    options: ["การตลาด", "คลังสินค้า", "งานขาย", "งานบัญชี"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "AI สามารถทำงานได้กี่ชั่วโมงต่อวัน?",
    options: ["8 ชั่วโมง", "12 ชั่วโมง", "24 ชั่วโมง", "เฉพาะเวลาทำการ"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "ข้อใดคือข้อดีหลักของ AI ในการจัดการสินค้า?",
    options: ["เหนื่อยง่าย", "ทำงานช้า", "ความแม่นยำสูง", "ต้องพักบ่อย"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "ข้อจำกัดสำคัญที่สุดของการเริ่มนำ AI มาใช้คืออะไร?",
    options: ["ใช้งานยาก", "ต้นทุนเริ่มต้นสูง", "ไม่มีประโยชน์", "หาซื้อยาก"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Green Logistics เน้นเรื่องใดเป็นหลัก?",
    options: ["การเพิ่มกำไรสูงสุด", "ความสวยงามของบรรจุภัณฑ์", "ความยั่งยืนและการลดมลพิษ", "การใช้แรงงานราคาถูก"],
    correctAnswer: 2,
  }
];
