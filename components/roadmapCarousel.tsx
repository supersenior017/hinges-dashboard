import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
  allRoadmap?: any;
};


export default class RoadmapCarousel extends React.Component<IProps> {
  slider: any;
  
  constructor(props: IProps) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
  }

  goNext() {
    this.slider.slickNext();
  };

  goPrevious() {
    this.slider.slickPrev();
  };
  
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      arrows: false,
      draggable: false,
      accessibility: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <>
        <div className="flex justify-center space-x-2 sm:space-x-5 sm:mt-2 float-right">
          <div className="prevButton text-[#7857EB]" onClick={this.goPrevious}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg>
          </div>
          <div className="nextButton text-[#7857EB]" onClick={this.goNext}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="serial_heading text-[35px] mb-10 text-center sm:text-left">
            Roadmap
          </h2>
        </div>

        <div className="roadmap_container">
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.allRoadmap.map((item, index) => {
              return (
                <div className="roadmap_card" key={index}>
                  <h3 className="title pr-4">{item.roadmap_title}</h3>
                  <ul>
                    {item.roadmap_content.map(item => {
                      return (
                        <li key={item} className="text pr-4 mb-6">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}
