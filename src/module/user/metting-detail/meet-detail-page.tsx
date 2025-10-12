"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Share, FileText, Lightbulb } from "lucide-react";
import { useUserMeeting } from "@/hooks/useUserMeeting";
import Transcript from "./components/transcript";
import Spinner from "@/components/common/spinner";
import MeetingSummary from "./components/summary";
import Header from "./components/header";

interface MeetingDetailPageProps {
  params: {
    id: string;
  };
}

export default function MeetingDetailPage({ params }: MeetingDetailPageProps) {
  const { data, isLoading } = useUserMeeting(params.id);

  const meeting = data?.userMeeting;

  const isMeetingInPast = new Date(meeting?.createdAt) < new Date();

  if (isLoading) {
    return <Spinner />;
  }

  if (!meeting) {
    return <div>Meeting not found</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Header meeting={meeting} />

      {/* Video Player */}
      {meeting.fileUrl && (
        <Card>
          <CardContent className="p-4">
            <div className="aspect-[16/9] max-w-4xl mx-auto bg-black rounded-lg overflow-hidden relative">
              <video className="w-full h-full object-cover" controls>
                <source src={meeting.fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Processing State */}
      {!meeting.transcript && !isMeetingInPast && (
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

      {/* Meeting in past and dont have transcript, show user friendly message, says unable or bot not able to process */}
      {isMeetingInPast && !meeting.transcript && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Unable to Process Meeting
            </h3>
            <p className="text-red-800">
              AI was unable to process your meeting.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Main Content */}
      {meeting?.transcript && (
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
                <MeetingSummary summary={meeting?.summary || ""} />
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
