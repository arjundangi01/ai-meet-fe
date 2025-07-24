"use client";

import { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Progress } from "@/src/components/ui/progress";
import { Badge } from "@/src/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Upload,
  FileVideo,
  FileAudio,
  X,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Settings,
} from "lucide-react";
import { toast } from "sonner";

interface UploadFile {
  file: File;
  progress: number;
  status: "uploading" | "processing" | "completed" | "error";
  id: string;
}

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [participants, setParticipants] = useState("");

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(Array.from(e.target.files));
    }
  }, []);

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      const isVideo = file.type.startsWith("video/");
      const isAudio = file.type.startsWith("audio/");
      return isVideo || isAudio;
    });

    if (validFiles.length !== files.length) {
      toast.error("Only video and audio files are supported");
    }

    validFiles.forEach((file) => {
      const newFile: UploadFile = {
        file,
        progress: 0,
        status: "uploading",
        id: Math.random().toString(36).substr(2, 9),
      };

      setUploadFiles((prev) => [...prev, newFile]);

      // Simulate upload progress
      simulateUpload(newFile.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    const interval = setInterval(() => {
      setUploadFiles((prev) =>
        prev.map((file) => {
          if (file.id === fileId) {
            if (file.progress < 100) {
              return { ...file, progress: file.progress + 10 };
            } else if (file.status === "uploading") {
              // Switch to processing
              setTimeout(() => {
                setUploadFiles((prev) =>
                  prev.map((f) =>
                    f.id === fileId ? { ...f, status: "processing" } : f
                  )
                );

                // Complete processing after 3 seconds
                setTimeout(() => {
                  setUploadFiles((prev) =>
                    prev.map((f) =>
                      f.id === fileId ? { ...f, status: "completed" } : f
                    )
                  );
                  toast.success(`${file.file.name} processed successfully!`);
                }, 3000);
              }, 1000);

              return { ...file, status: "processing" };
            }
          }
          return file;
        })
      );
    }, 200);

    // Clear interval after upload completes
    setTimeout(() => clearInterval(interval), 2500);
  };

  const removeFile = (fileId: string) => {
    setUploadFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("video/")) {
      return <FileVideo className="h-8 w-8 text-blue-600" />;
    }
    return <FileAudio className="h-8 w-8 text-green-600" />;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "processing":
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <Clock className="h-5 w-5 text-blue-600" />;
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Upload Meeting</h1>
        <p className="text-gray-600 mt-1">
          Upload your meeting recording to generate AI-powered transcripts and
          summaries
        </p>
      </div>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="h-5 w-5 mr-2" />
            Upload Recording
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleChange}
              accept="video/*,audio/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Drop your files here, or{" "}
                  <span className="text-blue-600">browse</span>
                </h3>
                <p className="text-gray-600 mt-1">
                  Supports MP4, MOV, AVI, MP3, WAV, M4A files up to 2GB
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">MP4</Badge>
                <Badge variant="outline">MOV</Badge>
                <Badge variant="outline">AVI</Badge>
                <Badge variant="outline">MP3</Badge>
                <Badge variant="outline">WAV</Badge>
                <Badge variant="outline">M4A</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File List */}
      {uploadFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Upload Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {uploadFiles.map((uploadFile) => (
              <div key={uploadFile.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getFileIcon(uploadFile.file)}
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {uploadFile.file.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {formatFileSize(uploadFile.file.size)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {getStatusIcon(uploadFile.status)}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(uploadFile.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {uploadFile.status === "uploading" && "Uploading..."}
                      {uploadFile.status === "processing" &&
                        "Processing with AI..."}
                      {uploadFile.status === "completed" && "Completed"}
                      {uploadFile.status === "error" && "Error"}
                    </span>
                    <span className="text-gray-600">
                      {uploadFile.status === "uploading" &&
                        `${uploadFile.progress}%`}
                      {uploadFile.status === "processing" && "Processing..."}
                      {uploadFile.status === "completed" && "100%"}
                    </span>
                  </div>

                  <Progress
                    value={
                      uploadFile.status === "uploading"
                        ? uploadFile.progress
                        : 100
                    }
                    className="h-2"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Meeting Details Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Meeting Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Meeting Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Q1 Strategy Review"
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Meeting Type</Label>
              <Select value={meetingType} onValueChange={setMeetingType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select meeting type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standup">Daily Standup</SelectItem>
                  <SelectItem value="review">Review Meeting</SelectItem>
                  <SelectItem value="planning">Planning Session</SelectItem>
                  <SelectItem value="presentation">Presentation</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="participants">
              <Users className="h-4 w-4 inline mr-1" />
              Participants
            </Label>
            <Input
              id="participants"
              placeholder="e.g., John Smith, Jane Doe, Mike Johnson"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
            />
            <p className="text-sm text-gray-600">
              Separate names with commas to help AI identify speakers
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Brief description of the meeting agenda or topics discussed..."
              value={meetingDescription}
              onChange={(e) => setMeetingDescription(e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Processing Options */}
      <Card>
        <CardHeader>
          <CardTitle>AI Processing Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id="transcript" defaultChecked />
                <Label htmlFor="transcript" className="font-medium">
                  Generate Transcript
                </Label>
              </div>
              <p className="text-sm text-gray-600">
                Create a full text transcript with speaker identification
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id="summary" defaultChecked />
                <Label htmlFor="summary" className="font-medium">
                  AI Summary
                </Label>
              </div>
              <p className="text-sm text-gray-600">
                Generate key takeaways and action items
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id="highlights" defaultChecked />
                <Label htmlFor="highlights" className="font-medium">
                  Extract Highlights
                </Label>
              </div>
              <p className="text-sm text-gray-600">
                Identify important moments and decisions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Save as Draft</Button>
        <Button
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          disabled={!meetingTitle || uploadFiles.length === 0}
        >
          Start Processing
        </Button>
      </div>
    </div>
  );
}
