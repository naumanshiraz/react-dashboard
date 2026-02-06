export const stats = [
  { id: 'progress', value: '78.65%', label: 'Overall Progress' },
  { id: 'criteria', value: 95, label: 'Total Criteria' },
  { id: 'completed', value: 52, label: 'Completed Criteria' },
  { id: 'docs', value: 386, label: 'Evidence Documents' },
  { id: 'evidenceCompleted', value: 302, label: 'Evidence (Completed)' },
  { id: 'uploaded', value: 258, label: 'Uploaded To DGA' }
];

export const timeline = [
  { date: 'Mar 17', title: 'Kickoff Workshop', status: 'done' },
  { date: 'Mar 18', title: 'Data Collection', status: 'done' },
  { date: 'May 8', title: 'Initial Phase', status: 'pending' },
  { date: 'May 9–Jul 12', title: 'Verification', status: 'pending' },
  { date: 'Jul 13', title: 'Completion Reviews', status: 'pending' },
  { date: 'Aug 21', title: 'Cycle Conclusion', status: 'pending' }
];

export const barData = [
  { month: "Jan", value: 88 },
  { month: "Feb", value: 76 },
  { month: "Mar", value: 81 },
  { month: "Apr", value: 42 },
  { month: "May", value: 88 },
  { month: "Jun", value: 79 },
  { month: "Jul", value: 54 },
  { month: "Aug", value: 88 },
  { month: "Sept", value: 79 },
  { month: "Oct", value: 54 },
  { month: "Nov", value: 88 },
  { month: "Dec", value: 79 },
];

export const perspectives = [
  {
    id: 'strategy',
    title: 'Strategy And Planning',
    score: '97.78',
    pillars: [
      {
        name: 'Digital Transformation', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
        ]
      },
      { 
        name: 'Digital Governance', 
         statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'inProgress' },
        ] 
      },
      { 
        name: 'Enterprise Architecture', 
         statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ] 
      },
    ],
  },
  {
    id: 'org',
    title: 'Organization And Culture',
    score: '70.83',
    pillars: [
      { 
        name: 'Digital Culture And Environment', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'completed' },
        ] 
      },
      { 
        name: 'Leadership Development', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ] 
      },
      { 
        name: 'Skills & Capacity Building', 
        statuses: [
          { id: 1, status: 'inProgress' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
        ]  
      },
    ],
  },
  {
    id: 'ops',
    title: 'Operations And Execution',
    score: '80.00',
    pillars: [
      { 
        name: 'Business Processes', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
          { id: 4, status: 'completed' },
        ]  
      },
    ],
  },
  {
    id: 'bc',
    title: 'Business Continuity',
    score: '90.59',
    pillars: [
      { 
        name: 'Risk Management', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
        ]   
      },
      { name: 'Business Continuity', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'notStarted' },
          { id: 3, status: 'notStarted' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
          { id: 6, status: 'notStarted' },
          { id: 7, status: 'completed' },
        ]   
      },
    ],
  },
  {
    id: 'it',
    title: 'Information Technology',
    score: '75.00',
    pillars: [
      { 
        name: 'Support Systems', 
        statuses: [
          { id: 1, status: 'partiallyUploaded' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
        ]   
      },
      { 
        name: 'IT Infrastructure', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'notStarted' },
          { id: 5, status: 'completed' },
          { id: 6, status: 'completed' },
          { id: 7, status: 'completed' },
        ]   
      },
      { 
        name: 'Cloud Infrastructure', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'partiallyUploaded' },
        ]   
      },
    ],
  },
  {
    id: 'gov',
    title: 'Comprehensive Governance',
    score: '64.44',
    pillars: [
      { 
        name: 'Governance Platforms', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'notStarted' },
          { id: 5, status: 'completed' },
          { id: 6, status: 'completed' },
          { id: 7, status: 'completed' },
          { id: 8, status: 'completed' },
          { id: 9, status: 'completed' },
        ]  
      },
    ],
  },
  {
    id: 'cs',
    title: 'Channels And Services',
    score: '100',
    pillars: [
      { 
        name: 'Service Quality', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
        ]  
      },
      { 
        name: 'Digital Channels', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ] 
      },
    ],
  },
  {
    id: 'bct',
    title: 'Beneficiary Centralization',
    score: '60.00',
    pillars: [
      { 
        name: 'User Engagement', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
          { id: 4, status: 'inProgress' },
        ] 
      },
      { 
        name: 'User Relationship', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
        ] 
      },
      { 
        name: 'User Experience', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'inProgress' },
        ] 
      },
    ],
  },
  {
    id: 'gd',
    title: 'Government Data',
    score: '87.50',
    pillars: [
      { 
        name: 'Data Governance', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
        ]  
      },
      { 
        name: 'Data Usage & Availability',
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
        ] 
       },
      { 
        name: 'Open Data', 
        statuses: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'inProgress' },
        ] 
      },
    ],
  },
  {
    id: 'ri',
    title: 'Research and Innovation',
    score: '17.65',
    pillars: [
      { 
        name: 'Innovation', 
        statuses: [
          { id: 1, status: 'delayed' },
          { id: 2, status: 'delayed' },
          { id: 3, status: 'delayed' },
          { id: 4, status: 'delayed' },
        ] 
      },
      { 
        name: 'Creative Solutions', 
        statuses: [
          { id: 1, status: 'inProgress' },
          { id: 2, status: 'delayed' },
        ] 
      },
    ],
  },
];

export const score = 65;

export const leaders = [
    {
      name: "Ahmed Al-Ali",
      role: "Strategy Perspective",
      score: 96,
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Sarah Al-Khaled",
      role: "Beneficiary Perspective",
      score: 94,
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Mohammad Al-Mansour",
      role: "IT Perspective",
      score: 92,
      avatar: "https://i.pravatar.cc/100?img=56",
    },
  ];

  export const activities = [
    {
      text: 'Document "Strategy_Review.pdf" Was Uploaded By Ahmed Khaled',
      time: "5 Mins Ago",
    },
    {
      text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
      time: "20 Mins Ago",
    },
    {
      text: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
      time: "1 Hour Ago",
    },
  ];

  export const readinessLevel = 80;
  export const overdueStds = 12;
  export const missingEvidence = 5;
