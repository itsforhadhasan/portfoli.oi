"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useRef, useState } from "react";

export default function Home() {
  const [profileSrc, setProfileSrc] = useState<string>("/profile-placeholder.png");
  const [bgSrc, setBgSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgInputRef = useRef<HTMLInputElement>(null);
  const [bgPosition, setBgPosition] = useState<string>("center");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          setProfileSrc(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          setBgSrc(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        backgroundImage: bgSrc ? `url(${bgSrc})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: bgPosition,
      }}
    >
      {/* Background overlay should be a child here */}
      <div className="background-overlay" />
      <div className={styles.page}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <Image
            src={profileSrc}
            alt="Forhad Hasan profile picture"
            width={140}
            height={140}
            className={styles["profile-pic"]}
          />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button
            style={{ margin: "12px 0 12px 0", padding: "8px 18px", borderRadius: 8, border: "none", background: "#6B5B95", color: "#fff", fontWeight: 500, cursor: "pointer" }}
            onClick={() => fileInputRef.current?.click()}
          >
            Change Photo
          </button>
          {/* Background image upload */}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={bgInputRef}
            onChange={handleBgChange}
          />
          <button
            style={{ margin: "0 0 24px 0", padding: "8px 18px", borderRadius: 8, border: "none", background: "#88B04B", color: "#fff", fontWeight: 500, cursor: "pointer" }}
            onClick={() => bgInputRef.current?.click()}
          >
            Change Background
          </button>
          <label style={{ display: 'block', margin: '8px 0 4px 0', fontWeight: 500 }}>Reposition Background</label>
          <select value={bgPosition} onChange={e => setBgPosition(e.target.value)} style={{ marginBottom: 16, padding: 6, borderRadius: 6 }}>
            <option value="center">Center</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="top left">Top Left</option>
            <option value="top right">Top Right</option>
            <option value="bottom left">Bottom Left</option>
            <option value="bottom right">Bottom Right</option>
          </select>
          <h1>Forhad Hasan</h1>
          <a href="mailto:forhadhasan3344@gmail.com" className={styles.email}>
            forhadhasan3344@gmail.com
          </a>
          <div>
            <div className={styles["info-label"]}>About Me:</div>
            <div className={styles["info-value"]}>
              I am a Computer Science and Engineering student at United International University, with a growing passion for Software Engineering and UI/UX Design. I’m currently focused on building user-friendly applications and improving my skills in both frontend and backend development.
            </div>
            <div className={styles["info-label"]}>Specialties:</div>
            <div className={styles["info-value"]}>Web Development, UI/UX Design, Software Engineering</div>
          </div>
        </aside>
        {/* Main Content */}
        <main className={styles.main}></main>
      </div>
    </div>
  );
}
