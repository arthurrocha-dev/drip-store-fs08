import styles from './Slide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Tenis from '../assets/whiteNike.png'
import Bubles from '../assets/bubles.png'
import { SlideProps } from './Slide.props';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';

//TODO: Melhorar responsividade do "Bubles" talvez transformando em .svg
//TODO: Reduzir repetição do código, como se chamasse apenas o componente pronto repetidas vezes.


export const Slide: React.FC<SlideProps> = ({ title, subtitle, text }) => {
    return (
        <div className={styles.slideShowcarouselContainer} >
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <section className={styles.firstContent}>
                        <div className={styles.hero}>
                            <h5>{title}</h5>
                            <h3>{subtitle}</h3>
                            <p>{text}</p>
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

                <SwiperSlide>
                    <section className={styles.firstContent}>
                        <div className={styles.hero}>
                            <h5>{title}</h5>
                            <h3>{subtitle}</h3>
                            <p>{text}</p>
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

                <SwiperSlide>
                    <section className={styles.firstContent}>
                        <div className={styles.hero}>
                            <h5>{title}</h5>
                            <h3>{subtitle}</h3>
                            <p>{text}</p>
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

                <SwiperSlide>
                    <section className={styles.firstContent}>
                        <div className={styles.hero}>
                            <h5>{title}</h5>
                            <h3>{subtitle}</h3>
                            <p>{text}</p>
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
            </Swiper>
            
        </div>
    );
}

