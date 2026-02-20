// app/projects/data/project.ts

export type Publication = {
  conference: string;
  status: string;
  link: string;
};

export type TeamCollaboration = {
  isTeamProject: boolean;
  role: string;
  process: string[];
  reproducibility: string;
  documentation: string;
};

export type ResultAnalysis = {
  accuracy?: string;
  precision?: string;
  recall?: string;
  f1Score?: string;
  keyTakeaways?: string;
  evaluationSetup?: string[];
  keyFindings?: string[];
  errorProfile?: string[];
  limitations?: string[];
};

export type WebsiteSection = {
  title: string;
  description: string;
  bullets: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  date: string;
  technologies: {
    category: string;
    items: string;
  }[];
  goals: {
    icon?: string;
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  teamCollaboration?: TeamCollaboration;
  resultAnalysis?: ResultAnalysis;
  websiteSections?: WebsiteSection[];
  github?: string;
  publication?: Publication;
};

export const projectsData: Record<string, Project> = {
  'onestop-solution': {
    slug: 'onestop-solution',
    title: 'OneStopSolution — University Service Platform',
    description:
      'An all-in-one platform that centralizes university services: events, a digital library, shared resources, and student housing. Built end-to-end to solve real campus needs.',
    date: '2024',
    technologies: [
      { category: 'Backend', items: 'Node.js, Express.js (JWT)' },
      { category: 'Frontend', items: 'React.js' },
      { category: 'Database', items: 'MySQL' },
      { category: 'Security', items: 'Role-based access, JWT auth' },
    ],
    goals: [
      {
        title: 'Bring Services Together',
        description: 'Single, easy-to-use site for many campus needs.',
      },
      {
        title: 'Create a Secure & Organized System',
        description: 'Role-based access with safe sign-up & login.',
      },
      {
        title: 'Manage Events',
        description: 'Browse, create, join; admin sees registrants and insights.',
      },
      {
        title: 'Share Academic Materials',
        description: 'Digital library for books, notes, and question banks.',
      },
      {
        title: 'Help with Housing',
        description: 'Student-friendly rental listings with owner contact.',
      },
    ],
    features: [
      {
        title: 'Full-Stack Development',
        description: 'From backend APIs to React UI; integrated with MySQL for reliable data storage.',
      },
      {
        title: 'User & Role Management',
        description: 'Secure auth with JWT; admins manage content while students access services.',
      },
      {
        title: 'Event Management',
        description: 'Create & register for events; admin dashboard to track participation.',
      },
      {
        title: 'Digital Library & Resources',
        description: 'Semester/course organization; quick search and downloads for materials.',
      },
      {
        title: 'House Renting',
        description: 'Listings with details and direct owner contact to simplify housing search.',
      },
      {
        title: 'Unified Dashboard & Notifications',
        description: 'One hub for updates; alerts for new books, notes, and events.',
      },
    ],
    websiteSections: [
      {
        title: 'Book Library Page',
        description: 'Search, browse, and download books and study materials. Admins can upload new items.',
        bullets: [
          'Organized by semester and course.',
          'Quick search and clean cards.',
          'Download with one click.',
        ],
      },
      {
        title: 'Resource Materials',
        description: 'Question banks and notes grouped per course to speed up revision.',
        bullets: [
          'Filter chips for semester and course (e.g., CSE-2103, 4th semester).',
          'Supports multiple file types (PDF, DOCX, images) with quick preview & file size.',
          'Each item shows uploader, tags, and download count for credibility.',
          'Role-aware uploads: students submit; admins review, approve, and publish.',
          'Search across title, course code, and tags to find materials fast.',
        ],
      },
      {
        title: 'House Renting Page',
        description: 'Student-friendly housing listings with photos, details, and contact info.',
        bullets: [
          'Filters for budget, rooms, and distance from campus.',
          'Card highlights: rent/month, location, furnishing, and available-from date.',
          'Bookmark/favorite listings to revisit later; pagination for long results.',
          'Safety: basic verification badge for trusted listers; easy report option.',
          'One-tap contact via phone or email; copies listing title into the message.',
        ],
      },
    ],
    github: 'https://github.com/Anik246/OneStopSolution',
  },

  'job-scraping': {
    slug: 'job-scraping',
    title: 'Full-Stack Job Scraping & Recommendation System',
    description:
      'A smart job board that discovers, cleans, and organizes job listings from job boards and company career pages. Users get tailored profiles, job suggestions, and email alerts. Built end-to-end.',
    date: '2024',
    technologies: [
      { category: 'Backend', items: 'Node.js, Express.js' },
      { category: 'Frontend', items: 'React.js' },
      { category: 'Database', items: 'MySQL' },
      { category: 'Scraping & AI', items: 'Puppeteer, Gemini API' },
    ],
    goals: [
      {
        title: 'Find Jobs Automatically',
        description: 'Puppeteer scrapes Glassdoor, BdJobs, and company career pages.',
      },
      {
        title: 'Create a Secure Website',
        description: 'Full-stack app with safe sign-up, profiles, and search.',
      },
      {
        title: 'Use AI to Organize Job Details',
        description: 'Gemini API parses messy text into clean fields.',
      },
      {
        title: 'Send Users the Right Jobs',
        description: 'Recommendations & email alerts for matching openings.',
      },
    ],
    features: [
      {
        title: 'Smart Job Scraping',
        description: 'Built Puppeteer pipelines to aggregate roles from job boards and company sites into one feed.',
      },
      {
        title: 'Cleaning Job Details with AI',
        description: 'Gemini API extracts responsibilities, skills, and metadata from unstructured descriptions.',
      },
      {
        title: 'Automatic Email Alerts',
        description: 'Nodemailer notifies users when matching jobs appear.',
      },
      {
        title: 'Safe User Accounts',
        description: 'Secure auth with bcrypt; profile data, résumé, and skills power personalized matches.',
      },
      {
        title: 'Easy-to-Use Website',
        description: 'React UI with job list, company pages, profile, and search & filters.',
      },
    ],
    websiteSections: [
      {
        title: 'Jobs Page',
        description: 'This page lists all jobs in one place. Each job card is easy to scan. You can search and filter without reloading the page.',
        bullets: [
          'Each card shows title, company, location, and posted time.',
          'If salary is found, the card shows it. If not, it stays clean.',
          'Tags show job type (full-time, part-time, remote) and skills.',
          'Search bar supports keywords like "React developer Dhaka".',
          'Filters for company, location, job type, and seniority.',
          'Sort by newest so fresh jobs appear first.',
          'Click a card to open the full job details page.',
        ],
      },
      {
        title: 'User Profile Page',
        description: 'Users manage their information here. A complete profile gives better matches and better email alerts.',
        bullets: [
          'Basic info: name, email, photo.',
          'Résumé upload (PDF). The system reads key sections like skills and experience.',
          'Skills list with chips (e.g., JavaScript, SQL, React). Easy to add or remove.',
          'Preferred roles and locations to guide recommendations.',
          'Toggle for email frequency: daily, twice a week, or weekly.',
          'Privacy note: users can delete data anytime.',
        ],
      },
      {
        title: 'Company Page',
        description: 'Jobs are grouped by employer. This helps users who want to focus on a specific company.',
        bullets: [
          'Shows company name, logo, and a short one-line summary.',
          'Displays total open roles and main office locations when known.',
          'Click a company to see all roles for that employer.',
          'Users can choose to follow a company to get alerts for new roles.',
        ],
      },
      {
        title: 'Company Job Details Page',
        description: 'This page shows the full job information in a clean layout. It helps the user decide fast.',
        bullets: [
          'Header has title, company, location, posted date, and an Apply button.',
          'Overview block with a short summary (2–3 lines).',
          'Responsibilities section with bullet points.',
          'Requirements section with skills and experience level.',
          'Benefits section when the source provides it.',
          'Tags for stack, tools, and job type at the bottom.',
          'Links to related jobs from the same company.',
        ],
      },
    ],
    github: 'https://github.com/Anik246/job-scraping-system',
  },

  network: {
    slug: 'network',
    title: 'Network Intrusion Detection — UNSW-NB15',
    description:
      'A comparative ML system that detects modern cyber threats in network traffic. Trains and evaluates RF, DT, and SVM on UNSW-NB15; handles class imbalance and full data prep.',
    date: '2024',
    technologies: [
      { category: 'Language', items: 'Python' },
      { category: 'Libraries', items: 'scikit-learn, Pandas, NumPy' },
      { category: 'Dataset', items: 'UNSW-NB15 (labeled)' },
      { category: 'Evaluation', items: 'Accuracy, Precision, Recall, F1' },
    ],
    goals: [
      {
        title: 'Compare ML Models',
        description: 'Random Forest, Decision Tree, SVM to pick the best.',
      },
      {
        title: 'Build a Strong Detector',
        description: 'Classify normal vs. attack types (DoS, Exploits, Worms, etc.).',
      },
      {
        title: 'Handle Data Imbalance',
        description: 'Balance rare attacks vs. common normal traffic.',
      },
      {
        title: 'Prepare Data',
        description: 'Cleaning, encoding categoricals, normalization for model training.',
      },
    ],
    features: [
      {
        title: 'Data Processing & Cleaning',
        description: 'Parsed UNSW-NB15; removed noise, encoded categoricals, normalized features for fair model training.',
      },
      {
        title: 'Handling Imbalanced Data',
        description: 'Balanced majority/minority classes so rare attacks are learned and recalled better.',
      },
      {
        title: 'Model Comparison',
        description: 'Built & tuned RF, DT, SVM; compared results and selected Random Forest as the best performer.',
      },
      {
        title: 'Detection Pipeline',
        description: 'Trained model learns signatures of attacks; predicts Normal vs. attack types on unseen traffic.',
      },
    ],
    teamCollaboration: {
      isTeamProject: true,
      role: 'Led the data processing & imbalance strategy (cleaning, encoding, scaling, rebalancing) and the model comparison design (RF/DT/SVM baselines with common evaluation). Teammates contributed to feature exploration, hyper-parameter sweeps, and report writing.',
      process: [
        'GitHub Issues & PR reviews; task breakdown by module; weekly syncs for blockers.',
      ],
      reproducibility: 'Shared notebooks/configs, seeded splits; consistent preprocessing across models.',
      documentation: 'Concise README with setup steps, metrics table, and notes on limitations.',
    },
    resultAnalysis: {
      accuracy: '81%',
      precision: '79%',
      recall: '79.8%',
      f1Score: '81.8%',
      evaluationSetup: [
        'Dataset: UNSW-NB15; standard train/test split with stratification.',
        'Preprocessing: categorical encoding + feature scaling; class imbalance mitigation applied.',
        'Models compared: Random Forest (RF), Decision Tree (DT), and SVM (linear/RBF probes).',
      ],
      keyFindings: [
        'RF achieved the best balance of precision/recall and the highest F1—robust to noisy/mixed features.',
        'DT was simpler/interpretable but under-fit minority attacks, reducing recall.',
        'SVM required careful kernel/scale tuning; on this feature mix, recall lagged RF.',
      ],
      errorProfile: [
        'Most residual errors were minority-class misses (rare attacks). Imbalance handling improves but doesn\'t eliminate this.',
        'Precision remained stable—false positives were contained compared to recall losses.',
      ],
      limitations: [
        'Add per-class metrics & confusion matrix visualizations for deeper analysis.',
        'Try gradient-boosted trees and calibrated probabilities; evaluate ROC-AUC and PR-AUC.',
        'Explore cost-sensitive learning to prioritize critical attack types.',
      ],
    },
    github: 'https://github.com/Anik246/Network_Intrusion_Detection--Random_forest_model',
  },

  plant: {
    slug: 'plant',
    title: 'Health Detection of Indoor Plants Using Advanced Deep Learning',
    description:
      'Custom dataset (1300+ images) • Money/Snake/Bamboo plants • YOLOv8/v9/v11 ensemble with Majority Voting • Presented at ICITS 2024 (Thailand).',
    date: '2024',
    technologies: [
      { category: 'Frameworks', items: 'PyTorch, TensorFlow, Keras' },
      { category: 'Language', items: 'Python' },
      { category: 'Models', items: 'YOLOv8, YOLOv9, YOLOv11' },
      { category: 'Libraries', items: 'scikit-learn, Pandas, NumPy, Matplotlib' },
    ],
    goals: [
      {
        title: 'Create a Custom Dataset',
        description: '1300+ annotated images for Money, Snake, and Bamboo plants.',
      },
      {
        title: 'Compare SOTA Models',
        description: 'Implement and evaluate YOLOv8, YOLOv9, YOLOv11.',
      },
      {
        title: 'Ensemble with Majority Voting',
        description: 'Combine model predictions for robust diagnosis.',
      },
      {
        title: 'Contribute to Research',
        description: 'Publish findings (ICITS 2024).',
      },
    ],
    features: [
      {
        title: 'Custom Dataset Creation',
        description: 'Collected and annotated 1300+ indoor plant images (Money, Snake, Bamboo) with health labels and YOLO-compatible formats.',
      },
      {
        title: 'Implementing & Training YOLO Models',
        description: 'Fine-tuned YOLOv8/v9/v11 on the dataset; standardized preprocessing, augmentation, and training schedules for fairness.',
      },
      {
        title: 'Majority Voting Ensemble',
        description: 'Combined per-image predictions; final decision chosen when ≥2 models agree to increase reliability over single-model output.',
      },
      {
        title: 'Comparative Analysis & Publication',
        description: 'Evaluated individual vs ensemble performance; YOLOv11 strongest solo model; work presented at ICITS 2024 (Thailand).',
      },
    ],
    teamCollaboration: {
      isTeamProject: true,
      role: 'Led the dataset pipeline (collection, annotation format, quality checks) and the ensemble approach (majority voting across YOLO variants). Teammates contributed to model training runs, experimentation, and evaluation support.',
      process: [
        'GitHub Issues for tasks, feature branches + PR reviews, and short weekly check-ins.',
      ],
      reproducibility: 'Shared configs and seeds; results logged for comparison.',
      documentation: 'Concise READMEs for setup and experiment notes.',
    },
    resultAnalysis: {
      accuracy: '94.5%',
      precision: '92.8%',
      recall: '93.5%',
      f1Score: '93.1%',
      keyTakeaways: 'Ensemble reduced variance on edge cases and improved stability across plant types. YOLOv11 led individually, but the voting system avoided occasional misclassifications seen in v8/v9.',
    },
    github: 'https://github.com/Anik246',
    publication: {
      conference: 'ICITS 2024, Thailand',
      status: 'Published',
      link: 'https://drive.google.com/file/d/1ioYbR1bifNMorZr9cWSA8cFtKhRFQ5Jl/view',
    },
  },

  'crypto-exchange': {
    slug: 'crypto-exchange',
    title: 'Crypto Exchange Platform',
    description:
      'Building a crypto exchange platform with real-estate style asset flows—focused on a clean, responsive UI, smooth API integration, secure transaction handling, and reliable performance.',
    date: '2024',
    technologies: [
      { category: 'Frontend', items: 'React, Next.js, TypeScript, TailwindCSS' },
      { category: 'Backend', items: 'Node.js' },
      { category: 'Database', items: 'PostgreSQL' },
      { category: 'Real-time', items: 'WebSocket' },
    ],
    goals: [
      {
        title: 'Build Real-time Trading',
        description: 'Live price updates and instant trade execution.',
      },
      {
        title: 'Secure Transactions',
        description: 'Safe authentication with 2FA support.',
      },
      {
        title: 'Portfolio Management',
        description: 'Track holdings and analyze performance.',
      },
      {
        title: 'Responsive Design',
        description: 'Works seamlessly on mobile and desktop.',
      },
    ],
    features: [
      {
        title: 'Real-time Price Updates',
        description: 'WebSocket integration for live cryptocurrency prices.',
      },
      {
        title: 'Secure Authentication',
        description: 'User authentication with 2FA for enhanced security.',
      },
      {
        title: 'Portfolio Dashboard',
        description: 'Analytics and tracking for user holdings.',
      },
      {
        title: 'Trading Functionality',
        description: 'Buy/sell/trade crypto assets with transaction history.',
      },
    ],
    resultAnalysis: {
      keyFindings: [
        'Successfully processed 1000+ test transactions.',
        'Achieved sub-100ms response time for API calls.',
        'Clean, maintainable codebase with TypeScript.',
        'Fully responsive across all devices.',
      ],
    },
    github: 'https://github.com/Anik246/crypto-exchange',
  },
};

export const getAllProjectSlugs = () => Object.keys(projectsData);