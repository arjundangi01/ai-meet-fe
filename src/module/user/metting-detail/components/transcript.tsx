import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Copy, Download } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserMeetingQuery } from "@/gql/graphql";
import { parseJson } from "@/lib/utils/transform-data";
import { toast } from "sonner";

const Transcript = ({
  meeting,
}: {
  meeting: UserMeetingQuery["userMeeting"];
}) => {
  console.log(meeting.transcript);
  const transcripts = parseJson(meeting.transcript || "[]") as {
    speaker: string;
    text: string;
  }[];
  console.log("after", transcripts);

  // Get unique speakers for avatar generation
  const uniqueSpeakers = Array.from(new Set(transcripts.map((t) => t.speaker)));

  // Generate avatar colors for each speaker
  const getAvatarColor = (speaker: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-orange-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-red-500",
    ];
    const index = uniqueSpeakers.indexOf(speaker);
    return colors[index % colors.length];
  };

  const handleCopy = () => {
    const text = transcripts
      .map((transcript) => `${transcript.speaker}: ${transcript.text}`)
      .join("\n");

    navigator.clipboard.writeText(text);
    toast.success("Transcript copied to clipboard");
  };
  const handleDownload = () => {
    const text = transcripts
      .map((transcript) => `${transcript.speaker}: ${transcript.text}`)
      .join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transcript.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <CardTitle>Meeting Transcript</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 w-full">
          <div className="space-y-4 pr-4">
            {transcripts?.map((transcript, index) => {
              return (
                <div key={index} className="flex items-start space-x-3">
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarFallback
                      className={`text-white text-sm font-semibold ${getAvatarColor(
                        transcript.speaker
                      )}`}
                    >
                      {transcript.speaker.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="capitalize font-semibold text-blue-600 text-sm">
                        {transcript.speaker}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {transcript.text}
                    </p>
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
