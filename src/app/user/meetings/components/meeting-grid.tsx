import { useUserMeetings } from "@/hooks/useUserMeeting";
import React from "react";
import { Badge } from "@/components/ui/badge";

import { Calendar, Clock, Users, Play, Eye } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import { parseJson } from "@/lib/utils/transform-data";

const MeetingGrid = () => {
  const { data, isLoading } = useUserMeetings({ first: 10 });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {data?.userMeetings?.edges?.map((meeting) => {
        const participants = parseJson(
          meeting.node.participants || "[]"
        ) as string[];
        return (
          <Card
            key={meeting.node.id}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg truncate">
                      {/* {meeting.title} */}
                    </CardTitle>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Meeting Info */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(meeting.node.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {/* {meeting.duration} minutes */}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {participants?.length} participant
                  {participants?.length !== 1 ? "s" : ""}
                </div>
              </div>

              {/* Participants */}
              <div>
                <p className="text-xs text-gray-500 mb-1">Participants</p>
                <div className="flex flex-wrap gap-1">
                  {participants?.slice(0, 3).map((participant, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {participant}
                    </Badge>
                  ))}
                  {participants.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{participants.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-gray-500">
                  {/* {meeting.recordingSize} */}
                </div>
                <div className="flex space-x-2">
                  <Link href={APP_ROUTES.USER.MEETING(meeting.node.id)}>
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MeetingGrid;
