"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant, CartItem } from "@/types";
import { siteConfig } from "@/config/site";

export interface DeliveryDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  notes?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  grandTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toast: { show: boolean; message: string; quantity: number; productName: string } | null;
  hideToast: () => void;
  generateWhatsAppLink: (details?: DeliveryDetails) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    quantity: number;
    productName: string;
  } | null>(null);

  // Load cart from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("mz_butter_cart");
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access handling
    }
  }, []);

  // Save cart changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("mz_butter_cart", JSON.stringify(cart));
    } catch {
      // LocalStorage write handling
    }
  }, [cart]);

  const addToCart = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    if (quantity <= 0) return;
    const cartItemId = `${product.id}-${variant.id}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            product,
            selectedVariant: variant,
            quantity,
          },
        ];
      }
    });

    // Calculate new total after addition
    const currentTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0) + quantity;

    // Trigger user-requested popup notification
    setToast({
      show: true,
      message: `Added ${product.name} (${variant.label}) to cart!`,
      quantity: currentTotalItems,
      productName: product.name,
    });

    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      setToast((prev) => (prev?.show ? { ...prev, show: false } : null));
    }, 4000);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const hideToast = () => {
    setToast(null);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.selectedVariant.price * item.quantity;
  }, 0);

  const shippingFee =
    subtotal === 0
      ? 0
      : subtotal >= siteConfig.freeShippingThreshold
      ? 0
      : siteConfig.defaultShippingFee;

  const grandTotal = subtotal + shippingFee;

  const generateWhatsAppLink = (details?: DeliveryDetails): string => {
    const rawNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");

    let message = `*NEW ORDER - ${siteConfig.name.toUpperCase()}*\n`;
    message += `-----------------------------------------\n`;
    message += `Hello MZ Butter & Foods! I would like to place an order from your website:\n\n`;

    if (cart.length === 0) {
      message += `(My cart is currently empty, but I would like to inquire about your fresh dairy products.)\n`;
    } else {
      cart.forEach((item, index) => {
        const itemTotal = item.selectedVariant.price * item.quantity;
        message += `*${index + 1}. ${item.product.name}*\n`;
        message += `   • Pack Size: ${item.selectedVariant.label}\n`;
        message += `   • Quantity: ${item.quantity}\n`;
        message += `   • Unit Price: Rs. ${item.selectedVariant.price.toLocaleString()}\n`;
        message += `   • Item Subtotal: Rs. ${itemTotal.toLocaleString()}\n\n`;
      });

      message += `-----------------------------------------\n`;
      message += `*Total Amount (Subtotal):* Rs. ${subtotal.toLocaleString()}\n`;
      message += `*Delivery Charges:* ${
        shippingFee === 0 ? "FREE (Order above Rs. 5000)" : `Rs. ${shippingFee.toLocaleString()} /=`
      }\n`;
      message += `*GRAND TOTAL:* Rs. ${grandTotal.toLocaleString()} /=\n`;
      message += `-----------------------------------------\n\n`;
    }

    if (details && (details.name || details.address || details.phone)) {
      message += `*CUSTOMER & DELIVERY DETAILS:*\n`;
      if (details.name) message += `👤 *Name:* ${details.name}\n`;
      if (details.phone) message += `📞 *WhatsApp/Phone:* ${details.phone}\n`;
      if (details.address) message += `📍 *Delivery Address:* ${details.address}\n`;
      if (details.city) message += `🏙️ *City:* ${details.city}\n`;
      if (details.notes) message += `📝 *Instructions:* ${details.notes}\n`;
      message += `\n`;
    } else {
      message += `*Delivery Details:* (Please confirm my delivery address and payment method on delivery)\n\n`;
    }

    message += `Please confirm availability and dispatch schedule. Thank you!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${rawNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        shippingFee,
        grandTotal,
        isCartOpen,
        setIsCartOpen,
        toast,
        hideToast,
        generateWhatsAppLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
