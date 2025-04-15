"use client"

import { useState } from "react"

export default function ContentItem({ item }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px" /* Apple-style rounded corners - ADJUST THIS FOR MORE/LESS ROUNDED CORNERS */,
        transition: "all 0.3s ease",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        boxShadow: isHovered ? "0 10px 30px rgba(0, 0, 0, 0.4)" : "0 4px 20px rgba(0, 0, 0, 0.2)",
        width: "100%",
        margin: "0 auto",
        textAlign: "left",
        backgroundColor: "#222222" /* Card background color - CHANGE THIS TO ADJUST CARD BACKGROUND */,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ===== PRODUCT IMAGE ===== */}
      <div
        style={{
          position: "relative",
          aspectRatio: "9/16" /* Portrait aspect ratio like TikTok */,
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
              borderRadius: "12px" /* Apple-style rounded corners */,
              backgroundColor: "#9936ff" /* Electric Purple - CHANGE THIS TO ADJUST CATEGORY BADGE */,
              color: "white",
            }}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* ===== PRODUCT DETAILS ===== */}
      <div style={{ padding: "1.25rem" }}>
        {/* ===== PRODUCT TITLE ===== */}
        <h2
          style={{
            fontSize: "1.1rem",
            fontWeight: "600" /* Apple-style font weight */,
            marginBottom: "0.5rem",
            color: "white" /* Product title color */,
            letterSpacing: "-0.01em" /* Apple-style negative letter spacing */,
          }}
        >
          {item.title}
        </h2>

        {/* ===== PRICE AND BUY BUTTON ===== */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
          {/* ===== PRICE ===== */}
          <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#f5ff36" /* Neon Yellow */ }}>
            ${item.price}
          </div>

          {/* ===== BUY BUTTON ===== */}
          <button
            onClick={() => {
              alert(`Adding ${item.title} to cart - $${item.price}`)
              // You can replace this with your actual cart functionality
            }}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "20px" /* Apple-style pill button */,
              backgroundColor: "#ff36f5" /* Hot Pink - CHANGE THIS TO ADJUST BUTTON COLOR */,
              color: "white",
              fontWeight: "500",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
              fontSize: "0.875rem",
              letterSpacing: "-0.01em" /* Apple-style negative letter spacing */,
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}
