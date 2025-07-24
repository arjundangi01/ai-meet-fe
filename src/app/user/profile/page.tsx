"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Download,
  Settings,
  Mail,
  Globe,
  Clock,
  Save,
  Upload,
  Camera,
} from "lucide-react";
import { mockUser } from "@/lib/mock-data";
import { toast } from "sonner";

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setUser((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Profile & Settings
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your account settings and preferences
          </p>
        </div>
        <Button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center space-x-2"
          >
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span>Billing</span>
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-xl">
                      {user.name
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
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <Badge variant="outline" className="mt-2">
                    {user.role}
                  </Badge>
                </div>
              </div>

              <Separator />

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={user.name}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, name: e.target.value }))
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, email: e.target.value }))
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={user.role}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, role: e.target.value }))
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={user.company}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, company: e.target.value }))
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={user.timezone}
                    onValueChange={(value) =>
                      setUser((prev) => ({ ...prev, timezone: value }))
                    }
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PST">
                        Pacific Standard Time (PST)
                      </SelectItem>
                      <SelectItem value="EST">
                        Eastern Standard Time (EST)
                      </SelectItem>
                      <SelectItem value="CST">
                        Central Standard Time (CST)
                      </SelectItem>
                      <SelectItem value="MST">
                        Mountain Standard Time (MST)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Statistics */}
          <Card>
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
                  <div className="text-sm text-gray-600">
                    Summaries Generated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">45</div>
                  <div className="text-sm text-gray-600">
                    Transcripts Created
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
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
                  checked={user.notifications.summaryReady}
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
                  checked={user.notifications.transcriptReady}
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
                  checked={user.notifications.email}
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
                  checked={user.notifications.push}
                  onCheckedChange={(checked) =>
                    handleNotificationChange("push", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password & Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Current Password</Label>
                  <Input type="password" placeholder="Enter current password" />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
                <div className="space-y-2">
                  <Label>Confirm New Password</Label>
                  <Input type="password" placeholder="Confirm new password" />
                </div>
                <Button variant="outline">Update Password</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Enable 2FA</div>
                  <div className="text-sm text-gray-600">
                    Add an extra layer of security to your account
                  </div>
                </div>
                <Button variant="outline">Setup 2FA</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download Your Data
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-red-600"
              >
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Pro Plan</h3>
                  <p className="text-gray-600">
                    $29/month • Unlimited meetings
                  </p>
                </div>
                <Badge
                  variant="default"
                  className="bg-green-100 text-green-800"
                >
                  Active
                </Badge>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Meetings this month</span>
                  <span>47 / Unlimited</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Storage used</span>
                  <span>2.4 GB / 100 GB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next billing date</span>
                  <span>February 15, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-semibold">
                    VISA
                  </div>
                  <div>
                    <div className="font-medium">•••• •••• •••• 4242</div>
                    <div className="text-sm text-gray-600">Expires 12/27</div>
                  </div>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: "Jan 15, 2024", amount: "$29.00", status: "Paid" },
                  { date: "Dec 15, 2023", amount: "$29.00", status: "Paid" },
                  { date: "Nov 15, 2023", amount: "$29.00", status: "Paid" },
                ].map((invoice, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <div className="font-medium">{invoice.date}</div>
                      <div className="text-sm text-gray-600">Pro Plan</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{invoice.amount}</div>
                      <Badge variant="outline" className="text-xs">
                        {invoice.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
