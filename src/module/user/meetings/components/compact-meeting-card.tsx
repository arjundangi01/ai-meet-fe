"use client";

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
} from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserMeetingsQuery } from "@/gql/graphql";

interface CompactMeetingCardProps {
  meeting: UserMeetingsQuery["userMeetings"]["edges"][number];
}

const CompactMeetingCard: React.FC<CompactMeetingCardProps> = ({ meeting }) => {
  const participants = JSON.parse(
    meeting.node.participants || "[]"
  ) as string[];

  const meetingDate = new Date(meeting.node.createdAt);
  const formattedDate = meetingDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedTime = meetingDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all duration-200 h-fit">
      {/* Header with play button */}
      <div className="flex items-start justify-between mb-3">
        <Button
          size="sm"
          className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 p-0 flex-shrink-0"
        >
          <Play className="h-3 w-3 text-white ml-0.5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreVertical className="h-3 w-3" />
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

      {/* Meeting details */}
      <div className="space-y-2 mb-4">
        {/* Date */}
        <div className="flex items-center text-xs text-gray-600">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{formattedDate}</span>
        </div>

        {/* Time */}
        <div className="flex items-center text-xs text-gray-600">
          <Clock className="h-3 w-3 mr-1" />
          <span>{formattedTime}</span>
        </div>

        {/* Participants count */}
        <div className="flex items-center text-xs text-gray-600">
          <Users className="h-3 w-3 mr-1" />
          <span>{participants?.length || 0} participants</span>
        </div>
      </div>

      {/* Participants avatars */}
      {participants && participants.length > 0 && (
        <div className="mb-4">
          <div className="flex -space-x-1">
            {participants.slice(0, 4).map((participant, index) => (
              <Avatar key={index} className="w-5 h-5 border border-white">
                <AvatarFallback className="text-xs bg-gray-100">
                  {participant.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ))}
            {participants.length > 4 && (
              <div className="w-5 h-5 rounded-full bg-gray-100 border border-white flex items-center justify-center">
                <span className="text-xs text-gray-600">
                  +{participants.length - 4}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* View button */}
      <div className="pt-2 border-t">
        <Link href={APP_ROUTES.USER.MEETING(meeting.node.id)} className="block">
          <Button size="sm" variant="outline" className="w-full h-7 text-xs">
            <Eye className="h-3 w-3 mr-1" />
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CompactMeetingCard;
