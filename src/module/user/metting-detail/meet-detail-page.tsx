"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Volume2,
  MoreHorizontal,
  Copy,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { mockMeetings } from "@/lib/mock-data";
import { toast } from "sonner";
import { APP_ROUTES } from "@/lib/constants/app-routes";
import { useUserMeeting } from "@/hooks/useUserMeeting";
import Transcript from "./components/transcript";
import Spinner from "@/components/common/spinner";
import { useRouter } from "next/navigation";

interface MeetingDetailPageProps {
  params: {
    id: string;
  };
}

export default function MeetingDetailPage({ params }: MeetingDetailPageProps) {
  const { data, isLoading } = useUserMeeting(params.id);
  const participants = ["John Doe", "Jane Doe", "Jim Doe", "Jill Doe"];

  const router = useRouter();

  const meeting = data?.userMeeting;

  if (isLoading) {
    return <Spinner />;
  }

  if (!meeting) {
    return <div>Meeting not found</div>;
  }

  const handleShare = (type: string) => {
    toast.success(`Meeting ${type} copied to clipboard!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
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
              <Button variant="outline">
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
              <Button variant="outline">
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

      {/* Video Player */}
      {meeting.fileUrl && (
        <Card>
          <CardContent className="p-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              <video className="w-full h-full object-cover" controls>
                <source src={meeting.fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Processing State */}
      {!meeting.transcript && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-6 text-center">
            <div className="animate-spin h-8 w-8 border-2 border-yellow-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">
              Processing Meeting
            </h3>
            <p className="text-yellow-800">
              AI is currently processing your meeting. Transcript and summary
              will be available soon.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Main Content */}
      {meeting.transcript && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Transcript and Summary */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="transcript" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="transcript">
                  <FileText className="h-4 w-4 mr-2" />
                  Transcript
                </TabsTrigger>
                <TabsTrigger value="summary">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  AI Summary
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transcript">
                <Transcript meeting={meeting} />
              </TabsContent>

              <TabsContent value="summary">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Generated Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Executive Summary
                      </h4>
                      <p className="text-blue-800">{meeting.summary}</p>
                    </div>

                    <Separator />
                    {/* 
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Takeaways
                      </h4>
                      <ul className="space-y-2">
                        {meeting.keyPoints?.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Meeting Details */}
          <div className="space-y-6">
            {/* Participants */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Participants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {participant
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-gray-900">{participant}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Meeting Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Meeting Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">
                    {/* {meeting.duration} minutes */}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recording Size</span>
                  <span className="font-semibold">
                    {/* {meeting.recordingSize} */}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Words Transcribed</span>
                  <span className="font-semibold">
                    {meeting.transcript?.split(" ").length || 0}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Create Follow-up
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <Share className="h-4 w-4 mr-2" />
                  Share with Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
