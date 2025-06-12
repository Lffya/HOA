// Mock CRM API functions - will be replaced with real API later
export async function getFinancials() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      id: 1,
      title: "FY 2024 Annual Report",
      date: "2024-03-31",
      type: "Annual Report",
      fileSize: "2.4 MB",
      downloadUrl: "/documents/fy2024-annual-report.pdf",
    },
    {
      id: 2,
      title: "Q4 2024 Financial Results",
      date: "2024-12-31",
      type: "Quarterly Report",
      fileSize: "1.8 MB",
      downloadUrl: "/documents/q4-2024-results.pdf",
    },
    {
      id: 3,
      title: "Q3 2024 Financial Results",
      date: "2024-09-30",
      type: "Quarterly Report",
      fileSize: "1.6 MB",
      downloadUrl: "/documents/q3-2024-results.pdf",
    },
    {
      id: 4,
      title: "FY 2023 Annual Report",
      date: "2023-03-31",
      type: "Annual Report",
      fileSize: "2.2 MB",
      downloadUrl: "/documents/fy2023-annual-report.pdf",
    },
    {
      id: 5,
      title: "Investor Presentation - Q2 2024",
      date: "2024-07-15",
      type: "Presentation",
      fileSize: "3.1 MB",
      downloadUrl: "/documents/investor-presentation-q2-2024.pdf",
    },
  ]
}

export async function getMeetings() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      id: 1,
      title: "Annual General Meeting 2024",
      date: "2024-06-15",
      time: "10:00 AM IST",
      agenda: "Review of FY 2024 performance, board elections, dividend approval, and strategic outlook for FY 2025.",
      location: "Mumbai Convention Center",
      status: "completed",
      minutesUrl: "/documents/agm-2024-minutes.pdf",
      presentationUrl: "/documents/agm-2024-presentation.pdf",
    },
    {
      id: 2,
      title: "Q4 2024 Earnings Call",
      date: "2025-01-20",
      time: "3:00 PM IST",
      agenda: "Discussion of Q4 2024 financial results, market outlook, and Q&A session with analysts.",
      location: "Virtual Meeting",
      status: "upcoming",
      minutesUrl: null,
      presentationUrl: null,
    },
    {
      id: 3,
      title: "Extraordinary General Meeting",
      date: "2024-09-10",
      time: "2:00 PM IST",
      agenda: "Approval of acquisition proposal for Amaraa Tech Innovations expansion into Southeast Asia.",
      location: "House of Amaraa Headquarters",
      status: "completed",
      minutesUrl: "/documents/egm-sept-2024-minutes.pdf",
      presentationUrl: "/documents/egm-sept-2024-presentation.pdf",
    },
    {
      id: 4,
      title: "Q3 2024 Earnings Call",
      date: "2024-10-25",
      time: "3:00 PM IST",
      agenda: "Q3 2024 financial performance review, subsidiary updates, and analyst Q&A.",
      location: "Virtual Meeting",
      status: "completed",
      minutesUrl: "/documents/q3-2024-earnings-minutes.pdf",
      presentationUrl: "/documents/q3-2024-earnings-presentation.pdf",
    },
  ]
}

export async function getNotices() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      id: 1,
      title: "Dividend Declaration - FY 2024",
      date: "2024-03-25",
      type: "Dividend",
      description: "Board declares final dividend of ₹12 per share for FY 2024",
      priority: "high",
      documentUrl: "/documents/dividend-notice-fy2024.pdf",
    },
    {
      id: 2,
      title: "Regulatory Filing - Annual Compliance Report",
      date: "2024-04-30",
      type: "Regulatory",
      description: "Annual compliance report filed with Securities and Exchange Board",
      priority: "medium",
      documentUrl: "/documents/annual-compliance-2024.pdf",
    },
    {
      id: 3,
      title: "Board Meeting Outcome - Strategic Acquisition",
      date: "2024-08-15",
      type: "Corporate Action",
      description: "Board approves acquisition of renewable energy assets worth ₹500 crores",
      priority: "high",
      documentUrl: "/documents/board-outcome-acquisition.pdf",
    },
    {
      id: 4,
      title: "Interim Dividend Declaration",
      date: "2024-09-20",
      type: "Dividend",
      description: "Interim dividend of ₹8 per share declared for H1 FY 2025",
      priority: "high",
      documentUrl: "/documents/interim-dividend-h1-2025.pdf",
    },
    {
      id: 5,
      title: "Credit Rating Update",
      date: "2024-11-10",
      type: "Regulatory",
      description: "Credit rating upgraded to AA+ by CRISIL with stable outlook",
      priority: "medium",
      documentUrl: "/documents/credit-rating-update-2024.pdf",
    },
    {
      id: 6,
      title: "Subsidiary Incorporation Notice",
      date: "2024-12-05",
      type: "Corporate Action",
      description: "Incorporation of Amaraa Green Energy Solutions Pvt. Ltd. for renewable energy ventures",
      priority: "medium",
      documentUrl: "/documents/subsidiary-incorporation-notice.pdf",
    },
  ]
}
