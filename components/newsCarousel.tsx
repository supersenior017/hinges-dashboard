import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewsCarousel({ allInthenews }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <Slider {...settings}>
      {allInthenews.map(item => {
        let newDate = new Date(item.inthenews_date);
        let strDate = newDate.toDateString();
        strDate = `${strDate.slice(4, 10)}, ${strDate.slice(11, 15)}`;
        return (
          <div className="news_card_slider mb-2" key={item._id}>
            <div className="p-5">
              <img
                src={item.inthenews_image.asset.url}
                alt={item.inthenews_image_alt_text}
                className="w-full h-auto object-cover rounded-xl"
              />
              <p className="date mt-3 sm:mt-5 text-center">{strDate}</p>
              <h3 className="title mt-3 sm:mt-5 text-center">
                {item.inthenews_title}
              </h3>
              <p className="mt-5 description text-center mb-2 sm:mb-8">
                {item.inthenews_description}
              </p>
            </div>

            <div className="flex flex-col items-center relative">
              <div className="border_div"></div>
              <div className="footer_div w-full py-5 flex justify-center">
                <a href={item.read_more_url} className="read_more text-center">
                  READ MORE
                  <img
                    src="/images/arrow-right.svg"
                    alt="right arrow"
                    className="ml-3"
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
