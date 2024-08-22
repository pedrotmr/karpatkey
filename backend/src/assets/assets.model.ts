export type Asset = {
  id: number;
  name: string;
  type: "cryptocurrency" | "stocks" | "bonds" | "commodity" | "currency";
  value: number;
  performance: number;
  apr: number;
  performanceOverTime: number[];
  [key: string]: any;
};

export const mockAssets: Asset[] = [
  {
    id: 1,
    name: "Bitcoin",
    type: "cryptocurrency",
    value: 45000,
    performance: 5,
    apr: 10,
    performanceOverTime: generatePerformanceOverTime(45000, 10, 365),
  },
  {
    id: 2,
    name: "Ethereum",
    type: "cryptocurrency",
    value: 3000,
    performance: 3,
    apr: 8,
    performanceOverTime: generatePerformanceOverTime(3000, 5, 365),
  },
  {
    id: 3,
    name: "Apple Stock",
    type: "stocks",
    value: 150,
    performance: 2,
    apr: 5,
    performanceOverTime: generatePerformanceOverTime(150, 1, 365),
  },
  {
    id: 4,
    name: "Tesla Stock",
    type: "stocks",
    value: 700,
    performance: 4,
    apr: 6,
    performanceOverTime: generatePerformanceOverTime(700, 2, 365),
  },
  {
    id: 5,
    name: "US Treasury Bond",
    type: "bonds",
    value: 1000,
    performance: 1,
    apr: 3,
    performanceOverTime: generatePerformanceOverTime(1000, 0.5, 365),
  },
  {
    id: 6,
    name: "Litecoin",
    type: "cryptocurrency",
    value: 200,
    performance: 2.5,
    apr: 7,
    performanceOverTime: generatePerformanceOverTime(200, 3, 365),
  },
  {
    id: 7,
    name: "Google Stock",
    type: "stocks",
    value: 2800,
    performance: 3.5,
    apr: 5.5,
    performanceOverTime: generatePerformanceOverTime(2800, 4, 365),
  },
  {
    id: 8,
    name: "Corporate Bond",
    type: "bonds",
    value: 500,
    performance: 1.5,
    apr: 4,
    performanceOverTime: generatePerformanceOverTime(500, 0.8, 365),
  },
  {
    id: 9,
    name: "Ripple",
    type: "cryptocurrency",
    value: 1,
    performance: 0.5,
    apr: 2,
    performanceOverTime: generatePerformanceOverTime(1, 0.01, 365),
  },
  {
    id: 10,
    name: "Amazon Stock",
    type: "stocks",
    value: 3500,
    performance: 4.5,
    apr: 6.5,
    performanceOverTime: generatePerformanceOverTime(3500, 5, 365),
  },
  {
    id: 11,
    name: "Dogecoin",
    type: "cryptocurrency",
    value: 0.1,
    performance: -1,
    apr: 0.5,
    performanceOverTime: generatePerformanceOverTime(0.1, -0.01, 365),
  },
  {
    id: 12,
    name: "Microsoft Stock",
    type: "stocks",
    value: 2500,
    performance: -2,
    apr: 4,
    performanceOverTime: generatePerformanceOverTime(2500, -3, 365),
  },
  {
    id: 13,
    name: "Ethereum Classic",
    type: "cryptocurrency",
    value: 50,
    performance: -3,
    apr: 1,
    performanceOverTime: generatePerformanceOverTime(50, -0.5, 365),
  },
  {
    id: 14,
    name: "Netflix Stock",
    type: "stocks",
    value: 500,
    performance: 2,
    apr: 4,
    performanceOverTime: generatePerformanceOverTime(500, 2, 365),
  },
  {
    id: 15,
    name: "Gold",
    type: "commodity",
    value: 1800,
    performance: 1.5,
    apr: 3,
    performanceOverTime: generatePerformanceOverTime(1800, 1, 365),
  },
  {
    id: 16,
    name: "Facebook Stock",
    type: "stocks",
    value: 350,
    performance: 3,
    apr: 5,
    performanceOverTime: generatePerformanceOverTime(350, 1.5, 365),
  },
  {
    id: 17,
    name: "Euro",
    type: "currency",
    value: 1.2,
    performance: 0.5,
    apr: 1,
    performanceOverTime: generatePerformanceOverTime(1.2, 0.01, 365),
  },
  {
    id: 19,
    name: "Intel Stock",
    type: "stocks",
    value: 60,
    performance: -1.5,
    apr: 2,
    performanceOverTime: generatePerformanceOverTime(60, -0.5, 365),
  },
  {
    id: 20,
    name: "Eurobond",
    type: "bonds",
    value: 1000,
    performance: 1,
    apr: 2.5,
    performanceOverTime: generatePerformanceOverTime(1000, 0.5, 365),
  },
  {
    id: 21,
    name: "Litecoin Cash",
    type: "cryptocurrency",
    value: 10,
    performance: -2.5,
    apr: 0,
    performanceOverTime: generatePerformanceOverTime(10, -0.1, 365),
  },
  {
    id: 22,
    name: "Silver",
    type: "commodity",
    value: 25,
    performance: 1,
    apr: 2,
    performanceOverTime: generatePerformanceOverTime(25, 0.5, 365),
  },
  {
    id: 23,
    name: "US Treasury Bond 10-Year",
    type: "bonds",
    value: 2000,
    performance: 1.5,
    apr: 2.5,
    performanceOverTime: generatePerformanceOverTime(2000, 1, 365),
  },
  {
    id: 24,
    name: "Municipal Bond",
    type: "bonds",
    value: 800,
    performance: 1,
    apr: 2,
    performanceOverTime: generatePerformanceOverTime(800, 0.5, 365),
  },
  {
    id: 25,
    name: "Corporate Bond 2",
    type: "bonds",
    value: 1200,
    performance: 1.2,
    apr: 2.2,
    performanceOverTime: generatePerformanceOverTime(1200, 0.8, 365),
  },
];

function generatePerformanceOverTime(
  startValue: number,
  volatility: number,
  length: number
): number[] {
  const performanceOverTime: number[] = [];
  let currentValue = startValue;
  for (let i = 0; i < length; i++) {
    const random = Math.random() - 0.5;
    const change = currentValue * (volatility / 100) * random;
    currentValue += change;
    performanceOverTime.push(currentValue);
  }
  return performanceOverTime;
}
