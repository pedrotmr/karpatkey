import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { Asset } from "../api/assets/type";

const TradingViewChart = ({ asset }: { asset: Asset }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const chartData = asset.performanceOverTime.map((value, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (364 - index));
    const formattedDate = date.toISOString().split("T")[0];
    return { time: formattedDate, value };
  });

  useEffect(() => {
    if (!chartContainerRef.current) return;
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      layout: {
        background: { color: "#eeeded" },
      },
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#6B6B6B",
      topColor: "#bdbdbd",
      bottomColor: "#eeeded",
    });
    newSeries.setData(chartData);
    chart.timeScale().applyOptions({ fixLeftEdge: true, fixRightEdge: true });
    return () => chart.remove();
  }, [asset, chartData]);

  return <div ref={chartContainerRef} />;
};

export default TradingViewChart;
