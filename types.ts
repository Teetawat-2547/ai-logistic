
export interface Parcel {
  parcelId: string;
  sender: string;
  receiver: string;
  originCity: string;
  destCity: string;
  originLat: number;
  originLon: number;
  destLat: number;
  destLon: number;
  currentLat: number;
  currentLon: number;
  status: 'In Transit' | 'Delivered' | 'Delayed';
  timestamp: string;
  speed: number;
  weather: string;
  trafficScore: number;
  distanceRemaining: number;
  predictedDelay: number;
  riskLevel: 'High Risk' | 'Medium Risk' | 'Low Risk';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  city: string;
}
