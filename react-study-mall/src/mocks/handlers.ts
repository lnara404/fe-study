import { graphql } from 'msw';
// import { v4 as uuid } from 'uuid';
import { ADD_CART, CartType, GET_CART } from '../graphql/cart';
import GET_PRODUCTS, { GET_PRODUCT } from '../graphql/products';

const mock_products = (() => Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1 + '',
  title: `임시상품 ${i + 1}`,
  descripton: `임시상세내용 ${i + 1}`,
  image: `https://placeimg.com/200/150/${i + 1}`,
  price: 50000,
  createdAt: new Date(1660175400497 + (i * 1000 * 60 * 60 * 10)).toString()
}))
)();

let cartData: { [key: string]: CartType } = (() => ({}))();

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res (
      ctx.data({
        products: mock_products
      })
    )
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mock_products.find(item => item.id === req.body?.variables.id);

    if (found) return res(ctx.data(mock_products[0]));
    return res();
  }),
  graphql.query(GET_CART, (req, res, ctx) => {
    return res(ctx.data(cartData))
  }),
  graphql.mutation(ADD_CART, (req, res, ctx) => {
    // console.log(req.variables);
    const newData = { ...cartData };
    const id = req.variables.id;

    if (newData[id]) {
      newData[id] = {
        ...newData[id],
        amount: (newData[id].amount || 0) + 1
      } 
    } else {
      const found = mock_products.find(item => item.id === req.body?.variables.id);

      if(found) {
        newData[id] = {
          ...found,
          amount: 1
        }
      }
    }
    cartData = newData;

    return res(ctx.data(newData))
  }),
]