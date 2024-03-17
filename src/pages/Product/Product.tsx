import { useParams } from 'react-router-dom'
import { useProductDataContext } from '../../hooks/useProductData'
import { useEffect } from 'react'
import { Button } from '../../components/Button/Button'
import styles from './Product.module.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

export const Product = () => {
  const { id } = useParams()
  const {
    isProductLoading,
    productDetail,
    getProductByID,
    clearProductDetailState,
  } = useProductDataContext()

  if (!id) {
    return <div>Produto não encontrado</div>
  }

  useEffect(() => {
    return clearProductDetailState
  }, [clearProductDetailState])

  useEffect(() => {
    getProductByID(id)
  }, [id, getProductByID])

  if (isProductLoading || !productDetail) {
    return <div>Carregando produto</div>
  }

  return (
    <section className={styles.ProductSection}>
      <div className={styles.ProductSection_Container}>
        <div className={styles.ProductSectionContainer_Slide}>
          <Swiper navigation modules={[Navigation]} className={styles.mySwiper}>
            <SwiperSlide>
              <img src={productDetail.urlImg} alt="imagem" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={productDetail.urlImg} alt="imagem" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={productDetail.urlImg} alt="imagem" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={productDetail.urlImg} alt="imagem" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.ProductSection_Details}>
        <h2>{productDetail.name}</h2>
        <div className={styles.ProductSection_Assessment}>
          <div className={styles.ProductSectionAssessment_stars}>
            {[...new Array(Math.round(5))].map((_, index) => {
              if (index <= productDetail.assessment - 1) {
                return <FaStar key={index} />
              } else {
                return <FaRegStar key={index} />
              }
            })}
          </div>
          <span>
            {productDetail.assessment}
            <FaStar />
          </span>
        </div>
        <div className={styles.ProductSectionDetails_price}>
          {productDetail.discountValue ? (
            <>
              <p className={styles.ProductSectionDetailsPrice_Default}>
                R${productDetail.discountValue}
              </p>
              <p className={styles.ProductSectionDetailsPrice_Custom}>
                R${productDetail.price}
              </p>
            </>
          ) : (
            <p className={styles.ProductSectionDetailsPrice_Default}>
              R${productDetail.price}
            </p>
          )}
        </div>
        <div className={styles.ProductSectionDetails_Decription}>
          <p className={styles.ProductSectionDetailsDecription_Title}>
            Descricao do produto
          </p>
          <p className={styles.ProductSectionDetailsDecription_Content}>
            {productDetail.description}
          </p>

          <div className={styles.ProductSize}>
            <p className={styles.ProductSize_Title}>Tamanho</p>
            <div className={styles.ProductSize_List}>
              {productDetail.listOfSize.map((_, index) => {
                return<div className={`${styles.ProductSizeList_item} ${styles.active}`}>{productDetail.listOfSize[index]} </div>
              })}
            </div>
          </div>
        </div>
        <Button text="COMPRAR" type="shop" />
      </div>
    </section>
  )
}
