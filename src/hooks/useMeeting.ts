import { useMutation } from "@tanstack/react-query";
import { MeetingApi } from "@/api/meeting";

export const useJoinMeeting = () => {
  return useMutation({
    mutationFn: MeetingApi.joinMeeting,
    mutationKey: ["join-meeting"],
  });
};
