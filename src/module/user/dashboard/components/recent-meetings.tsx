"use client";
import React from "react";
import { mockMeetings, dashboardStats } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Clock,
  Calendar,
  Play,
  ArrowRight,
  MoreHorizontal,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import { useUserMeetings } from "@/hooks/useUserMeeting";
import Spinner from "@/components/common/spinner";

const RecentMeetings = () => {
  const { data, isLoading } = useUserMeetings({ first: 5 });

  const recentMeetings = data?.userMeetings?.edges;

  return (
    <div className="lg:col-span-2">
      {isLoading ? (
        <Spinner />
      ) : (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Recent Meetings</CardTitle>
            <Link href={APP_ROUTES.USER.MEETINGS}>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMeetings?.map((meeting) => (
              <div
                key={meeting.node.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    {/* <h3 className="font-medium text-gray-900">{meeting.title}</h3> */}
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(meeting.node.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {/* {meeting.duration}m */}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {/* {meeting.participants.length} */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Link href={`${APP_ROUTES.USER.MEETING(meeting.node.id)}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RecentMeetings;
