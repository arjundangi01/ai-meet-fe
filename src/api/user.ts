import { graphql } from "@/gql";
import { getGraphQLClient } from "@/lib/utils/api";

export class UserApi {
  static async getMe() {
    const me = graphql(/* GraphQL */ `
      query me {
        me {
          id
          email
          name
        }
      }
    `);
    const client = getGraphQLClient();
    return client.request(me);
  }
}
