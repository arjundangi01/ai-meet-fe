export interface Meeting {
  id: string;
  title: string;
  date: string;
  duration: number; // in minutes
  status: "processing" | "completed" | "failed";
  videoUrl?: string;
  transcript?: string;
  summary?: string;
  keyPoints?: string[];
  participants: string[];
  recordingSize?: string;
}

export interface DashboardStats {
  totalMeetings: number;
  totalHours: number;
  summariesGenerated: number;
  transcriptsGenerated: number;
}

export const mockMeetings: Meeting[] = [
  {
    id: "1",
    title: "Q4 Strategy Planning",
    date: "2024-01-15T10:00:00Z",
    duration: 45,
    status: "completed",
    videoUrl:
      "https://storage.cloud.google.com/meeting-byte/ahd-vuci-xru-1755016900085.webm",
    transcript: `John: Good morning everyone, thank you for joining today's Q4 strategy planning session. I'd like to start by reviewing our performance from Q3 and then discuss our goals for the final quarter.

Sarah: Thanks John. Looking at our Q3 numbers, we exceeded our revenue targets by 12%, which is fantastic. Our customer acquisition grew by 25% compared to Q2.

Mike: That's great news Sarah. From a product perspective, we successfully launched three major features that our customers have been requesting. The feedback has been overwhelmingly positive.

John: Excellent work team. Now for Q4, I think we should focus on three main areas: customer retention, product optimization, and market expansion.

Sarah: I agree. For customer retention, I propose we implement a new customer success program that includes quarterly business reviews and dedicated account managers for our enterprise clients.

Mike: From the product side, we should prioritize performance improvements and bug fixes based on user feedback. I also think we should start planning for our 2024 product roadmap.

John: Those are great suggestions. Let's also consider expanding into the European market. We've had several inquiries from potential customers there.

Sarah: That's an interesting opportunity. We'd need to research compliance requirements and potentially hire local talent.

Mike: We should also consider the technical implications of serving European customers, including data residency and GDPR compliance.

John: Perfect. Let's create action items for each of these areas and assign owners. Sarah, can you take the lead on the customer success program?

Sarah: Absolutely. I'll have a proposal ready by next week.

Mike: I'll work on the product optimization plan and start the 2024 roadmap discussion with the engineering team.

John: Great. I'll research the European market expansion and present findings at our next meeting. Thanks everyone for a productive session.`,
    summary:
      "The team discussed Q4 strategy focusing on customer retention, product optimization, and potential European market expansion. Q3 exceeded revenue targets by 12% with 25% growth in customer acquisition.",
    keyPoints: [
      "Q3 revenue exceeded targets by 12%",
      "Customer acquisition grew 25% from Q2",
      "Three major product features successfully launched",
      "Q4 focus areas: customer retention, product optimization, market expansion",
      "Proposed customer success program with quarterly reviews",
      "European market expansion under consideration",
      "Action items assigned to team members",
    ],
    participants: ["Arjun", "Shivraj", "Devendra"],
    recordingSize: "156 MB",
  },
  {
    id: "2",
    title: "Product Design Review",
    date: "2025-07-06T14:30:00Z",
    duration: 30,
    status: "completed",
    videoUrl:
      "https://storage.cloud.google.com/meeting-byte/ahd-vuci-xru-1755016900085.webm",
    transcript: `Arjun: Welcome to our product design review. Today we're looking at the new user onboarding flow.

Shivraj: Thanks Arjun. We've redesigned the entire onboarding process based on user feedback and . The main issues were that users were dropping off at the account verification step and finding the initial setup too complex.

Developer: The analytics showed a significant drop-off rate at verification, which was definitely concerning.

Shivraj: Exactly. So we've simplified the flow to three main steps: account creation, email verification, and a  tour of key features. We've also added progress indicators and made each step more visually appealing.

Arjun: I like the simplified approach. Can you walk us through the new design.

Shivraj: Sure. First, we have a clean sign-up form with just email and password. Then instead of a boring verification email, we send a welcome message with a  verification button Finally we guide users through three core features with interactive tooltips.

Developer: The interactive tooltips are a great touch. Did you do any user testing on this?

Shivraj: We did. We tested with 20 users and saw a 65% improvement in completion rates. Users found it much more intuitive and engaging.

Arjun: That's impressive. What about the visual design?

Shivraj: We maintained our brand colors but made everything more vibrant and welcoming. The illustrations help users understand each step better.

Developer: I think this is ready to implement. When can we roll it out?

Shivraj: The development work is already underway. We should be able to launch next week.

Arjun: Perfect. Let's schedule a post-launch review to analyze the impact on our conversion rates.`,
    summary:
      "The team reviewed a redesigned user onboarding flow that simplifies the process to three steps and shows 65% improvement in user testing. The new design will launch next week.",
    keyPoints: [
      "Previous onboarding had 40% drop-off at verification",
      "New flow simplified to 3 steps: creation, verification, guided tour",
      "User testing showed 65% improvement in completion rates",
      "Added interactive tooltips and progress indicators",
      "Launch scheduled for next week",
      "Post-launch review planned to measure conversion impact",
    ],
    participants: ["Arjun", "Shivraj", "Developer"],
    recordingSize: "89 MB",
  },
  {
    id: "3",
    title: "Weekly Team Standup",
    date: "2024-01-10T09:00:00Z",
    duration: 25,
    status: "processing",
    participants: ["Arjun", "Shivraj", "Developer"],
    recordingSize: "67 MB",
  },
  {
    id: "4",
    title: "Client Presentation",
    date: "2024-01-08T15:00:00Z",
    duration: 60,
    status: "completed",
    transcript: "Client presentation transcript would go here...",
    summary:
      "Successful client presentation covering project milestones and next steps.",
    keyPoints: [
      "Project is on track and within budget",
      "Client approved next phase",
      "Timeline adjusted for holiday season",
      "Additional resources approved",
    ],
    participants: ["Arjun", "Shivraj", "User"],
    recordingSize: "203 MB",
  },
  {
    id: "5",
    title: "Marketing Campaign Review",
    date: "2024-01-05T11:00:00Z",
    duration: 40,
    status: "failed",
    participants: ["Arjun", "Shivraj", "User"],
    recordingSize: "134 MB",
  },
];

export const dashboardStats: DashboardStats = {
  totalMeetings: 0,
  totalHours: 0,
  summariesGenerated: 0,
  transcriptsGenerated: 0,
};

export const mockUser = {
  name: "John Doe",
  email: "john.doe@company.com",
  avatar:
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  role: "Product Manager",
  company: "TechCorp Inc.",
  timezone: "PST",
  notifications: {
    email: true,
    push: false,
    summaryReady: true,
    transcriptReady: true,
  },
};
