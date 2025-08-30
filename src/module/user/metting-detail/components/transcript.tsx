import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserMeetingQuery } from "@/gql/graphql";
import { parseJson } from "@/lib/utils/transform-data";

const Transcript = ({
  meeting,
}: {
  meeting: UserMeetingQuery["userMeeting"];
}) => {
  const transcripts = parseJson(meeting.transcript || "") as {
    speaker: string;
    text: string;
  }[];

  console.log("here", transcripts);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Meeting Transcript</CardTitle>
        <Button
          variant="outline"
          size="sm"
          //   onClick={() => handleShare("transcript")}
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 w-full">
          <div className="space-y-4 pr-4">
            {transcripts?.map((transcript, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col space-x-3">
                    <span className="capitalize font-semibold text-blue-600 ">
                      {transcript.speaker}:
                    </span>
                    <span className="text-gray-700">{transcript.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Transcript;
