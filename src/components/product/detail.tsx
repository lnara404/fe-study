import { ProductPropsType } from "../../types"

const ProductDetail = ({ item: { title, image, description, price } }: { item: ProductPropsType }) => {
  return (
    <div className="product-detail">
      <div className="product-detail__img">
        <img src={image} alt="" />
      </div>
      <div className="product-detail__info">
        <p className="product-detail__info__title">{title}</p>
        <p className="product-detail__info__desc">{description}</p>
        <span className="product-detail__info__price">{price}</span>
      </div>
    </div>
  )
};

export default ProductDetail;