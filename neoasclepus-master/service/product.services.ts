import { gql } from "graphql-request";
import { api_client } from "./api";

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