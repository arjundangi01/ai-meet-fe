export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  USER: {
    ROOT: "/user",
    DASHBOARD: "/user/dashboard",
    MEETINGS: "/user/meetings",
    TRANSCRIPTS: "/user/transcripts",
    PROFILE: "/user/profile",
    SETTINGS: "/user/settings",
    SUPPORT: "/user/support",
    MEETING: (id: string) => `/user/meetings/${id}`,
  },
  ADMIN: {
    ROOT: "/admin",
    DASHBOARD: "/admin/dashboard",
    USERS: "/admin/users",
    SETTINGS: "/admin/settings",
  },
};
