import { apiClient } from "@/lib/utils/api";
import { useMutation } from "@tanstack/react-query";
import { IOAuthUser, ISignupResponse } from "../_types/auth";

export const useSocialSignup = () => {
  return useMutation({
    mutationFn: async (data: IOAuthUser) => {
      const response = await apiClient.post<ISignupResponse>(
        "/auth/social-signup",
        data
      );
      return response.data;
    },
    mutationKey: ["social-signup"],
  });
};
