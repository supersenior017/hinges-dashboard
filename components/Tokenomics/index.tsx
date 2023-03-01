import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { Fade } from "react-awesome-reveal";
import transContent from "../../trans/TransContent";
const PieChart = dynamic(import("../pieChart"));
import { useMediaQuery } from "react-responsive";

export default function Tokenomics() {
  const [chartColors, setChartColors] = useState(null);
  const [content, setContent] = useState(transContent);
  const [chartData, setChartData] = useState(null);

  const { t } = useTranslation("common");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const handleSetData = () => {
    const tokenomics_data = [...content.data.allTokenomics[0].tokenomics_data];
    const percentage = [];
    const labels = [];
    const chart_colors = [];
    // logic for making % always equal to 100
    let sum = 0;

    for (let i = 0; i < tokenomics_data.length; i++) {
      percentage.push(tokenomics_data[i].tokenomics_percentage);
      labels.push(tokenomics_data[i].tokenomics_title);
      chart_colors.push(tokenomics_data[i].color.hex);
      sum += tokenomics_data[i].tokenomics_percentage;
    }
    if (sum > 100) {
      let extra = sum - 100;
      let max = Math.max(...percentage);
      let index = percentage.indexOf(max);
      percentage[index] = max - extra;
    }
    if (sum < 100) {
      let extra = 100 - sum;
      let min = Math.min(...percentage);
      let index = percentage.indexOf(min);
      percentage[index] = min + extra;
    }

    // formatting data for pie chart
    const chart_data = [];
    for (let i = 0; i < percentage.length; i++) {
      chart_data.push({
        id: labels[i],
        label: labels[i],
        value: percentage[i],
        color: chart_colors[i],
      });
    }

    setChartData(chart_data);
    setChartColors(chart_colors);
  };

  useEffect(() => {
    handleSetData();
  }, [content]);

  return (
    <section className="section-2 section-tokenomics">
      <div className="main_container mx-auto px-4 pb-2">
        <div className="tokenomics_container">
          <Fade direction="up" triggerOnce={true}>
            <h2 className="serial_heading mb-5 text-center text-[45px] font-['quicksand-bold']">
              {t("tokenomics")}
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce={true}>
            <p className="text-center text-[#7857eb] text-[35px] font-['roboto-regular']">
              {t("tokenomics_string_1")}
            </p>
          </Fade>
          <Fade direction="up" triggerOnce={true}>
            <p className="text-center text-[20px] max-w-[800px] m-auto mt-[10px] sm:text-[#ffffff] text-[#7857eb]">
              {t("tokenomics_string_2")}
            </p>
          </Fade>
          <div className="min-w-[300px] w-[50%] my-[40px] m-auto">
            <img src="/images/pie-chart.png" />
          </div>
          {/* {isDesktopOrLaptop && (
            <div className="relative lg:h-[650px] h-[375px] md:h-[700px]  sm:mt-[50px]">
              <img
                className="absolute w-[60px] top-[45%] hidden md:block lg:block left-[49%]"
                src="./images/chart-icon.png"
                alt=""
              />
              <PieChart chart_data={chartData} chart_colors={chartColors} />
            </div>
          )}

          {!isDesktopOrLaptop && (
            <div className="flex relative lg:h-[650px] h-[375px] md:h-[700px] sm:mt-[50px] justify-center">
              <img
                className="absolute w-[60px] top-[41%] md:block lg:block"
                src="./images/chart-icon.png"
                alt=""
              />
              <PieChart chart_data={chartData} chart_colors={chartColors} />
            </div>
          )} */}

          <div className="pt-5 my-0 sm:mb-20 mb-5 bg-[#7857eb] lg:mx-16 mx-2 rounded-lg">
            <div className="horizontal_container px-14 md:px-6 xl:px-8 py-2">
              <div className=" lg:mx-20 horizontal_container_wrapper  grid grid-cols-1 lg:grid-cols-2 ">
                {chartData?.map((item, index) => {
                  return (
                    <Fade direction="up" key={index} triggerOnce={true}>
                      <div
                        className="chart_wrapper items-baseline"
                        key={item.id}
                      >
                        <div
                          className="w-[2px] h-[7px] mr-[3px] sm:w-[2px] sm:h-[11px] sm:mr-2 "
                          style={{ background: item.color }}
                        ></div>
                        <div
                          className="w-[2px] h-[10px] mr-[3px] sm:w-[2px] sm:h-[15px] sm:mr-2"
                          style={{ background: item.color }}
                        ></div>
                        <div
                          className="w-[2px] h-[14px] mr-[3px] sm:w-[2px] sm:h-[20px] sm:mr-2"
                          style={{ background: item.color }}
                        ></div>
                        <div
                          className="w-[2px] h-[16px] mr-[3px] sm:w-[2px] sm:h-[22px] sm:mr-2"
                          style={{ background: item.color }}
                        ></div>
                        <div
                          className="w-[2px] h-[18px] mr-[8px] sm:w-[2px] sm:h-[23px] sm:mr-10"
                          style={{ background: item.color }}
                        ></div>

                        <p className=" font-bold sm:text-[25px] text-[18px]  mr-[4px] sm:mr-5 text-center">
                          {item.value}%
                        </p>
                        <p className="label_text sm:text-[23px] text-[14px]">
                          {item.label}
                        </p>
                      </div>
                    </Fade>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
