export const siteConfig = {
  name: "Mz Butter & foods",
  shortName: "Mz Butter",
  tagline: "Purity You Can Taste, Tradition You Can Trust",
  description: "Artisanal churned butter, velvet fresh dairy cream, and traditional fragrant desi ghee made with 100% pure milk. Farm fresh, zero preservatives.",
  // Official international WhatsApp number without '+', spaces, or dashes
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923319099009",
  phone: "0331 9099009",
  email: "orders@mzbutterfoods.com",
  address: "Mz Dairy Processing Farm, Rural Canal Road, Lahore, Pakistan",
  openingHours: "Mon - Sat: 8:00 AM - 9:00 PM (Fresh morning delivery dispatched by 7 AM)",
  currency: "Rs.",
  freeShippingThreshold: 2500,
  defaultShippingFee: 200,
  announcement: "Exclusive Opening Deals! Enjoy FREE Chilled Dairy Delivery on Orders Above Rs. 2,500 • Order Direct via WhatsApp (0331 9099009)",
  socials: {
    facebook: "https://facebook.com/mzbutterfoods",
    instagram: "https://instagram.com/mzbutterfoods",
    whatsapp: "https://wa.me/923319099009",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Recipes", href: "/recipes" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  policies: {
    terms: {
      title: "Terms & Conditions",
      content: `Welcome to Mz Butter & foods. By browsing or placing an order through our website and WhatsApp channels, you agree to our terms of service:
      
1. Product Purity & Freshness: We guarantee that all our dairy products (Butter, Fresh Cream, Desi Ghee, Chocolate Spreads) are prepared from 100% pure milk without synthetic preservatives or adulterants.
2. WhatsApp Ordering: Orders submitted through our cart generate an official WhatsApp prefilled invoice. The order is officially confirmed once you send the WhatsApp message and our delivery dispatcher acknowledges your details.
3. Pricing & Taxes: All prices listed on the website are in Pakistani Rupees (Rs.) and are inclusive of standard local packaging.
4. Perishable Goods Handling: Dairy products must be refrigerated immediately upon arrival. Mz Butter & foods cannot be held responsible for spoilage due to improper customer storage post-handover.`,
    },
    shipping: {
      title: "Shipping & Delivery Policy",
      content: `Freshness is our top priority. Here is how our cold-chain delivery works:

1. Delivery Coverage: We provide temperature-controlled, chilled delivery across the city and surrounding areas.
2. Timings: Orders placed before 4:00 PM are dispatched for next-morning cold delivery between 7:00 AM and 11:00 AM to keep your dairy crisp and cold.
3. Shipping Charges: Flat shipping rate of Rs. 200 applies on orders below Rs. 2,500. Orders of Rs. 2,500 or more qualify for completely FREE shipping.
4. Packaging: All butter, cream, and ghee are packed in food-grade, leak-proof, insulated thermal containers with ice packs during transit.`,
    },
    returns: {
      title: "Return & Refund Policy",
      content: `We stand by the supreme quality of our products with our 100% Purity Guarantee:

1. Quality Issues: If your package arrives warm, compromised, or damaged during transit, please take a photo and message us on WhatsApp within 3 hours of delivery.
2. Instant Replacement or Refund: We will gladly dispatch an immediate replacement batch free of cost or refund your payment via bank transfer/JazzCash/EasyPaisa.
3. Taste & Freshness: Because dairy products are perishable, we do not accept returns for change of mind once the tamper-evident seal is broken, unless there is a verifiable quality discrepancy.`,
    },
  },
};
