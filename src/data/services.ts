import { v4 as uuidv4 } from 'uuid';

export interface Service {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  duration: string;
  category: string;
  featured: boolean;
  features?: string[];
}

export const servicesData: Service[] = [
  // Courier Services
  {
    id: uuidv4(),
    name: "Standard Courier Service",
    price: 100,
    image: "https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Reliable delivery of your packages within 3-5 business days to any location in India.",
    duration: "3-5 business days",
    category: "courier",
    featured: true,
    features: [
      "Tracking service included",
      "Insurance up to ₹1,000",
      "Delivery confirmation",
      "Cash on delivery available"
    ]
  },
  {
    id: uuidv4(),
    name: "Express Courier",
    price: 250,
    image: "https://images.pexels.com/photos/4498515/pexels-photo-4498515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Fast and guaranteed delivery within 24-48 hours for urgent packages to major cities.",
    duration: "24-48 hours",
    category: "courier",
    featured: false,
    features: [
      "Priority handling",
      "Real-time tracking",
      "Insurance up to ₹5,000",
      "SMS alerts on delivery status"
    ]
  },
  {
    id: uuidv4(),
    name: "International Courier",
    price: 1200,
    image: "https://images.pexels.com/photos/415779/pexels-photo-415779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Secure and reliable international shipping service to over 200 countries worldwide.",
    duration: "5-10 business days",
    category: "courier",
    featured: true,
    features: [
      "Customs clearance assistance",
      "Package insurance",
      "International tracking",
      "Delivery confirmation"
    ]
  },
  {
    id: uuidv4(),
    name: "Document Courier",
    price: 75,
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Specialized service for important documents, ensuring safe and timely delivery.",
    duration: "2-3 business days",
    category: "courier",
    featured: false,
    features: [
      "Specialized handling for sensitive documents",
      "Sealed envelopes provided",
      "Signature confirmation",
      "Insurance for important papers"
    ]
  },

  // Utility Services
  {
    id: uuidv4(),
    name: "Electricity Bill Payment",
    price: 20,
    image: "https://images.pexels.com/photos/3682313/pexels-photo-3682313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Convenient bill payment service for all major electricity providers. Instant receipt provided.",
    duration: "Same day processing",
    category: "utility",
    featured: true,
    features: [
      "No additional fees beyond service charge",
      "Instant confirmation",
      "Digital receipt",
      "Available for all major providers"
    ]
  },
  {
    id: uuidv4(),
    name: "Gas Connection Registration",
    price: 150,
    image: "https://images.pexels.com/photos/6150914/pexels-photo-6150914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Hassle-free registration for new gas connections. We handle all the paperwork and follow-ups.",
    duration: "7-14 business days",
    category: "utility",
    featured: false,
    features: [
      "Document verification assistance",
      "Application submission",
      "Follow-up with gas company",
      "Status updates via SMS"
    ]
  },
  {
    id: uuidv4(),
    name: "Water Bill Payment",
    price: 20,
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Pay your water utility bills easily. Service available for all municipal and private water suppliers.",
    duration: "Same day processing",
    category: "utility",
    featured: false,
    features: [
      "Instant payment confirmation",
      "Digital receipt provided",
      "No hidden charges",
      "Historical payment records available"
    ]
  },
  {
    id: uuidv4(),
    name: "Property Tax Payment",
    price: 50,
    image: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Pay your property taxes with ease. We ensure your payment reaches the municipal authorities on time.",
    duration: "1-2 business days",
    category: "utility",
    featured: false,
    features: [
      "Assessment verification",
      "Payment processing",
      "Official receipt provided",
      "Record keeping for 7 years"
    ]
  },

  // Mobile & Communication
  {
    id: uuidv4(),
    name: "Mobile Recharge Service",
    price: 10,
    image: "https://images.pexels.com/photos/3180818/pexels-photo-3180818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Instant recharge for all mobile operators. Prepaid and postpaid plans available.",
    duration: "Immediate",
    category: "mobile",
    featured: true,
    features: [
      "All operators supported",
      "Prepaid and postpaid options",
      "Data pack recharges",
      "Special offers available"
    ]
  },
  {
    id: uuidv4(),
    name: "DTH Recharge",
    price: 15,
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Recharge your DTH service instantly. All major DTH providers supported.",
    duration: "Immediate",
    category: "mobile",
    featured: false,
    features: [
      "All DTH providers supported",
      "Package upgrades available",
      "Add-on channel selection",
      "Instant activation"
    ]
  },
  {
    id: uuidv4(),
    name: "SIM Card Registration",
    price: 100,
    image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "New SIM card registration service with document verification and activation assistance.",
    duration: "1-2 business days",
    category: "mobile",
    featured: false,
    features: [
      "Document verification",
      "Application submission",
      "SIM card activation",
      "Network selection guidance"
    ]
  },

  // Other Services
  {
    id: uuidv4(),
    name: "Passport Photo Service",
    price: 150,
    image: "https://images.pexels.com/photos/7225358/pexels-photo-7225358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Professional passport-sized photos that meet all official requirements for various document applications.",
    duration: "15 minutes",
    category: "other",
    featured: false,
    features: [
      "Digital copy provided",
      "Multiple sizes available",
      "Meets all government requirements",
      "Quick service"
    ]
  },
  {
    id: uuidv4(),
    name: "Document Lamination",
    price: 30,
    image: "https://images.pexels.com/photos/6670074/pexels-photo-6670074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Protect your important documents with our high-quality lamination service.",
    duration: "5 minutes",
    category: "other",
    featured: false,
    features: [
      "Multiple sizes available",
      "Premium quality material",
      "Protection from water damage",
      "UV protection to prevent fading"
    ]
  },
  {
    id: uuidv4(),
    name: "Photocopying Service",
    price: 2,
    image: "https://images.pexels.com/photos/1053103/pexels-photo-1053103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "High-quality photocopying for documents. Black & white and color options available.",
    duration: "Immediate",
    category: "other",
    featured: false,
    features: [
      "Black & white and color options",
      "Multiple paper sizes",
      "Bulk discounts available",
      "Double-sided printing"
    ]
  },
  {
    id: uuidv4(),
    name: "Money Order Service",
    price: 50,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Secure way to send money anywhere in the country. Trusted and reliable service.",
    duration: "1-3 business days",
    category: "other",
    featured: true,
    features: [
      "Nationwide service",
      "Secure transaction",
      "Tracking number provided",
      "Delivery confirmation"
    ]
  }
];