import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Zap, Users, Mic, Search } from "lucide-react";
const features = [
  {
    icon: <Mic className="h-8 w-8" />,
    title: "AI Transcription",
    description:
      "Get accurate transcripts of your meetings using advanced AI technology.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Smart Summaries",
    description:
      "Automatically generate concise summaries with key decisions and action items.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Key Highlights",
    description:
      "Extract important moments and insights from your meetings instantly.",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Searchable Archive",
    description:
      "Find any meeting content quickly with powerful search across all your recordings.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description:
      "Share meeting insights and collaborate on action items with your team.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Speaker Recognition",
    description: "Identifies different speakers in meetings and audio files",
  },
];
const Feature = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need for smarter meetings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful AI features to transform how your team collaborates and
            makes decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
