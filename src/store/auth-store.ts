import { MeQuery } from "@/gql/graphql";
import { create } from "zustand";

type IAuthStore = {
  user: MeQuery["me"] | null;
  setUser: (user: MeQuery["me"]) => void;
};

const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  setUser: (user: IAuthStore["user"]) => set({ user }),
}));

export default useAuthStore;
