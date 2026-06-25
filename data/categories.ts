import { featuresData } from "./features";

export interface CategoryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  videoUrl: string;
  categoryMatch: string; // The exact string used in features.ts
}

export const categoriesData: CategoryData[] = [
  { 
    id: "general", 
    title: "General & Blog", 
    subtitle: "Core Workflow Automation",
    description: "Streamline your publishing process with advanced tools designed for content creators, bloggers, and editors. Enforce strict editorial guidelines, automate post statuses, and manage your content lifecycle effortlessly.",
    icon: "📝", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "General Features"
  },
  { 
    id: "woocommerce", 
    title: "WooCommerce Store", 
    subtitle: "Advanced E-Commerce Management",
    description: "Take full control of your WooCommerce store inventory. Create dynamic statuses for flash sales, low stock alerts, pre-orders, and automatically restrict product visibility based on custom conditions.",
    icon: "🛒", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "E-commerce Features"
  },
  { 
    id: "real-estate", 
    title: "Real Estate Portals", 
    subtitle: "Property Lifecycle Control",
    description: "Manage your property listings dynamically. Switch statuses from 'Available' to 'Under Offer' or 'Sold', and automatically trigger UI changes like 'Price Dropped' badges to attract potential buyers instantly.",
    icon: "🏡", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "Real Estate Features"
  },
  { 
    id: "job-portal", 
    title: "Job Portals / Careers", 
    subtitle: "Smart Hiring Workflows",
    description: "Keep your job board fresh and accurate. Automatically pause hiring, close expired job listings, and highlight urgent or remote roles using dynamic post status automation.",
    icon: "💼", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "Job Portal Features"
  },
  { 
    id: "directory", 
    title: "Business Directories", 
    subtitle: "Listing Verification & Claims",
    description: "Empower your business directory with robust status workflows. Toggle between 'Verified', 'Claimed', or 'Unclaimed' listings and provide premium geolocation filtering capabilities to your users.",
    icon: "📍", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "Directory Features"
  },
  { 
    id: "event", 
    title: "Events & Calendars", 
    subtitle: "Automated Event Statuses",
    description: "Never show outdated events again. Use our time-based triggers to automatically shift events to 'Started', 'Ended', or 'Sold Out' based on the exact date and available ticket inventory.",
    icon: "📅", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "Event Features"
  },
  { 
    id: "education", 
    title: "Education & Courses", 
    subtitle: "Course Enrollment Logic",
    description: "Manage your LMS seamlessly. Control when enrollments open and close automatically, handle cohort-based access, and securely restrict course content using powerful state transition rules.",
    icon: "🎓", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "Education Features"
  },
  { 
    id: "automotive", 
    title: "Automotive & Rentals", 
    subtitle: "Inventory Status Management",
    description: "Perfect for car dealerships and rental businesses. Mark inventory as 'Reserved', 'Certified Pre-Owned', or 'Sold', and dynamically prevent double bookings with strict post status locks.",
    icon: "🚗", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "Automotive Features"
  },
  { 
    id: "restaurant", 
    title: "Restaurants & Menus", 
    subtitle: "Dynamic Menu Management",
    description: "Keep your digital menus up to date. Quickly switch items to 'Out of Stock', highlight 'Chef\\'s Specials', or automatically disable breakfast items after 11 AM using conditional triggers.",
    icon: "🍔", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoryMatch: "Restaurant Features"
  },
];

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categoriesData.find(c => c.id === slug);
}

export function getFeaturesByCategory(categoryMatch: string) {
  return featuresData.filter(f => f.category === categoryMatch);
}
