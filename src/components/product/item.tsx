import { Link } from "react-router-dom";
import { ProductPropsType } from "../../types";

const ProductItem = ({
  id,
  category,
  title,
  image,
  price,
  rating
}: ProductPropsType) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <div className="product-item__img">
          <img src={image} alt="" />
        </div>
        <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <span className="product-item__price">{price}</span>
        <span className="product-item__rating">{rating.rate}</span>
      </Link>
    </li>
  )
}

export default ProductItem;