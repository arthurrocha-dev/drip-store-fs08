import { useParams } from 'react-router-dom'
import { useProductDataContext } from '../../hooks/useProductData'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button/Button'
import styles from './Product.module.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useShoppingCartContext } from '../../hooks/useShoppingCart'

export const Product = () => {
  const { addProduct } = useShoppingCartContext()

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

  const [sizeIndexChosen, setIsSizeIndexChosen] = useState(Number)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const definSizeIndexChosen = (i: number) => {
    setIsSizeIndexChosen(i)
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
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper}
          >
            {productDetail.listUrlImg.map((url, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={url} alt="imagem" />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper
            // onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper2}
          >
            {productDetail.listUrlImg.map((url, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={url} alt="imagem" />
                </SwiperSlide>
              )
            })}
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
              {productDetail.listOfSize.sort().map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.ProductSizeList_item} ${
                      productDetail.listOfSize[index] === sizeIndexChosen
                        ? styles.active
                        : ''
                    }`}
                    onClick={() => {
                      definSizeIndexChosen(productDetail.listOfSize[index])
                    }}
                  >
                    {productDetail.listOfSize[index]}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Button
          text="COMPRAR"
          type="shop"
          onClick={() => {
            addProduct(productDetail)
          }}
        />
      </div>
    </section>
  )
}
