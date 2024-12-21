import { api_client } from "./api";
import { gql } from "graphql-request";

export const FetchAllCategory = async () => {
  try {
    const query = gql`
    query fetchBanners {
  categories {
    id
    name
    image {
      url
      id
    }
    products(first: 1) {
      images {
        id
        url
      }
    }
  }
}
    `
    const res: any = await api_client.request(query);
    return res?.categories;
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return "Unable to fetch Category."
  }
}