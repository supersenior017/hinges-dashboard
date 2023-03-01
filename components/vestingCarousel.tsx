import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class VestingCarousel extends React.Component {
    slider: any;

    constructor(props) {
        super(props)
    }

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
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
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
                <div className="">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="flex flex-col space-y-2 text-lg text-black">
                            <div className="py-2 bg-vestingHeader text-xl rounded-lg text-white text-center">Percentage</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>1%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>2%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>12%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>10%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>20%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>20%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>10%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>5%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>5%</div>
                            <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>15%</div>
                        </div>
                        <div className="flex flex-col space-y-2 text-lg">
                            <div className="py-2 bg-vestingHeader text-xl rounded-lg text-white text-center ml-2">Tokens</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>20,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>40,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>240,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>200,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>400,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>400,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>200,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>100,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>100,000,000</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#EE346E' }}>300,000,000</div>
                        </div>
                        <div className="flex flex-col space-y-2 text-lg text-black">
                            <div className="py-2 bg-vestingHeader text-xl rounded-lg text-white text-center ml-2">Category</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Seed Round</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Private Round</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Public Round</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Team</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Platform Development</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Operations</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Marketing & Partnerships</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Bounties & Promotions</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Legal & Advisors</div>
                            <div className="text-left pl-2 py-1 ml-2" style={{ backgroundColor: '#696FB2' }}>Strategic Partners/exchanges</div>
                        </div>
                        <div className="flex flex-col space-y-2 text-lg">
                            <div className="py-2 bg-vestingHeader text-xl rounded-lg text-white text-center mx-2">Vesting</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>2 month cliff, 20% unlocked per month thereafter.</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>1 month cliff, 12.5% unlocked per month thereafter.</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>40% unlocked at TGE, 15% unlocked per month thereafter.</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>6 month cliff, 5% unlocked per month thereafter.</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>5% unlocked per month</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>5% unlocked per month</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>5% unlocked per month</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>3 month cliff, 100% unlocked thereafter.</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>6 month cliff, 12.5% per month thereafter.</div>
                            <div className="text-left pl-2 py-1 mx-2" style={{ backgroundColor: '#EE346E' }}>3 month cliff, 12.5% per month thereafter.</div>
                        </div>
                    </Slider>
                </div>
            </>
        );
    }
}
