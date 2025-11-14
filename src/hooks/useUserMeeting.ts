import { UserMeetingApi } from "@/api/user-meeting";
import { GetUserMeetingsInput } from "@/gql/graphql";
import { useQuery } from "@tanstack/react-query";

export const useUserMeetings = (input: GetUserMeetingsInput) => {
  return useQuery({
    queryKey: ["user-meeting", input],
    queryFn: () => UserMeetingApi.getUserMeetings(input),
  });
};

export const useUserMeeting = (id: string) => {
  return useQuery({
    queryKey: ["user-meeting", id],
    queryFn: () => UserMeetingApi.getUserMeeting(id),
  });
};
