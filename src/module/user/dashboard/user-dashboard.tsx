"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Link from "next/link";
import RequestJoinMeeting from "./components/request-join-meeting";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import StatsCards from "./components/stats-cards";
import RecentMeetings from "./components/recent-meetings";

export default function UserDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here&apos;s what&apos;s happening with your meetings.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href={APP_ROUTES.USER.MEETINGS}>
            <Button variant="outline">View All Meetings</Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Request Join Meeting */}
      <RequestJoinMeeting />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Meetings */}
        <RecentMeetings />

        {/* Quick Actions & Insights */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href={APP_ROUTES.USER.SUPPORT}>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Weekly Insights */}
          <Card>
            <CardHeader>
              <CardTitle>This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Meetings</span>
                <span className="font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Duration</span>
                <span className="font-semibold">0 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Summaries</span>
                <span className="font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Action Items</span>
                <span className="font-semibold">0</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
