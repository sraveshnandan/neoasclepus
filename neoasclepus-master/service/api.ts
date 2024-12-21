import { GraphQLClient } from "graphql-request";


const api_url = process.env.API_URL!;
const api_key = process.env.API_TOKEN!;
const api_client = new GraphQLClient(api_url, {
    headers: {
        Authorization: `Bearer ${api_key}`
    }
})


export { api_client }