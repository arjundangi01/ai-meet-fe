"use client";

import { useState } from "react";
import { useBetaRequest } from "../../_hooks/useAuth";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function BetaNotice() {
  const [email, setEmail] = useState("");

  const { mutate: betaRequest, isPending } = useBetaRequest();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    betaRequest(
      { email },
      {
        onSuccess: () => {
          toast.success("Beta request sent successfully.");
        },
        onError: () => {
          toast.error("Beta request failed.");
        },
      }
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-bold mb-2">🚀 Beta Access</h2>
      <p className="text-gray-600 mb-4">
        ReplayAI is <span className="font-semibold">open for beta users</span>
        for <span className="font-semibold">1 month only</span>. We’ll go live
        for everyone soon!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          disabled={isPending}
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition"
        >
          Join Beta / Notify Me
        </Button>
      </form>
    </div>
  );
}
