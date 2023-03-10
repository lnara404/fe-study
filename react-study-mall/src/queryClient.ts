import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { request, RequestDocument } from 'graphql-request';
// import { getTodos, postTodo } from '../my-api';


type AnyOBJ = { [key: string]: any };

export const getClient = (() => {
  let client: QueryClient | null  = null;

  return () => {
    if(!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnWindowFocus: false
          }
        }
      });
    }
    return client;
  }
})()

//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = '/';

export const restFetcher = async({
  method,
  path,
  body,
  params
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELET' | 'PATCH';
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL
      }
    }

    if (params) {
      const searchParams = new URLSearchParams(params)
      url += '?' + searchParams.toString();
    }

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    const res = await fetch(url, fetchOptions)
    const json = await res.json();
    return json
  } catch (error) {
    console.log(error)
  }
}

export const graphqlFetcher = (query: RequestDocument, variables = {}) => request(BASE_URL, query, variables)

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
  CART: 'CART'
}