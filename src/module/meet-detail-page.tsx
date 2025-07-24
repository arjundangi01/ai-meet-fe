"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
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

interface MeetingDetailPageProps {
  params: {
    id: string;
  };
}

export default function MeetingDetailPage({ params }: MeetingDetailPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const meeting = mockMeetings.find((m) => m.id === params.id);

  if (!meeting) {
    notFound();
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShare = (type: string) => {
    toast.success(`Meeting ${type} copied to clipboard!`);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/meetings">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Meetings
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {meeting.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600 mt-1">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(meeting.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {meeting.duration} minutes
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {meeting.participants.length} participants
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Badge
            variant={
              meeting.status === "completed"
                ? "default"
                : meeting.status === "processing"
                ? "secondary"
                : "destructive"
            }
            className={
              meeting.status === "completed"
                ? "bg-green-100 text-green-800"
                : meeting.status === "processing"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }
          >
            {meeting.status}
          </Badge>

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
      {meeting.videoUrl && meeting.status === "completed" && (
        <Card>
          <CardContent className="p-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              <video
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                controls
              >
                <source src={meeting.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Controls */}
            <div className="flex items-center justify-between mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={handlePlayPause}>
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4 text-gray-600" />
                  <div className="w-20 h-1 bg-gray-300 rounded-full">
                    <div className="w-3/4 h-full bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(meeting.duration * 60)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Processing State */}
      {meeting.status === "processing" && (
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
      {meeting.status === "completed" && (
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
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Meeting Transcript</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("transcript")}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-96 w-full">
                      <div className="space-y-4 pr-4">
                        {meeting.transcript
                          ?.split("\n\n")
                          .map((paragraph, index) => (
                            <div key={index} className="space-y-2">
                              {paragraph.split("\n").map((line, lineIndex) => {
                                const speaker = line.split(":")[0];
                                const content = line
                                  .split(":")
                                  .slice(1)
                                  .join(":")
                                  .trim();

                                if (content) {
                                  return (
                                    <div
                                      key={lineIndex}
                                      className="flex space-x-3"
                                    >
                                      <span className="font-semibold text-blue-600 min-w-0">
                                        {speaker}:
                                      </span>
                                      <span className="text-gray-700">
                                        {content}
                                      </span>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
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
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Meeting Details */}
          <div className="space-y-6">
            {/* Participants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Participants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {meeting.participants.map((participant, index) => (
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
            </Card>

            {/* Meeting Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Meeting Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">
                    {meeting.duration} minutes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recording Size</span>
                  <span className="font-semibold">{meeting.recordingSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Words Transcribed</span>
                  <span className="font-semibold">
                    {meeting.transcript?.split(" ").length || 0}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Key Points</span>
                  <span className="font-semibold">
                    {meeting.keyPoints?.length || 0}
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
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Next Meeting
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
