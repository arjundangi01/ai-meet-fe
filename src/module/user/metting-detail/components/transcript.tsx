import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  const transcripts = parseJson(meeting.transcript || "") as {
    speaker: string;
    text: string;
  }[];

  console.log("here", transcripts);

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
