"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  Clock,
  FileText,
  Zap,
  TrendingUp,
  Calendar,
  Play,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";
import { mockMeetings, dashboardStats } from "@/lib/mock-data";

export default function DashboardPage() {
  const recentMeetings = mockMeetings.slice(0, 5);
  const processingMeetings = mockMeetings.filter(
    (m) => m.status === "processing"
  ).length;

  const stats = [
    {
      title: "Total Meetings",
      value: dashboardStats.totalMeetings.toString(),
      icon: Users,
      change: "+12%",
      changeType: "positive",
    },

    {
      title: "Summaries Generated",
      value: dashboardStats.summariesGenerated.toString(),
      icon: FileText,
      change: "+15%",
      changeType: "positive",
    },
    {
      title: "Transcripts Created",
      value: dashboardStats.transcriptsGenerated.toString(),
      icon: Zap,
      change: "+10%",
      changeType: "positive",
    },
  ];

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
          <Link href="/upload">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Upload Meeting
            </Button>
          </Link>
          <Link href="/meetings">
            <Button variant="outline">View All Meetings</Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              {/* <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </p> */}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Meetings */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Recent Meetings</CardTitle>
              <Link href="/meetings">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Play className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {meeting.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(meeting.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {meeting.duration}m
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {meeting.participants.length}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Link href={`/meetings/${meeting.id}`}>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Insights */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/meetings">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Browse Transcripts
                </Button>
              </Link>
              <Link href="/support">
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
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Duration</span>
                <span className="font-semibold">8.5 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Summaries</span>
                <span className="font-semibold">11</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Action Items</span>
                <span className="font-semibold">24</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
