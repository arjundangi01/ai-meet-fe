import React from "react";
import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const BillingTab = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Pro Plan</h3>
              <p className="text-gray-600">$29/month • Unlimited meetings</p>
            </div>
            <Badge variant="default" className="bg-green-100 text-green-800">
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
    </div>
  );
};

export default BillingTab;
