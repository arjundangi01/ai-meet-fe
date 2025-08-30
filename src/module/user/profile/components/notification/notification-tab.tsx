import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const NotificationTab = () => {
  const handleNotificationChange = (key: string, value: boolean) => {};
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium">Summary Ready</div>
              <div className="text-sm text-gray-600">
                Get notified when AI summaries are generated
              </div>
            </div>
            <Switch
              //   checked={user.notifications.summaryReady}
              onCheckedChange={(checked) =>
                handleNotificationChange("summaryReady", checked)
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium">Transcript Ready</div>
              <div className="text-sm text-gray-600">
                Get notified when transcripts are completed
              </div>
            </div>
            <Switch
              //   checked={user.notifications.transcriptReady}
              onCheckedChange={(checked) =>
                handleNotificationChange("transcriptReady", checked)
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium">General Updates</div>
              <div className="text-sm text-gray-600">
                Product updates and feature announcements
              </div>
            </div>
            <Switch
              //   checked={user.notifications.email}
              onCheckedChange={(checked) =>
                handleNotificationChange("email", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium">Browser Notifications</div>
              <div className="text-sm text-gray-600">
                Receive push notifications in your browser
              </div>
            </div>
            <Switch
              //   checked={user.notifications.push}
              onCheckedChange={(checked) =>
                handleNotificationChange("push", checked)
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationTab;
