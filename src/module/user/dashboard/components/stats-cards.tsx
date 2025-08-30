import React from "react";
import { Badge } from "@/components/ui/badge";
import { mockMeetings, dashboardStats } from "@/lib/mock-data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Zap } from "lucide-react";
import { useUserMeetings } from "@/hooks/useUserMeeting";
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
const StatsCards = () => {
  return (
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
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            {/* <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </p> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
