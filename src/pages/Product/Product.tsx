import { useParams } from 'react-router-dom'
import { useProductDataContext } from '../../hooks/useProductData'
import { useEffect } from 'react'

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

  return <div>{JSON.stringify(productDetail)}</div>
}
