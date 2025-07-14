import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5em" }}>Forhad Hasan</h1>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: "1.5em", color: "#666" }}>Web Developer</h2>
        <a href="mailto:forhadhasan3344@gmail.com" style={{ fontSize: "1.1rem", color: "#0070f3", textDecoration: "underline" }}>
          forhadhasan3344@gmail.com
        </a>
        <section style={{ marginTop: "2.5em", textAlign: "center", maxWidth: 400 }}>
          <Image
            src="/profile-placeholder.png"
            alt="Forhad Hasan profile picture"
            width={120}
            height={120}
            style={{ borderRadius: "50%", marginBottom: 16, objectFit: "cover" }}
          />
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>About Me</h3>
          <p style={{ fontSize: "1rem", color: "#444" }}>
          I am a Computer Science and Engineering student at United International University, with a growing passion for Software Engineering and UI/UX Design. I’m currently focused on building user-friendly applications and improving my skills in both frontend and backend development.
          </p>
        </section>
      </main>
    </div>
  );
}
