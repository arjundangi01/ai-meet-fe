import React from "react";
import { Users, FileText, Mic } from "lucide-react";

const FeatureHighlight = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Why teams love ReplayAI
      </h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
            <Mic className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-2">
              AI-Powered Transcription
            </h4>
            <p className="text-gray-600">
              Get accurate transcripts in real-time with speaker identification.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-2">
              Smart Summaries
            </h4>
            <p className="text-gray-600">
              Automatically extract key decisions, action items, and important
              moments from every meeting.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-2">
              Team Collaboration
            </h4>
            <p className="text-gray-600">
              Share insights, comment on transcripts, and collaborate on action
              items with your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
