"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

// Replace with your actual publishable key (or use env vars)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function ContentItem({ item }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleBuy = async () => {
    const res = await fetch("/api/checkout_session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })

    const { sessionId } = await res.json()
    const stripe = await stripePromise
    stripe.redirectToCheckout({ sessionId })
  }

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        transition: "all 0.3s ease",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        boxShadow: isHovered ? "0 10px 30px rgba(0, 0, 0, 0.4)" : "0 4px 20px rgba(0, 0, 0, 0.2)",
        width: "100%",
        margin: "0 auto",
        textAlign: "left",
        backgroundColor: "#222222",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ===== PRODUCT IMAGE ===== */}
      <div
        style={{
          position: "relative",
          aspectRatio: "9/16",
          overflow: "hidden",
        }}
      >
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* ===== CATEGORY BADGE ===== */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            zIndex: 20,
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.75rem",
              fontSize: "0.75rem",
              fontWeight: "500",
              borderRadius: "12px",
              backgroundColor: "#9936ff",
              color: "white",
            }}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* ===== PRODUCT DETAILS ===== */}
      <div style={{ padding: "1.25rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            color: "white",
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </h2>

        {/* ===== PRICE AND BUY BUTTON ===== */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
          <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#f5ff36" }}>
            ${item.price}
          </div>

          <button
            onClick={handleBuy}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "20px",
              backgroundColor: "#ff36f5",
              color: "white",
              fontWeight: "500",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
              fontSize: "0.875rem",
              letterSpacing: "-0.01em",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}
