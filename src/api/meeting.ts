import { env } from "@/env.mjs";
import { graphql } from "@/gql";
import { JoinMeetingInput } from "@/gql/graphql";
import { getGraphQLClient } from "@/lib/utils/api";

export class MeetingApi {
  static API_URL = env.NEXT_PUBLIC_GRAPHQL_URL;

  static async joinMeeting(input: JoinMeetingInput) {
    const joinMeeting = graphql(/* GraphQL */ `
      mutation joinMeeting($input: JoinMeetingInput!) {
        joinMeeting(input: $input) {
          id
        }
      }
    `);
    const client = getGraphQLClient();
    return client.request(joinMeeting, { input });
  }
}
