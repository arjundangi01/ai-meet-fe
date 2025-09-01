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
} from "lucide-react";
import { toast } from "sonner";
import { UserMeetingQuery } from "@/gql/graphql";

const Header = ({ meeting }: { meeting: UserMeetingQuery["userMeeting"] }) => {
  const router = useRouter();
  const participants = ["John Doe", "Jane Doe", "Jim Doe", "Jill Doe"];

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
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {participants.length} participants
            </div>
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
