import React, { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface MeetingSummaryProps {
  summary?: string; // directly pass Gemini's text response
  title?: string;
}

const summary =
  'Here is a summary of the meeting transcript.\n\n***\n\n### **Meeting Summary**\n\n**1. Working Hours & Employee Structure**\n\n*   The team reviewed updated designs for handling employee working hours and structure.\n*   The naming convention for the field team was standardized to "Field" instead of "On Field".\n*   A clear hierarchy for determining an employee\'s hours was established: **Team → Role → Employee-specific overrides**.\n*   The "Company Standard Hours" category was deemed redundant and will be removed. The new structure will consist of: Team Standard Hours (TSH), Role Standard Hours (RSH), Employee Standard Hours, and Customized Hours.\n*   Standard hours must be defined with specific start/end times and days, not just a total number of hours.\n\n**2. PTO and Attendance Integration**\n\n*   PTO statuses must be displayed directly on the employee roster for visibility.\n*   Attendance deviations, such as late arrivals or early departures, must be automatically synced to the roster.\n*   Schedulers can manually update the roster in cases where an employee provides advance notice of a schedule change (e.g., late arrival).\n*   A day-end workflow will capture GPS check-in/out times and logged hours. Employees can submit notes to explain any discrepancies.\n\n**3. Handling Discrepancies and Overrides**\n\n*   System administrators will receive notifications when there is a mismatch between an employee\'s rostered hours and their GPS time log.\n*   Administrators have the ability to override hours but are required to provide a note explaining the reason for the change.\n*   For partial-day absences (e.g., appointments), technicians will have a "Pause" option, while managers can use an "Override" option, which also requires a note.\n\n**4. Team Scheduling and Role Configuration**\n\n*   Each team (Field, Warehouse, Office) will have its own distinct schedule, validation, and publishing process.\n*   For employees who work across multiple teams, Field work will take precedence. Special "job cards" will be created to manage true split-day assignments.\n*   Each role in the system will now include standard working hours per day (e.g., Delivery Driver 7:00–3:30) in the Role Management Tab.\n\n**5. System Features and UI Updates**\n\n*   The "All Employees" tab will be retained but updated to explicitly display each employee\'s team membership and their actual working hours (e.g., "8:00 AM – 4:30 PM") rather than just a label like "RSH".\n*   The holiday calendar must be updated to allow for the addition of new holidays and special days.\n*   Special jobs, such as vehicle servicing, should allow for direct cost coding to avoid being attributed to general warehouse overhead.\n\n**6. Future Considerations (Phase 2)**\n\n*   **Payroll:** The system will need to support pulling time card records for payroll integration.\n*   **Extreme Weather:** While full-day closures are covered, a process for handling early releases will be defined. This will likely involve alerts and manual edits.\n\n---\n\n### **Decisions**\n\n*   The "Company Standard Hours" option will be removed from the system.\n*   The official hierarchy for working hours is: Team → Role → Employee → Custom.\n*   All manual overrides of employee hours must be accompanied by a note for audit purposes.\n*   Distinct job cards will be created to handle crossover work or split-day assignments.\n*   The "All Employees" tab will be redesigned to show more explicit detail on team and hours.\n\n### **Action Items**\n\n*   **Neetu\'s Team:**\n    *   Update designs to reflect role-specific standard hours.\n    *   Update employee profile designs to include necessary details.\n    *   Incorporate a notification system for discrepancies between GPS and logged time.\n*   **BCEW Team:**\n    *   Catalog the new job codes required for crossover/split work.\n*   **Project Team:**\n    *   Add functionality to the holiday calendar for new/special day adjustments.\n    *   Define the specific requirements for Phase 2, including payroll integration and extreme weather protocols.';

const MeetingSummary: React.FC<MeetingSummaryProps> = ({ title }) => {
  const toc = useMemo(() => {
    const headings: string[] = [];
    summary.split("\n").forEach((line) => {
      const match = line.match(/^#{1,6}\s+(.*)/);
      if (match) headings.push(match[1] || "");
    });
    return headings;
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
  };

  const handleDownload = () => {
    const blob = new Blob([summary], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title || "meeting-summary"}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-2xl">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <CardTitle>{title || "Meeting Summary"}</CardTitle>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleCopy}>
            <Copy className="w-4 h-4 mr-1" /> Copy
          </Button>
          <Button size="sm" variant="outline" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-1" /> Download
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {toc.length > 0 && (
          <div className="bg-muted p-3 rounded-md">
            <p className="font-medium mb-1">Table of Contents</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {toc.map((heading, i) => (
                <li key={i}>{heading}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeetingSummary;
