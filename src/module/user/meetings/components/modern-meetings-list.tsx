"use client";

import { useUserMeetings } from "@/hooks/useUserMeeting";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  Users,
  Play,
  Eye,
  MoreVertical,
  Download,
  Share2,
  Video,
} from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import { parseJson } from "@/lib/utils/transform-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ModernMeetingsListProps {
  searchTerm?: string;
  statusFilter?: string;
  sortBy?: string;
}

const ModernMeetingsList: React.FC<ModernMeetingsListProps> = ({
  searchTerm = "",
  statusFilter = "all",
  sortBy = "date",
}) => {
  const { data, isLoading } = useUserMeetings({ first: 50 });

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-100 rounded-lg p-4 h-20"></div>
          </div>
        ))}
      </div>
    );
  }

  const meetings = data?.userMeetings?.edges || [];

  return (
    <div className="space-y-2">
      {meetings.map((meeting) => {
        const participants = parseJson(
          meeting.node.participants || "[]"
        ) as string[];

        const meetingDate = new Date(meeting.node.createdAt);
        const formattedDate = meetingDate.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        const formattedTime = meetingDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <div
            key={meeting.node.id}
            className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              {/* Left side - Meeting info */}
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                {/* Play button */}
                <div className="flex-shrink-0">
                  <Button
                    size="sm"
                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 p-0"
                  >
                    <Play className="h-4 w-4 text-white ml-0.5" />
                  </Button>
                </div>

                {/* Meeting details */}
                <div className="flex-1 min-w-0 space-y-1">
                  {/* Date and time */}
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Video className="h-4 w-4" />
                      <span>{meeting.node.meeting?.name || "Google Meet"}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{formattedTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{participants?.length || 0} participants</span>
                    </div>
                  </div>

                  {/* Participants */}
                  {participants && participants.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        {participants.slice(0, 3).map((participant, index) => (
                          <Avatar
                            key={index}
                            className="w-6 h-6 border-2 border-white"
                          >
                            <AvatarFallback className="text-xs bg-gray-100">
                              {participant.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {participants.length > 3 && (
                          <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-gray-600">
                              +{participants.length - 3}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">
                        {participants.slice(0, 2).join(", ")}
                        {participants.length > 2 &&
                          ` +${participants.length - 2} more`}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right side - Actions */}
              <div className="flex items-center space-x-2">
                <Link href={APP_ROUTES.USER.MEETING(meeting.node.id)}>
                  <Button size="sm" variant="outline" className="h-8">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        );
      })}

      {meetings.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Video className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No meetings yet
          </h3>
          <p className="text-gray-500">
            Your recorded meetings will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default ModernMeetingsList;
