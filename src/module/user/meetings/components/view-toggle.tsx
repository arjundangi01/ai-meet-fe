"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";

interface ViewToggleProps {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-gray-50">
      <Button
        size="sm"
        variant={view === "list" ? "default" : "ghost"}
        onClick={() => onViewChange("list")}
        className={`h-8 px-3 ${
          view === "list"
            ? "bg-white shadow-sm border border-gray-200"
            : "hover:bg-gray-100"
        }`}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        size="sm"
        variant={view === "grid" ? "default" : "ghost"}
        onClick={() => onViewChange("grid")}
        className={`h-8 px-3 ${
          view === "grid"
            ? "bg-white shadow-sm border border-gray-200"
            : "hover:bg-gray-100"
        }`}
      >
        <Grid3X3 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewToggle;
