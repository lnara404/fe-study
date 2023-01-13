import { Link } from "react-router-dom"

const Gnb = () => {
  return (
    <nav>
      <Link to="/">메인</Link>
      <Link to="/products">상품목록</Link>
      <Link to="/cart">장바구니</Link>
    </nav>
  )
}

export default Gnb;