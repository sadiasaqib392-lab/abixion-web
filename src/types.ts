export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  metrics: string;
  deliverables: string[];
  gradient: string;
  tag: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface AuditRequest {
  websiteUrl: string;
  businessName: string;
  email: string;
  phone: string;
  monthlyBudget: string;
  primaryGoal: string;
  industry: string;
}
