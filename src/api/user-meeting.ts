import { graphql } from "@/gql/gql";
import { getGraphQLClient } from "@/lib/utils/api";
import { GetUserMeetingsInput } from "@/gql/graphql";
import { PaginatedUserMeetingResponse } from "@/gql/graphql";
export class UserMeetingApi {
  static async getUserMeetings(input: GetUserMeetingsInput) {
    const getMeetings = graphql(/* GraphQL */ `
      query userMeetings($input: GetUserMeetingsInput!) {
        userMeetings(input: $input) {
          edges {
            node {
              id
              fileUrl
              meetingId
              createdAt
              updatedAt
              participants
              meeting {
                name
              }
            }
          }
          pageInfo {
            afterCursor
            beforeCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `);
    const client = getGraphQLClient();
    return client.request(getMeetings, { input });
  }
  static async getUserMeeting(id: string) {
    const getUserMeeting = graphql(/* GraphQL */ `
      query userMeeting($id: String!) {
        userMeeting(id: $id) {
          id
          fileUrl
          meetingId
          summary
          transcript
          createdAt
          updatedAt
          userId
          containerId
          participants
          meeting {
            name
          }
        }
      }
    `);
    const client = getGraphQLClient();
    return client.request(getUserMeeting, { id });
  }
}
