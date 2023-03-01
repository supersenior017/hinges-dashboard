import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.

export default function PieChart({ chart_data, chart_colors }) {
  const { width } = useWindowSize();
  const [diagonalLength, setDiagonalLength] = useState(50);
  const [horizontalLength, setHorizontalLength] = useState(100);
  const [linkOffset, setLinkOffset] = useState(-20);
  const [linkStrokeWidth, setLinkStrokeWidth] = useState(2);
  const [isMobile, setMobile] = useState(false);
  const [showRadialLabels, setShowRadialLabels] = useState(true);
  const [margin, setMargin] = useState({
    top: 40,
    right: 160,
    bottom: 40,
    left: 220,
  });

  useEffect(() => {
    if (width >= 1200) {
      setShowRadialLabels(true);
      setMargin({
        top: 50,
        right: 200,
        bottom: 70,
        left: 220,
      });
      setDiagonalLength(50);
      setHorizontalLength(100);
      setLinkOffset(-20);
      setLinkStrokeWidth(2);
      setMobile(false);
    } else if (width >= 992 && width < 1200) {
      setShowRadialLabels(true);
      setMargin({
        top: 50,
        right: 160,
        bottom: 40,
        left: 220,
      });
      setDiagonalLength(50);
      setHorizontalLength(50);
      setLinkOffset(-20);
      setLinkStrokeWidth(2);
      setMobile(false);
    } else if (width >= 768 && width < 992) {
      setShowRadialLabels(true);
      setMargin({
        top: 50,
        right: 160,
        bottom: 40,
        left: 220,
      });
      setDiagonalLength(30);
      setHorizontalLength(30);
      setLinkOffset(-15);
      setLinkStrokeWidth(2);
      setMobile(false);
    } else if (width >= 576 && width < 768) {
      setShowRadialLabels(true);
      setMargin({
        top: 50,
        right: 160,
        bottom: 40,
        left: 160,
      });
      setDiagonalLength(30);
      setHorizontalLength(30);
      setLinkOffset(-15);
      setLinkStrokeWidth(2);
      setMobile(false);
    } else if (width >= 376 && width < 576) {
      setShowRadialLabels(false);
      setMargin({
        top: 10,
        right: 50,
        bottom: 20,
        left: 50,
      });
      setDiagonalLength(14);
      setHorizontalLength(8);
      setLinkOffset(-10);
      setLinkStrokeWidth(1);
      setMobile(true);
    } else if (width < 376) {
      setShowRadialLabels(false);
      setMargin({
        top: 0,
        right: 50,
        bottom: 0,
        left: 50,
      });
      setDiagonalLength(10);
      setHorizontalLength(5);
      setLinkOffset(-5);
      setLinkStrokeWidth(1);
      setMobile(true);
    }
  }, [width]);

  return (
    <ResponsivePie
      data={chart_data}
      margin={{
        top: margin.top,
        right: margin.right,
        bottom: margin.bottom,
        left: margin.left,
      }}
      innerRadius={0.75}
      padAngle={0}
      cornerRadius={0}
      colors={chart_colors}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabel={function (e) {
        return  e.value + "%";
      }}
      radialLabelsSkipAngle={0}
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={0}
      radialLabelsLinkHorizontalLength={isMobile ? 20 :100}
      radialLabelsLinkStrokeWidth={2}
      radialLabelsTextXOffset={2}
      radialLabelsTextColor="#ffffff"
      radialLabelsLinkColor="#ffffff"
      enableRadialLabels={false}
      enableSliceLabels={true}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#ffffff"
      isInteractive={false}
      startAngle={360}
      endAngle={0}
    />
  );
}
