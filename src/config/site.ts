export const siteConfig = {
  name: "MZ Butter & Foods",
  shortName: "MZ Butter",
  tagline: "Better Ingredients , Better Products",
  description: "Artisanal churned butter, velvet fresh dairy cream, and traditional fragrant desi ghee made with 100% pure milk. Farm fresh, zero preservatives.",
  // Official international WhatsApp number without '+', spaces, or dashes
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923319099009",
  phone: "+92 331 9099009",
  email: "mzbutterfoods.info@gmail.com",
  address: "Karachi, Pakistan",
  openingHours: "Mon - Sun: 8:00 AM - 9:00 PM ",
  currency: "Rs.",
  freeShippingThreshold: 5000,
  defaultShippingFee: 200,
  announcement: "Free delivery on order above Rs.5000 /=",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61595667909781",
    instagram: "https://www.instagram.com/mz_foods01/",
    whatsapp: "https://wa.me/923319099009",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Recipes", href: "/recipes" },
    { label: "Careers", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  policies: {
    terms: {
      title: "Terms & Conditions",
      content: `By browsing or placing an order through our website and WhatsApp channels, you agree to our Terms of Service:

• Product Quality & Freshness: We are committed to providing high quality, fresh, and carefully prepared food products. All our products are handled and packed with care, following appropriate quality and food safety practices.

• WhatsApp Ordering: Orders submitted through our website cart generate an official pre filled WhatsApp order message. An order is considered confirmed once you send the WhatsApp message and our team acknowledges and confirms your order details.

• Pricing & Taxes: All prices listed on our website are in Pakistani Rupees (Rs.). Prices are subject to change without prior notice. Any applicable delivery charges will be communicated during order confirmation.

• Product Storage & Handling: Customers are responsible for following the recommended storage and handling instructions provided for each product. Products requiring refrigeration or frozen storage must be stored appropriately upon delivery. Company is not responsible for spoilage resulting from improper storage or handling after delivery.

• Product Information: We make every effort to ensure that product descriptions, images, and specifications displayed on our website are accurate. Minor variations in product appearance or packaging may occur.

• Order Changes & Cancellation: Any request to modify or cancel an order must be communicated to our team as early as possible. Changes may not be possible once an order has been processed or dispatched.

• Customer Information: Customers are responsible for providing accurate contact details and delivery addresses to ensure smooth order processing and delivery.

• Policy Updates: MZ Butter & Foods reserves the right to update these Terms of Service at any time. Any changes will be published on our website.`,
    },
    shipping: {
      title: "Shipping & Delivery Policy",
      content: `Freshness is our top priority. Here is how our delivery works:

1. Delivery Coverage: We provide reliable delivery across the city and surrounding areas.
2. Timings: Orders placed before 4:00 PM are dispatched for next-morning delivery between 7:00 AM and 11:00 AM.
3. Shipping Charges: Flat delivery rate of Rs. 200 applies. Orders above Rs. 5,000 qualify for completely FREE delivery.
4. Packaging: All products are carefully packed in food-grade, leak-proof packaging to preserve quality during transit.`,
    },
    returns: {
      title: "Return & Refund Policy",
      content: `Incorrect or damaged products must be reported within 7 days of delivery.

Returns or exchanges are accepted only if the product seal remains unopened and the product is unused. Delivery charges may apply.

Refunds or exchanges are subject to product inspection and approval.

Contact our customer support within 7 days of delivery with your order number and reason for return. Our team will guide you through the process.

We are committed to treating every customer with honesty, fairness, and respect.`,
    },
    privacy: {
      title: "Privacy Policy",
      content: `At MZ Butter & Foods, we respect your privacy and are committed to protecting the personal information you share with us through www.mzbutterfoods.com.

Information We Collect:
We may collect information such as your name, email address, phone number, delivery or business details, and any other information you provide through our contact forms, enquiries, or customer feedback.

How We Use Your Information:
We use your information to:
• Respond to enquiries and provide customer support.
• Process and manage orders and business requests.
• Improve our products, services, and website.
• Share product updates, offers, or promotional information where appropriate.

Cookies:
Our website may use cookies to improve browsing experience, understand website traffic, and enhance website functionality. You can manage or disable cookies through your browser settings.

Information Security:
We take reasonable measures to protect your personal information against unauthorised access, misuse, or disclosure. However, no online transmission or storage method can be guaranteed to be completely secure.

Sharing of Information:
We do not sell or rent your personal information. We may share it with trusted service providers when necessary to operate our website or fulfil your requests, subject to appropriate safeguards.

Policy Updates & Contact:
We may update this Privacy Policy from time to time. Any changes will be posted on this page.
For privacy-related questions, please contact us through the contact details provided on www.mzbutterfoods.com.`,
    },
  },
};
