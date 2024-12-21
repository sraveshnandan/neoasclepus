import { api_client } from "./api";
import { gql } from "graphql-request";

export const fetchAllBanners = async () => {
  try {
    const query = gql`query fetchBanners {
            banners {
              id
              image {
                url
                id
              }
              title
            }
          }`
    const res: any = await api_client.request(query);
    return res?.banners;
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return "Unable to fetch banner."
  }
}