import { ServiceItem, CaseStudy, Testimonial, FAQItem, PortfolioProject } from '../types';
import heroBannerImg from '../assets/images/agency_hero_banner_1786827021166.jpg';
import seoImg from '../assets/images/seo_growth_analytics_1786827034689.jpg';
import paidMediaImg from '../assets/images/paid_media_campaigns_1786827082328.jpg';

export const COMPANY_INFO = {
  name: 'ABIXION DIGITAL MARKETING PVT LIMITED',
  shortName: 'ABIXION',
  tagline: 'Precision Digital Marketing & Revenue Growth Engineering',
  description:
    'ABIXION DIGITAL MARKETING PVT LIMITED is an elite full-spectrum digital marketing firm empowering fast-growing brands, e-commerce leaders, and enterprise organizations to dominate search rankings, maximize paid media ROAS, and scale lifetime client value.',
  email: 'growth@abixion.com',
  supportEmail: 'contact@abixiondigital.com',
  phone: '+92 302 0504559',
  headquarters: 'Suite 900, Corporate Gateway Tower, Financial District',
  founded: '2019',
  stats: [
    { label: 'Client Revenue Generated', value: '$140M+', prefix: '' },
    { label: 'Average Client ROAS', value: '4.8x', prefix: '' },
    { label: 'Active Global Campaigns', value: '250+', prefix: '' },
    { label: 'Organic Keyword #1 Rankings', value: '18,500+', prefix: '' },
    { label: 'Client Retention Rate', value: '98.4%', prefix: '' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo-engine',
    title: 'Enterprise SEO & Generative Search (GEO)',
    shortDesc: 'Outrank rivals in Google, Bing, and AI search engines with deep technical SEO, topic clusters, and authoritative backlinks.',
    fullDesc:
      'Our search engine dominance framework couples algorithmic technical optimization with high-intent semantic content architecture. We optimize your brand not just for traditional search engines, but for AI answer engines (Google AI Overviews, Perplexity, ChatGPT).',
    iconName: 'Search',
    metrics: '+340% Avg. Organic Traffic Growth',
    deliverables: [
      'Technical Core Web Vitals & Crawl Audits',
      'High-Intent Keyword Cluster Strategies',
      'Authority Backlink & Digital PR Outreach',
      'AI Generative Engine Optimization (GEO)',
      'Local & Multi-Regional Map Pack SEO',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    tag: 'Highest Organic ROI',
  },
  {
    id: 'performance-ads',
    title: 'Performance Paid Media & PPC (Google & Meta)',
    shortDesc: 'Laser-targeted ad campaigns engineered for hyper-efficient Customer Acquisition Cost (CAC) and maximum Return on Ad Spend (ROAS).',
    fullDesc:
      'We manage multi-million dollar ad budgets across Google Search, Performance Max, Meta (Instagram & Facebook), TikTok Ads, and YouTube. Our dynamic creative testing cycles uncover winning ad hooks within 72 hours.',
    iconName: 'Target',
    metrics: '4.8x Verified Average ROAS',
    deliverables: [
      'Google Search & High-Intent Shopping Campaigns',
      'Meta Performance Scaling (IG & FB dynamic ads)',
      'TikTok & YouTube Direct-Response Video Ads',
      'Predictive Retargeting & Omnichannel Audiences',
      'Automated Dayparting & Bid Optimization',
    ],
    gradient: 'from-blue-500 to-indigo-600',
    tag: 'Fastest Revenue Impact',
  },
  {
    id: 'social-growth',
    title: 'Social Media Strategy & Viral Growth',
    shortDesc: 'Transform passive scrollers into loyal brand evangelists with viral short-form video, thought leadership, and organic distribution.',
    fullDesc:
      'We construct complete social growth playbooks spanning Instagram Reels, TikTok, LinkedIn executive branding, and X/Twitter. We handle end-to-end creative scripting, post-production, community engagement, and influencer matchmaking.',
    iconName: 'Share2',
    metrics: '12.5M+ Monthly Organic Video Views',
    deliverables: [
      'Short-Form Video Scripting & High-End Editing',
      'LinkedIn B2B Thought Leadership & Executive Branding',
      'Active Community Management & Direct Messaging Funnels',
      'Creator & Micro-Influencer Partnership Management',
      'Brand Aesthetic & Cohesive Social Design Kits',
    ],
    gradient: 'from-indigo-500 to-purple-600',
    tag: 'Brand Affinity',
  },
  {
    id: 'cro-funnels',
    title: 'Conversion Rate Optimization (CRO) & Funnels',
    shortDesc: 'Turn double the clicks into paying customers through scientific UX auditing, neuromarketing copy, and frictionless checkout flows.',
    fullDesc:
      'Traffic is vanity; conversion is revenue. We audit your user funnels with heatmaps, session recordings, and qualitative surveys, then construct ultra-high-converting landing pages backed by rigorous multivariate A/B testing.',
    iconName: 'TrendingUp',
    metrics: '+62% Average Conversion Lift',
    deliverables: [
      'Multi-device UX & Checkout Friction Audits',
      'Custom High-Converting Web & Landing Page Engineering',
      'Multivariate A/B & Split Hypothesis Testing',
      'Psychological Copywriting & Visual Scarcity Triggers',
      'Heatmap, Scroll-Depth & User Journey Tracking',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    tag: 'Instant Margin Booster',
  },
  {
    id: 'web-engineering',
    title: 'High-Performance Web & E-commerce Development',
    shortDesc: 'Blazing-fast, custom-engineered digital storefronts and corporate websites built to load in <1 second and convert at scale.',
    fullDesc:
      'From custom Shopify Plus storefronts to enterprise React/Next.js web applications, our engineering team creates digital experiences that combine stunning visual aesthetics with bulletproof uptime, security, and lightning speed.',
    iconName: 'Layout',
    metrics: '99/100 Google PageSpeed Score',
    deliverables: [
      'Custom Headless & Modern React/Next.js Architectures',
      'Shopify Plus & WooCommerce E-commerce Stores',
      'Enterprise CMS & CRM Integrations (HubSpot, Salesforce)',
      'Sub-Second Global Edge CDN Deployment',
      'Full Mobile-First Responsive Precision',
    ],
    gradient: 'from-amber-500 to-orange-600',
    tag: 'Technical Excellence',
  },
  {
    id: 'email-retention',
    title: 'Lifecycle Email, SMS & Retention Marketing',
    shortDesc: 'Unlock recurring predictable revenue from your existing customer database using behavioral segmentation and automated flows.',
    fullDesc:
      'We architect high-performing retention ecosystems in Klaviyo, ActiveCampaign, and Braze. From abandoned cart win-backs to VIP loyalty sequences, we consistently drive 30-45% of total e-commerce revenue from automated retention.',
    iconName: 'Mail',
    metrics: '38% Average Revenue Share from Email/SMS',
    deliverables: [
      'Behavioral Trigger Flows (Welcome, Cart, Post-Purchase)',
      'High-Deliverability Domain Reputation Warming',
      'Hyper-Personalized Segmentations & Dynamic Content',
      'Two-Way Conversational SMS Marketing Campaigns',
      'Predictive Churn Prevention & Reactivation Funnels',
    ],
    gradient: 'from-rose-500 to-pink-600',
    tag: 'Compounding Revenue',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-fashion',
    client: 'Velvet & Oak Apparel',
    industry: 'E-Commerce & Luxury Lifestyle',
    title: 'Scaling D2C Fashion Brand from $80k/mo to $640k/mo in 9 Months',
    challenge:
      'Velvet & Oak suffered from soaring Meta ad acquisition costs, poor mobile conversion rates (1.1%), and negligible organic search visibility against retail giants.',
    solution:
      'ABIXION completely overhauled their paid social strategy with UGC TikTok-style creatives, restructured Google Performance Max campaigns, and re-engineered the mobile checkout flow.',
    results: [
      { label: 'Monthly Revenue Growth', value: '+710%', trend: 'up' },
      { label: 'Blended ROAS', value: '5.4x', trend: 'up' },
      { label: 'Cost Per Acquisition (CPA)', value: '-48%', trend: 'down' },
      { label: 'Store Conversion Rate', value: '3.65%', trend: 'up' },
    ],
    image: paidMediaImg,
    testimonial: {
      quote:
        'ABIXION did not just run ads for us; they fundamentally transformed our unit economics. Their strategic clarity and creative execution are unmatched in the digital marketing industry.',
      author: 'Marcus Vance',
      role: 'Founder & CEO, Velvet & Oak',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
  },
  {
    id: 'cloudscale-saas',
    client: 'MetricFlow Analytics',
    industry: 'B2B Enterprise SaaS',
    title: 'Generating $3.8M in Qualified Sales Pipeline with SEO & LinkedIn Ads',
    challenge:
      'MetricFlow needed high-intent enterprise CMO and VP Marketing leads but had an inflated $340 cost per demo with low lead-to-opportunity close rates.',
    solution:
      'ABIXION built a targeted Account-Based Marketing (ABM) engine on LinkedIn paired with high-intent comparative SEO keyword clusters (e.g. "Alternative to X") and interactive ROI lead magnets.',
    results: [
      { label: 'Enterprise Pipeline', value: '$3.8M', trend: 'up' },
      { label: 'Demo Cost Reduction', value: '-62%', trend: 'down' },
      { label: 'Organic Inbound Leads', value: '+420%', trend: 'up' },
      { label: 'Pipeline Velocity', value: '2.3x', trend: 'up' },
    ],
    image: seoImg,
    testimonial: {
      quote:
        'The team at ABIXION DIGITAL MARKETING understood our enterprise software buyer journey better than internal agencies we previously hired. They consistently overdeliver on pipeline targets.',
      author: 'Elena Rostova',
      role: 'Chief Marketing Officer, MetricFlow',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
  },
  {
    id: 'novadent-health',
    client: 'Apex Health Group',
    industry: 'Healthcare & Multi-Location Clinics',
    title: 'Dominating Local Search & Booking 2,400+ New Patient Consults Monthly',
    challenge:
      'Apex Health operated across 14 metropolitan medical clinics but struggled with fragmented Google Business Profiles and high Google Ads CPC in competitive regional markets.',
    solution:
      'ABIXION unified their multi-location Local SEO schema, launched geo-fenced high-intent Google Search campaigns with call tracking, and built instant 1-click mobile appointment booking widgets.',
    results: [
      { label: 'New Patient Bookings', value: '2,400+/mo', trend: 'up' },
      { label: 'Google Maps #1 Placements', value: '94%', trend: 'up' },
      { label: 'Cost Per Inbound Call', value: '-54%', trend: 'down' },
      { label: 'Annual Clinic Revenue', value: '+$4.2M', trend: 'up' },
    ],
    image: heroBannerImg,
    testimonial: {
      quote:
        'Working with ABIXION filled our clinic calendars across every single city branch within 60 days. Their transparency and weekly reporting keep us completely confident.',
      author: 'Dr. Arthur Sterling',
      role: 'Managing Director, Apex Health Group',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-web-dev',
    name: 'Apex Modern SaaS Web Platform',
    category: 'Website Development',
    shortDesc:
      'Engineered a lightning-fast, custom responsive Next.js corporate website with interactive pricing calculators and sub-second load times.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    client: 'Apex Software Cloud',
    metrics: '99/100 PageSpeed & +180% Lead Inbound',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'Interactive UI'],
    deliverables: [
      'Custom Responsive Frontend Architecture',
      'Interactive Product Demonstration Widgets',
      'Enterprise CRM & Hubspot Lead Flow Integration',
      'Full SEO Semantic Structured Schema Markup',
    ],
  },
  {
    id: 'proj-seo-domination',
    name: 'Global FinTech Organic Search Expansion',
    category: 'SEO',
    shortDesc:
      'Propelled 450+ high-intent financial keywords to Google Top 3 positions through technical audits, topic clusters, and digital PR.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    client: 'FinPulse Capital',
    metrics: '+420% Organic Traffic & 450+ #1 Rankings',
    tags: ['Technical SEO', 'Topic Clusters', 'Generative Search', 'Backlinks'],
    deliverables: [
      'Forensic Core Web Vitals & Crawl Optimization',
      'Semantic Intent Keyword Hub Creation',
      'AI Generative Engine Optimization (GEO)',
      'High-Authority Industry Backlink Acquisition',
    ],
  },
  {
    id: 'proj-social-viral',
    name: 'Omnichannel Viral Short-Form Video Engine',
    category: 'Social Media Marketing',
    shortDesc:
      'Produced and scaled high-engagement Instagram Reels and TikTok campaigns driving over 14 million organic video views.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    client: 'Luxe Activewear',
    metrics: '14.2M Video Views & +260k Followers',
    tags: ['Short-Form Video', 'Instagram Reels', 'TikTok Ads', 'Community Growth'],
    deliverables: [
      'Viral Hook Scripting & Motion Editing',
      'Creator & Micro-Influencer Management',
      'Community Direct Messaging Conversion Funnels',
      'Brand Identity & Trend Jacking Strategy',
    ],
  },
  {
    id: 'proj-paid-ads',
    name: 'Performance Paid Media & Google ROAS Scaling',
    category: 'Paid Advertising',
    shortDesc:
      'Restructured Google Search, Performance Max, and Meta ad accounts to scale monthly revenue while slashing customer acquisition cost.',
    image:
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=80',
    client: 'Nordic Supplements D2C',
    metrics: '5.8x Blended ROAS & -42% CAC',
    tags: ['Google Ads', 'Meta Ads', 'PMax', 'Conversion API'],
    deliverables: [
      'Multi-Variant Creative Hook Testing Protocol',
      'Predictive Retargeting & Lookalike Modeling',
      'Algorithmic Dayparting & Smart Bidding',
      'Server-Side Conversion API (CAPI) Integration',
    ],
  },
  {
    id: 'proj-ecommerce-scale',
    name: 'Shopify Plus High-Converting Digital Storefront',
    category: 'E-Commerce',
    shortDesc:
      'Designed and coded a bespoke e-commerce store with 1-click checkout, dynamic bundle builders, and automated post-purchase retention.',
    image:
      'https://images.unsplash.com/photo-1556742049-0a67e5572293?w=800&auto=format&fit=crop&q=80',
    client: 'Velvet & Oak Apparel',
    metrics: '+68% Conversion Lift & $3.4M Annual GMV',
    tags: ['Shopify Plus', 'CRO Funnels', 'Cart Optimization', 'Klaviyo Email'],
    deliverables: [
      'Custom Headless Shopify Plus Architecture',
      'Optimized Mobile 1-Click Checkout Flow',
      'Dynamic Upsell & Smart Bundle Matrix',
      'Automated Behavioral Lifecycle Retention Flows',
    ],
  },
  {
    id: 'proj-branding-identity',
    name: 'Luxury Tech Brand Identity & Digital Design System',
    category: 'Branding',
    shortDesc:
      'Crafted a cohesive visual identity, typography system, premium packaging guidelines, and digital brand style guidelines.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    client: 'Vanguard Dynamics',
    metrics: 'Unified 12 Global Sub-Brands & +95% Brand Trust',
    tags: ['Brand Strategy', 'Visual Identity', 'Typography', 'Style Guide'],
    deliverables: [
      'Comprehensive Brand Style Guide & Token System',
      'Digital Vector Asset Suite & 3D Visuals',
      'Executive Pitch Decks & Corporate Collateral',
      'Omnichannel Brand Voice & Messaging Framework',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Sarah Jenkins',
    role: 'VP of Growth',
    company: 'Luminary Home & Living',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: 'Increased our quarterly ROAS from 2.1x to 5.6x',
    content:
      'ABIXION DIGITAL MARKETING PVT LIMITED transformed our digital marketing spend from a cost center into our most predictable revenue generation engine. Their communication and weekly strategy pivots are extraordinary.',
  },
  {
    id: 't2',
    author: 'David Chen',
    role: 'Founder & CEO',
    company: 'FinPulse Technologies',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: 'Ranked #1 on Google for our top 40 industry keywords',
    content:
      'Our organic inbound demo requests skyrocketed by over 380% within six months of ABIXION executing their SEO and Generative Search playbook. They are genuinely in a class of their own.',
  },
  {
    id: 't3',
    author: 'Camilla Rodriguez',
    role: 'Chief Revenue Officer',
    company: 'Aura Skincare Labs',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: 'Flawless execution during Black Friday & Q4 peak scale',
    content:
      'During our holiday peak, ABIXION scaled our Meta and TikTok ad budget to $150k/month while maintaining a steady 4.9x return. Their rapid creative production team is legendary.',
  },
  {
    id: 't4',
    author: 'Jameson Thorne',
    role: 'Chief Executive Officer',
    company: 'Vanguard Logistics',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: '$6.5M in contract opportunities closed from digital leads',
    content:
      'As a traditional B2B logistics firm, we were skeptical of digital agency promises. ABIXION proved their ROI in the first 30 days. We have now partnered with them for over three consecutive years.',
  },
  {
    id: 't5',
    author: 'Elena Rostova',
    role: 'Head of Marketing',
    company: 'Apex Health Systems',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: 'Over 2,400 monthly patient bookings generated',
    content:
      'The custom web solutions and local SEO strategies built by Abixion Digital Marketing doubled our patient inquiries within the first 60 days. Truly a world-class team with high responsiveness.',
  },
  {
    id: 't6',
    author: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Nexus Retail Ventures',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: '+340% revenue growth across 6 storefronts',
    content:
      'Abixion delivered a stunning website overhaul and ran hyper-targeted paid advertising campaigns that gave us our highest ever Return on Ad Spend. Highly recommended for any scaling enterprise.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What services does Abixion Digital Marketing provide?',
    answer:
      'We provide Website Development, SEO, Social Media Management & Marketing, and Paid Ads Management.',
    category: 'Services',
  },
  {
    question: 'Do you create custom websites?',
    answer:
      'Yes, we create custom, responsive, modern, and user-friendly websites according to your business requirements.',
    category: 'Development',
  },
  {
    question: 'How can SEO help my business?',
    answer:
      "SEO helps improve your website's visibility on search engines, attract organic traffic, and reach potential customers.",
    category: 'SEO',
  },
  {
    question: 'Do you manage social media accounts?',
    answer:
      'Yes, we provide professional social media management and marketing services to help businesses grow their online presence.',
    category: 'Social Media',
  },
  {
    question: 'Do you run paid advertising campaigns?',
    answer:
      'Yes, we create and manage targeted advertising campaigns designed to reach the right audience and maximize return on investment.',
    category: 'Paid Advertising',
  },
  {
    question: 'How can I contact Abixion Digital Marketing?',
    answer: 'You can contact us at: +92 302 0504559',
    category: 'Contact',
  },
];

export const GROWTH_FRAMEWORK = [
  {
    step: '01',
    title: 'Deep Forensic Diagnostic & Competitor Intel',
    description:
      'We dissect your current analytics, conversion funnels, pixel tracking, past ad campaigns, and competitor weaknesses to locate your highest-leverage growth bottlenecks.',
  },
  {
    step: '02',
    title: 'Full-Funnel Campaign & Creative Architecture',
    description:
      'We engineer bespoke landing pages, develop multi-angle direct response ad copy, produce high-converting motion graphics, and configure robust conversion tracking.',
  },
  {
    step: '03',
    title: 'Rapid Validation & Algorithmic Creative Testing',
    description:
      'We launch structured multi-variant ad sets across search and social channels, benchmarking CPA and click-through rates to isolate top-tier winning creative hooks.',
  },
  {
    step: '04',
    title: 'Precision Budget Scaling & ROAS Maximization',
    description:
      'We deploy algorithmic dayparting, target audience expansion, and automated bidding algorithms to double down on winning segments without increasing CPA.',
  },
  {
    step: '05',
    title: 'Retention Multipliers & Lifetime Value Optimization',
    description:
      'We plug retention leaks with automated email flows, SMS engagement, and loyalty loops to turn single buyers into repeat brand evangelists.',
  },
];
