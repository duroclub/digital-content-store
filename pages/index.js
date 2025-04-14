"use client"

import Head from "next/head"
import ContentItem from "../components/ContentItem"
import { useState } from "react"

// ===== CONTENT DATA =====
// Add more products by copying an object and changing the values
const content = [
  {
    id: "product_1",
    title: "Milfy fun with Iris",
    category: "MILF BIMBO",
    price: 7.89,
    image: "/thumbnails/IRIS7-thumb.jpg",
  },
  {
    id: "product_2",
    title: "Lizzy left me dizzy",
    category: "TSBabe",
    price: 7.89,
    image: "/thumbnails/lizzy-thumb.jpeg",
  },
  // To add more products, copy one of the objects above and change the values
]

export default function Home() {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("")

  // Filter content based on search term
  const filteredContent = content.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div style={{ minHeight: "100vh" }}>
      <Head>
        <title>DURO CLUB</title>
        {/* ===== FONT SETUP ===== */}
        <style>{`
          /* ===== GLOBAL STYLES ===== */
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
            color: white;
            background-color:rgb(16, 20, 32); /* Charcoal background - CHANGE THIS COLOR TO ADJUST BACKGROUND */
            text-align: center;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          * {
            box-sizing: border-box;
          }
          
          button {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
          }
          
          input {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
          }
        `}</style>
      </Head>

      {/* ===== HEADER IMAGE ===== */}
      {/* Replace the src with your own header image */}
      <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
        <img
          src="/thumbnails/lizzy-thumb.jpeg"
          alt="Digital Store Header"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* ===== HEADER OVERLAY ===== */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(26, 26, 26, 0.7)" /* Adjust opacity here */,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          {/* ===== SITE TITLE ===== */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              fontWeight: "700",
              marginBottom: "0.5rem",
              color: "white" /* Hot Pink Title - CHANGE THIS TO ADJUST TITLE COLOR */,
              letterSpacing: "-0.02em" /* Apple-style negative letter spacing */,
            }}
          >
            DURO CLUB
          </h1>

          {/* ===== SITE SUBTITLE ===== */}
          <p
            style={{
              color: "lightgray" /* Neon Yellow Subtitle - CHANGE THIS TO ADJUST SUBTITLE COLOR */,
              fontSize: "clamp(1rem, 4vw, 1.25rem)",
              marginBottom: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
              fontWeight: "400",
              letterSpacing: "-0.01em" /* Apple-style negative letter spacing */,
            }}
          >
            Support by buying my content! Fund more content!
          </p>
        </div>
      </div>

      <main style={{ position: "relative", padding: "2rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        {/* ===== SEARCH SECTION ===== */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
            {/* ===== SEARCH INPUT ===== */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1.5rem",
                borderRadius: "20px" /* Apple-style rounded corners */,
                backgroundColor: "rgba(255, 255, 255, 0.1)" /* Search bar background */,
                border: "none",
                color: "white",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* ===== PRODUCTS GRID ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" /* Narrower columns for portrait cards */,
            gap: "1.5rem",
            justifyItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {filteredContent.length > 0 ? (
            filteredContent.map((item) => (
              <div key={item.id} style={{ width: "100%", maxWidth: "250px" }}>
                <ContentItem item={item} />
              </div>
            ))
          ) : (
            <p style={{ color: "white", textAlign: "center", gridColumn: "1 / -1", fontSize: "1.25rem" }}>
              No products found. Try a different search term.
            </p>
          )}
        </div>
      </main>

      {/* ===== FOOTER SECTION ===== */}
      <footer
        style={{ textAlign: "center", padding: "2rem", color: "#9936ff" /* Electric Purple */, marginTop: "3rem" }}
      >
        <p>© {new Date().getFullYear()} DURO CLUB Store. All rights reserved.</p>
      </footer>
    </div>
  )
}
