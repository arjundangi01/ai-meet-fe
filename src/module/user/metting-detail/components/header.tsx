import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  ArrowLeft,
  Play,
  Pause,
  Download,
  Share,
  Calendar,
  Clock,
  Users,
  FileText,
  Lightbulb,
  Mail,
  Link as LinkIcon,
  Video,
} from "lucide-react";
import { toast } from "sonner";
import { UserMeetingQuery } from "@/gql/graphql";
import { parseJson } from "@/lib/utils/transform-data";

// Predefined gradient color combinations
const avatarGradients = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-green-500 to-emerald-600",
  "from-orange-500 to-red-600",
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-teal-500 to-cyan-600",
  "from-indigo-500 to-blue-600",
];

// Get a consistent color for a participant based on their name
const getAvatarColor = (participant: string): string => {
  let hash = 0;
  for (let i = 0; i < participant.length; i++) {
    hash = participant.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % avatarGradients.length;
  return avatarGradients[index] ?? avatarGradients[0]!;
};

const Header = ({ meeting }: { meeting: UserMeetingQuery["userMeeting"] }) => {
  const router = useRouter();
  const participants = parseJson(meeting.participants || "[]") as string[];

  const handleShare = (type: string) => {
    toast.success(`Meeting ${type} copied to clipboard!`);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button onClick={() => router.back()} variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {/* {meeting.title} */}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600 mt-1">
            <div className="flex items-center">
              <Video className="h-4 w-4 mr-1" />
              {meeting.meeting?.name || "Google Meet"}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(meeting.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {/* {meeting.duration} minutes */}
            </div>
            {participants.length > 0 && (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center cursor-pointer group">
                    <Users className="h-4 w-4 mr-2" />
                    <div className="flex items-center -space-x-2">
                      {participants.slice(0, 3).map((participant, index) => (
                        <Avatar
                          key={index}
                          className="w-6 h-6 border-2 border-white group-hover:border-gray-200 transition-colors"
                        >
                          <AvatarFallback
                            className={`text-xs bg-gradient-to-br ${getAvatarColor(
                              participant
                            )} text-white`}
                          >
                            {participant
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {participants.length > 3 && (
                        <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600 font-medium">
                            +{participants.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {participants.length}{" "}
                      {participants.length === 1
                        ? "participant"
                        : "participants"}
                    </span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold mb-3">Participants</h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {participants.map((participant, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 py-1"
                        >
                          <Avatar className="w-8 h-8">
                            <AvatarFallback
                              className={`text-xs bg-gradient-to-br ${getAvatarColor(
                                participant
                              )} text-white`}
                            >
                              {participant
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-900">
                            {participant}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled variant="outline">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleShare("link")}>
              <LinkIcon className="h-4 w-4 mr-2" />
              Copy Link
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("email")}>
              <Mail className="h-4 w-4 mr-2" />
              Share via Email
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <FileText className="h-4 w-4 mr-2" />
              Download Transcript (PDF)
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileText className="h-4 w-4 mr-2" />
              Download Summary (TXT)
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="h-4 w-4 mr-2" />
              Download Audio (MP3)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
