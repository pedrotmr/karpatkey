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

export type AssetRespose = {
  pages: {
    page: number;
    limit: number;
    totalPages: number;
    from: number;
    to: number;
    total: number;
  };
  data: Asset[];
};
