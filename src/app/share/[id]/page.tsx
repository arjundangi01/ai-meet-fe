import MeetingDetailPage from "@/module/user/metting-detail/meet-detail-page";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  return <MeetingDetailPage params={params} />;
};

export default Page;
