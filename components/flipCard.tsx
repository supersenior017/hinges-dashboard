/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next'
import TransContent from "trans/TransContent";

export default function FlipCard({ item, index, handleClickFlipCard, clickState, id }) {
  const [isClicked, setIsClicked] = useState(false);
  // const [isFirst, setIsFirst] = useState(false);

  const { t } = useTranslation('common')

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(prev => !prev);
  };
  

  // useEffect(() => {
  //   if (isClicked) {
  //     handleClickFlipCard(index)
  //     setIsFirst(true);
  //   } else {
  //     if (isFirst) {
  //       handleClickFlipCard(null);
  //     }
  //   }
  // }, [isClicked])

  return (
    <div
      className={`${isClicked ? "-mt-4" : ""}`}
      onClick={handleClick}
    >
      {
        !isClicked ? (
          <div className="">
            <div className="card flip-card flex flex-col justify-center cursor-pointer mb-4 transition delay-150 duration-300 ease-in-out transform hover:scale-105">
              <div
                className={`hover_div py-8 px-4 sm:px-10 lg:px-6 h-full sm:justify-between rounded-xl flex flex-col sm:flex-row items-center`}
              >
                <div className="bg-darkblue p-5 rounded-full">
                  <img
                    src={item.feature_image.asset.url}
                    alt={item.feature_image_alt_text}
                    style={{ objectFit: 'contain', width: '40px', height: '40px' }}
                  />
                </div>
                <div className="part-right pl-3">
                  <h3 className="heading less text-center lg:text-left">
                    {t(`data.allFeatures.${id}.feature_title`)}
                  </h3>
                  {isClicked ? (
                    <div>
                      {
                        item.feature_learn_more_contentRaw.map((item, index) => (
                          <div key={index} className="description mt-5 sm:mt-7 text-center lg:text-left space-y-4"
                          >
                            {
                              item.children[0].text.length > 0 &&
                              t(`data.allFeatures.${id}.feature_learn_more_contentRaw.${index}.children.0.text`)
                            }
                          </div>
                        ))
                      }
                    </div>
                  ) : (
                    <p className="description mt-4 text-center lg:text-left">
                      {t(`data.allFeatures.${id}.feature_description`)}
                    </p>
                  )}
                </div>
              </div>

              <div className="pb-4 px-10 sm:px-20 lg:px-10 flex items-center w-full">
                <p className="learn_more mt-4 mx-auto">
                  <img
                    src="/icons/plus.png"
                    alt="right arrow"
                    style={{ width: 24, height: 24 }}
                  />
                  <span className="ml-3 hidden sm:inline">{t('main.learn_more')}</span>
                </p>
              </div>
              {isClicked && (
                <p className="learn_more mt-4">
                  <img
                    src="/icons/minus.png"
                    alt="right arrow"
                    className="mr-3"
                    style={{ width: 24, height: 24 }}
                  />
                </p>
              )
              }
            </div>
          </div>
        ) : (
          <div className="card flip-card-expand flip-card-shadow flex flex-col justify-center cursor-pointer mb-4">
            <div
              className={`hover_div pt-10 pb-0 px-10 sm:px-20 lg:px-10 h-full rounded-tr-xl rounded-tl-xl`}
            >
              <div className="flex justify-center items-center flex-col sm:flex-row">
                <div className="bg-darkblue p-5 rounded-full">
                  <img
                    src={item.feature_image.asset.url}
                    alt={item.feature_image_alt_text}
                    style={{ objectFit: 'contain', width: '40px', height: '40px' }}
                  />
                </div>
                <div>
                  <div className="heading_clicked text-center lg:text-left pl-5">
                    {t(`data.allFeatures.${id}.feature_title`)}
                  </div>
                </div>
              </div>
              <div className="hr" />
            </div>
            <div className="hover_div py-6 px-10 sm:px-20 lg:px-10 h-full">
              {item.feature_learn_more_contentRaw.map((item, index) => (
                <div key={index} className="description text-center lg:text-left space-y-4">
                  {
                    item.children[0].text.length > 0 && (index === 0 ? 
                      <p className="text-white font-bold pb-4">{t(`data.allFeatures.${id}.feature_learn_more_contentRaw.${index}.children.0.text`)}</p>
                    :
                      <p>{t(`data.allFeatures.${id}.feature_learn_more_contentRaw.${index}.children.0.text`)}</p>)
                  }
                </div>
              ))}
              <div className="hr" />
            </div>
            <div className="hover_div rounded-b-xl pb-10 px-10 justify-center sm:justify-start sm:px-20 lg:px-10 flex items-center w-full">
              <p className="learn_more mt-4">
                <img
                  src="/icons/minus.png"
                  alt="right arrow"
                  style={{ width: 24, height: 24 }}
                />
                <span className="pl-4 hidden sm:block">Less</span>
              </p>
            </div>
          </div>
        )
      }
    </div>
  );
}
