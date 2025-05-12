import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  featured: boolean;
  stock: number;
}

export const productsData: Product[] = [
  // Stamps
  {
    id: uuidv4(),
    name: "Republic Day Commemorative Stamp",
    price: 15,
    image: "https://images.pexels.com/photos/14455485/pexels-photo-14455485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Special edition stamp celebrating India's Republic Day, featuring the national flag and iconic landmarks.",
    category: "stamps",
    featured: true,
    stock: 100
  },
  {
    id: uuidv4(),
    name: "Wildlife Conservation Stamp Set",
    price: 45,
    image: "https://images.pexels.com/photos/3972619/pexels-photo-3972619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A collection of 5 stamps highlighting India's endangered wildlife species. Part of proceeds go to conservation efforts.",
    category: "stamps",
    featured: false,
    stock: 75
  },
  {
    id: uuidv4(),
    name: "Indian Scientists Series Stamps",
    price: 30,
    image: "https://images.pexels.com/photos/4452738/pexels-photo-4452738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Celebrate India's scientific achievements with this set of stamps featuring renowned Indian scientists.",
    category: "stamps",
    featured: false,
    stock: 50
  },
  {
    id: uuidv4(),
    name: "Regular Postage Stamp (5 Rs)",
    price: 5,
    image: "https://images.pexels.com/photos/207779/pexels-photo-207779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Standard 5 Rupee postage stamp for regular mail within the country.",
    category: "stamps",
    featured: false,
    stock: 500
  },
  {
    id: uuidv4(),
    name: "Diwali Festival Stamps Collection",
    price: 60,
    image: "https://images.pexels.com/photos/247124/pexels-photo-247124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Beautifully designed stamps celebrating the festival of lights with traditional motifs and designs.",
    category: "stamps",
    featured: true,
    stock: 100
  },

  // Postcards
  {
    id: uuidv4(),
    name: "Taj Mahal Postcard",
    price: 10,
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Beautiful postcard featuring the iconic Taj Mahal, perfect for sending to friends and family abroad.",
    category: "postcards",
    featured: true,
    stock: 200
  },
  {
    id: uuidv4(),
    name: "Indian Landscapes Postcard Set",
    price: 35,
    image: "https://images.pexels.com/photos/6038269/pexels-photo-6038269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Set of 5 postcards showcasing India's diverse landscapes from the Himalayas to Kerala's backwaters.",
    category: "postcards",
    featured: false,
    stock: 150
  },
  {
    id: uuidv4(),
    name: "Heritage India Postcard Collection",
    price: 40,
    image: "https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Premium collection of postcards featuring India's UNESCO World Heritage sites.",
    category: "postcards",
    featured: false,
    stock: 75
  },
  {
    id: uuidv4(),
    name: "Standard White Postcard (Pack of 10)",
    price: 25,
    image: "https://images.pexels.com/photos/1879065/pexels-photo-1879065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Plain white postcards for personal messages and artwork. High-quality card stock.",
    category: "postcards",
    featured: false,
    stock: 300
  },

  // Packets
  {
    id: uuidv4(),
    name: "Bubble-Wrap Mailing Packet (Small)",
    price: 20,
    image: "https://images.pexels.com/photos/6803494/pexels-photo-6803494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Protective bubble-wrap lined envelope for safely sending small items. Size: 15cm x 20cm.",
    category: "packets",
    featured: false,
    stock: 200
  },
  {
    id: uuidv4(),
    name: "Document Envelope (Pack of 5)",
    price: 30,
    image: "https://images.pexels.com/photos/695779/pexels-photo-695779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Sturdy paper envelopes for sending important documents and certificates. A4 size.",
    category: "packets",
    featured: true,
    stock: 150
  },
  {
    id: uuidv4(),
    name: "Premium Waterproof Mailing Packet",
    price: 40,
    image: "https://images.pexels.com/photos/3721207/pexels-photo-3721207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "High-quality waterproof mailing packet for valuable items. Includes tear-proof strip for secure closing.",
    category: "packets",
    featured: false,
    stock: 100
  },
  {
    id: uuidv4(),
    name: "Large Shipping Packet (30x40cm)",
    price: 45,
    image: "https://images.pexels.com/photos/6169041/pexels-photo-6169041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Durable large shipping packet for bulky items. Features double-sealed edges for extra security.",
    category: "packets",
    featured: false,
    stock: 125
  },

  // Cartons
  {
    id: uuidv4(),
    name: "Small Moving Carton",
    price: 55,
    image: "https://images.pexels.com/photos/4201777/pexels-photo-4201777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Sturdy corrugated cardboard box perfect for shipping smaller items. Dimensions: 30x20x15cm.",
    category: "cartons",
    featured: false,
    stock: 100
  },
  {
    id: uuidv4(),
    name: "Medium Shipping Carton",
    price: 75,
    image: "https://images.pexels.com/photos/4498142/pexels-photo-4498142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Medium-sized shipping box with double-wall construction for added protection. Dimensions: 45x30x30cm.",
    category: "cartons",
    featured: true,
    stock: 75
  },
  {
    id: uuidv4(),
    name: "Heavy-Duty Large Carton",
    price: 95,
    image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Extra strong large carton for heavier items and international shipping. Dimensions: 60x40x40cm.",
    category: "cartons",
    featured: false,
    stock: 50
  },
  {
    id: uuidv4(),
    name: "Book & Document Box (Set of 3)",
    price: 65,
    image: "https://images.pexels.com/photos/8544156/pexels-photo-8544156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Specially designed boxes for shipping books and important documents. Various sizes included.",
    category: "cartons",
    featured: false,
    stock: 80
  }
];