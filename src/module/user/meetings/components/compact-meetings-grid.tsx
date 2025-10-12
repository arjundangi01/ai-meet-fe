"use client";

import { useUserMeetings } from "@/hooks/useUserMeeting";
import React from "react";
import CompactMeetingCard from "./compact-meeting-card";
import { Video } from "lucide-react";

interface CompactMeetingsGridProps {
  searchTerm?: string;
  statusFilter?: string;
  sortBy?: string;
}

const CompactMeetingsGrid: React.FC<CompactMeetingsGridProps> = ({
  searchTerm = "",
  statusFilter = "all",
  sortBy = "date",
}) => {
  const { data, isLoading } = useUserMeetings({ first: 50 });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-100 rounded-lg p-4 h-48"></div>
          </div>
        ))}
      </div>
    );
  }

  const meetings = data?.userMeetings?.edges || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {meetings.map((meeting) => (
        <CompactMeetingCard key={meeting.node.id} meeting={meeting} />
      ))}

      {meetings.length === 0 && (
        <div className="col-span-full text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Video className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No meetings yet
          </h3>
          <p className="text-gray-500">
            Your recorded meetings will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default CompactMeetingsGrid;
