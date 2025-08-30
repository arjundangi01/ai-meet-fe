"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Video, Loader2, Users, Calendar, Clock } from "lucide-react";
import { useJoinMeeting } from "@/hooks/useMeeting";

interface RequestJoinMeetingProps {
  className?: string;
}

const RequestJoinMeeting: React.FC<RequestJoinMeetingProps> = ({
  className,
}) => {
  const [meetingId, setMeetingId] = useState("ahd-vuci-xru");

  const { mutate: joinMeeting, isPending } = useJoinMeeting();

  const handleJoinMeeting = async () => {
    if (!meetingId.trim()) {
      return;
    }

    joinMeeting({
      meetingId: meetingId.trim(),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingId(e.target.value);
  };

  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl text-gray-900">
                Join Meeting with AI Bot
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Enter a meeting ID to have our AI bot join, record, and
                summarize your meeting
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 border-green-200"
          >
            <Video className="h-3 w-3 mr-1" />
            Live Recording
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Enter meeting ID (e.g., 123-456-789)"
              value={meetingId}
              onChange={handleInputChange}
              disabled={isPending}
            />
          </div>
          <Button
            onClick={handleJoinMeeting}
            disabled={isPending || !meetingId.trim()}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 sm:w-auto w-full"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                <Bot className="h-4 w-4 mr-2" />
                Join Meeting
              </>
            )}
          </Button>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-blue-500" />
            <span>Silent participant</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-purple-500" />
            <span>Auto transcription</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-orange-500" />
            <span>Real-time summary</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequestJoinMeeting;
