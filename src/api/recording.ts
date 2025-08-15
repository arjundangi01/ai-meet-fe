import { env } from "@/env.mjs";
import { graphql } from "@/gql";
import { GetRecordingsInput } from "@/gql/graphql";
import { getGraphQLClient } from "@/lib/utils/api";

export class RecordingApi {
  static API_URL = env.NEXT_PUBLIC_GRAPHQL_URL;

  static async getRecordings(input: GetRecordingsInput) {
    const getRecordings = graphql(/* GraphQL */ `
      query recordings($query: GetRecordingsInput!) {
        recordings(input: $query) {
          edges {
            node {
              id
              fileUrl
              summary
              transcript
              createdAt
              updatedAt
              userMeetingId
            }
          }
        }
      }
    `);
    const client = getGraphQLClient();
    return client.request(getRecordings, { query: input });
  }
}
