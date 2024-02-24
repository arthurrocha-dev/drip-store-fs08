import styles from "./Slide.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Tenis from "../assets/whiteNike.png";
import Bubles from "../assets/bubles.png";
import { SlideProps } from "./Slide.props";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";


export const Slide: React.FC<SlideProps> = ({ sales }) => {
  return (
    <div className={styles.slideShowcarouselContainer}>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sales.map((sale) => (
          <SwiperSlide>
            <section className={styles.firstContent}>
              <div className={styles.hero}>
                <h5>{sale.title}</h5>
                <h3>{sale.subtitle}</h3>
                <p>{sale.description}</p>
                <Link to={ROUTES.Products}>
                  <button>Ver Ofertas</button>
                </Link>
              </div>
              <img className={styles.bubles} src={Bubles} alt="Bubles" />
              <span>
                <img src={Tenis} alt="tenis da nike" />
              </span>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
