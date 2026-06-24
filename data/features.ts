export interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName?: string;
}

export const featuresData: Feature[] = [
  // General Features
  {
    id: "smart-related-posts",
    title: "Smart Related Posts",
    description: "Advanced related listings based on dynamic meta values (e.g., price range) and shared terms.",
    category: "General Features",
    iconName: "Network",
  },
  {
    id: "dynamic-time-decay-sorting",
    title: "Dynamic Time-decay Sorting (Trending)",
    description: "Dynamic time-decay sorting to show trending posts (e.g., most popular in the last 7 days).",
    category: "General Features",
    iconName: "TrendingUp",
  },
  {
    id: "event-expiration-logic",
    title: "Event & Expiration Logic",
    description: "Time-based logic to filter events starting within 48 hours or deals ending today.",
    category: "General Features",
    iconName: "CalendarClock",
  },
  {
    id: "auto-state-transition",
    title: "Auto State Transition",
    description: "Set a time limit or expiration date on posts/products to automatically transition to a target status when the time passes.",
    category: "General Features",
    iconName: "Clock",
  },
  {
    id: "post-reading-time",
    title: "Post Reading Time",
    description: "Calculates and displays the estimated reading time of a post based on its content length (~200 words/min). Available purely as an Elementor Dynamic Tag.",
    category: "General Features",
    iconName: "BookOpen",
  },
  {
    id: "draft-jetengine-post-types",
    title: "Draft JetEngine Post Types",
    description: "Draft and disable JetEngine Custom Post Types directly from the WP Admin interface.",
    category: "General Features",
    iconName: "FileX",
  },
  {
    id: "show-taxonomy-columns",
    title: "Show Taxonomy Columns",
    description: "Show associated categories/taxonomies as a column in the Post List table.",
    category: "General Features",
    iconName: "Columns",
  },
  {
    id: "members-only",
    title: "Members Only",
    description: "Mark content as restricted to members.",
    category: "General Features",
    iconName: "Users",
  },
  {
    id: "soft-archived",
    title: "Soft Archived",
    description: "Hide content by archiving it without deletion.",
    category: "General Features",
    iconName: "Archive",
  },
  
  // E-commerce Features
  {
    id: "in-stock-out-of-stock",
    title: "In Stock / Out of Stock",
    description: "Adds an \"Out of Stock\" state to WooCommerce products. Use the frontend filter to hide out of stock items.",
    category: "E-commerce Features",
    iconName: "ShoppingCart",
  },
  {
    id: "flash-sale-deal-of-the-day",
    title: "Flash Sale / Deal of the Day",
    description: "Highlight products currently on a flash sale. Apply the \"Standalone Badge\" to the product loop.",
    category: "E-commerce Features",
    iconName: "Zap",
  },
  {
    id: "pre-order-available",
    title: "Pre-order Available",
    description: "Show a pre-order badge or toggle for products before release.",
    category: "E-commerce Features",
    iconName: "Clock",
  },
  {
    id: "bestseller-trending",
    title: "Bestseller / Trending",
    description: "Highlight best selling or trending products.",
    category: "E-commerce Features",
    iconName: "Award",
  },
  {
    id: "clearance-sale",
    title: "Clearance Sale",
    description: "Special dynamic toggle for stock clearance items.",
    category: "E-commerce Features",
    iconName: "Tag",
  },

  // Real Estate Features
  {
    id: "available-vs-sold-rented",
    title: "Available vs Sold/Rented",
    description: "Toggle property status between Available and Sold/Rented. Archiving stops inquiries.",
    category: "Real Estate Features",
    iconName: "Home",
  },
  {
    id: "featured-properties",
    title: "Featured Properties",
    description: "Promote specific properties to the top of results. Works best with the Featured toggle in Custom Post Types.",
    category: "Real Estate Features",
    iconName: "Star",
  },
  {
    id: "price-dropped",
    title: "Price Dropped",
    description: "Highlight properties when the price has dropped.",
    category: "Real Estate Features",
    iconName: "ArrowDownCircle",
  },
  {
    id: "open-house",
    title: "Open House",
    description: "Toggle property availability for an Open House.",
    category: "Real Estate Features",
    iconName: "Eye",
  },
  {
    id: "under-offer",
    title: "Under Offer",
    description: "Mark properties as under offer before they are fully sold.",
    category: "Real Estate Features",
    iconName: "CheckCircle",
  },

  // Job Portal Features
  {
    id: "applicant-count-column",
    title: "Applicant Count Column",
    description: "Display an Applicant Count column in the WP Admin Post List based on the \"awpposts_applicant_count\" post meta.",
    category: "Job Portal Features",
    iconName: "Users",
  },
  {
    id: "open-vs-closed-status",
    title: "Open vs Closed Status",
    description: "Switch job listings from Open to Closed. Closed jobs can be hidden using Dynamic Visibility.",
    category: "Job Portal Features",
    iconName: "Lock",
  },
  {
    id: "urgent-hiring",
    title: "Urgent Hiring",
    description: "Highlight urgent hiring needs. Useful for drawing attention in job board loops.",
    category: "Job Portal Features",
    iconName: "AlertCircle",
  },
  {
    id: "remote-only",
    title: "Remote Only",
    description: "Indicate that a role is 100% remote. Can be used as an Elementor filter.",
    category: "Job Portal Features",
    iconName: "Globe",
  },
  {
    id: "internship-opportunity",
    title: "Internship Opportunity",
    description: "Highlight internship opportunities for filtering.",
    category: "Job Portal Features",
    iconName: "Briefcase",
  },
  {
    id: "hiring-paused",
    title: "Hiring Paused",
    description: "Temporarily pause hiring without fully closing the role.",
    category: "Job Portal Features",
    iconName: "PauseCircle",
  },
  
  // Directory Features
  {
    id: "verified-profiles",
    title: "Verified Profiles (Blue Tick)",
    description: "Highlight verified profiles or businesses with a distinct blue tick badge.",
    category: "Directory Features",
    iconName: "BadgeCheck",
  },
  {
    id: "claimed-vs-unclaimed",
    title: "Claimed vs Unclaimed",
    description: "Toggle the status of a directory listing between claimed and unclaimed.",
    category: "Directory Features",
    iconName: "Flag",
  },
  {
    id: "geo-location-search",
    title: "Geo-Location / Radius Search PRO",
    description: "Enable advanced geo-location and radius search filtering for listings.",
    category: "Directory Features",
    iconName: "MapPin",
  },

  // Event Features
  {
    id: "upcoming-events",
    title: "Upcoming Events",
    description: "Automatically highlight and filter events that are scheduled for the future.",
    category: "Event Features",
    iconName: "CalendarRange",
  },
  {
    id: "sold-out",
    title: "Sold Out",
    description: "Mark events as completely sold out and disable ticket purchases.",
    category: "Event Features",
    iconName: "CalendarX",
  },

  // Education Features
  {
    id: "enrollment-open-closed",
    title: "Enrollment Open/Closed",
    description: "Switch course enrollment status between open and closed.",
    category: "Education Features",
    iconName: "GraduationCap",
  },
  {
    id: "certificate-included",
    title: "Certificate Included",
    description: "Indicate whether a course or program includes a completion certificate.",
    category: "Education Features",
    iconName: "Award",
  },

  // Automotive Features
  {
    id: "certified-pre-owned",
    title: "Certified Pre-Owned",
    description: "Highlight verified and checked used cars.",
    category: "Automotive Features",
    iconName: "ShieldCheck",
  },
  {
    id: "reserved",
    title: "Reserved",
    description: "Mark a car as booked or reserved with an advance.",
    category: "Automotive Features",
    iconName: "Lock",
  },

  // Restaurant Features
  {
    id: "chefs-special",
    title: "Chef's Special",
    description: "Highlight specific menu items as the Chef's Special.",
    category: "Restaurant Features",
    iconName: "ChefHat",
  },
  {
    id: "vegan-menu-item",
    title: "Vegan Menu Item",
    description: "Mark menu items as vegan friendly.",
    category: "Restaurant Features",
    iconName: "Leaf",
  },
  {
    id: "spicy-menu-item",
    title: "Spicy Menu Item",
    description: "Indicate the spice level or mark items as spicy.",
    category: "Restaurant Features",
    iconName: "Flame",
  }
];

export const featureCategories = [
  "General Features",
  "E-commerce Features",
  "Real Estate Features",
  "Job Portal Features",
  "Automotive Features",
  "Restaurant Features",
  "Directory Features",
  "Event Features",
  "Education Features"
];
