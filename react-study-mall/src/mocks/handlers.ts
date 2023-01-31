import { graphql } from 'msw';
import { v4 as uuid } from 'uuid';
import GET_PRODUCTS, { GET_PRODUCT } from '../graphql/products';

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  title: `임시상품 ${i + 1}`,
  descripton: `임시상세내용 ${i + i}`,
  image: `https://placeimg.com/200/150/${i + 1}`,
  price: 50000,
  createdAt: new Date(1660175400497 + (i * 1000 * 60 * 60 * 10)).toString()
}))

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res (
      ctx.data({
        products: mock_products
      })
    )
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    return res (
      ctx.data(mock_products[0])
    )
  })
]