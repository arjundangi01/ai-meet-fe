import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import useAuthStore from "@/store/auth-store";

const ProfileTab = ({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}) => {
  const { user } = useAuthStore((state) => state);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-xl">
                  {user?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8"
                >
                  <Camera className="h-3 w-3" />
                </Button>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{user?.name}</h3>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>

          <Separator />

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={user?.name} disabled={!isEditing} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={user?.email}
                disabled={!isEditing}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Statistics */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Usage Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">47</div>
              <div className="text-sm text-gray-600">Total Meetings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">156h</div>
              <div className="text-sm text-gray-600">Hours Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">42</div>
              <div className="text-sm text-gray-600">Summaries Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">45</div>
              <div className="text-sm text-gray-600">Transcripts Created</div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default ProfileTab;
