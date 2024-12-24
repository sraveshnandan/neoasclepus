import { gql } from "graphql-request";
import { api_client } from "./api";
import { IProduct } from "@/types";

export const fetchProducts = async () => {
    try {
        const query = gql`
        query FetchProducts {
                products {
                    id
                    images {
                        id
                        url
                    }
                    name
                    price
                    slug
                    category {
                        id
                        name
                        }
                    description
                    createdAt
                    specifications {
                        id
                        name
                    value
                }
                }
        }
        `

        const res: any = await api_client.request(query);
        return res?.products;
    } catch (error: any) {
        console.log(JSON.stringify(error, null, 2))
        return "Unable to fetch products."
    }
}

export const FetchProductsBySlug = async (slug:string)=>{
    const query= gql`query MyQuery($name:String) {
  product(where: {slug: $name}) {
    category {
      id
      name
    }
    id
    images {
      id
      url
    }
    price
    name
    description
    specifications {
      name
      value
    }
  }
}`


try {
    

    const variable = {
        name:slug
    }

    const res:any = await api_client.request(query,variable);

    return res.product
} catch (error) {
        return "Unable to fetch product by slug."
}
}