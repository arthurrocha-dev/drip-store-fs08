import { Button } from "../Button/Button";
import BannerImg from "./img/TenisJordan.png";
import styles from './Banner.module.css'

export const Banner = (): JSX.Element => {
  return (
    <>
      <div className={styles.BannerContainer}>
            <div className={styles.ContainerImage}>
              <img className={styles.Image} src={BannerImg} alt="Banner Exclusive" />
            </div>
            <div className={styles.Infos}>
              <p className={styles.SupTitle}>{"Oferta Especial"}</p>
              <h3 className={styles.Title}>{"Air Jordan edição de colecionador"}</h3>
              <p className={styles.Description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
              <div className={styles.ButtonBanner}>
              <Button text="Ver Oferta"/>
              </div>
            </div>
          </div>
    </>
  )
};