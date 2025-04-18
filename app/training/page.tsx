import { Metadata } from "next";
import styles from "./page.module.css";
import { FaReact, FaMobile, FaRobot } from "react-icons/fa";
import { SiStrapi, SiNextdotjs } from "react-icons/si";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title:
    "Web & Mobile Development Training Program | Next.js, Strapi, React Native",
  description:
    "Master modern web and mobile development with our comprehensive training program. Learn Next.js, Strapi CMS, Expo React Native, and cutting-edge AI tools.",
  keywords:
    "web development, mobile development, Next.js, Strapi CMS, React Native, Expo, AI tools, training program",
};

export default function TrainingPage() {
  const courses = [
    {
      title: "Modern Web Development",
      icon: <SiNextdotjs className={styles.icon} />,
      description:
        "Master Next.js 14+ with server components, app router, and modern web development practices.",
      features: [
        "Server Components",
        "App Router",
        "API Routes",
        "Server Actions",
        "Data Fetching",
      ],
    },
    {
      title: "Headless CMS Integration",
      icon: <SiStrapi className={styles.icon} />,
      description:
        "Learn to build scalable content management systems using Strapi CMS.",
      features: [
        "Content Modeling",
        "API Development",
        "Authentication",
        "Media Management",
        "Custom Plugins",
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FaMobile className={styles.icon} />,
      description:
        "Build cross-platform mobile apps using Expo and React Native.",
      features: [
        "Expo Workflow",
        "Native Components",
        "Device APIs",
        "App Publishing",
        "Performance Optimization",
      ],
    },
    {
      title: "AI Integration",
      icon: <FaRobot className={styles.icon} />,
      description: "Integrate cutting-edge AI tools into your applications.",
      features: [
        "OpenAI Integration",
        "AI-Powered Features",
        "Language Models",
        "Computer Vision",
        "AI APIs",
      ],
    },
  ];

  return (
    <>
      <Header isCareersPage={true} />
      <main
        className={styles.main}
        style={{
          marginTop: "100px",
        }}
      >
        <section className={styles.hero}>
          <h1 className={styles.title}>Master Modern Development</h1>
          <p className={styles.subtitle}>
            Comprehensive training in web and mobile development using
            cutting-edge technologies
          </p>
          <div className={styles.techStack}>
            <SiNextdotjs className={styles.techIcon} />
            <SiStrapi className={styles.techIcon} />
            <FaReact className={styles.techIcon} />
            <FaRobot className={styles.techIcon} />
          </div>
        </section>

        <section className={styles.features}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.courseHeader}>
                {course.icon}
                <h2>{course.title}</h2>
              </div>
              <p>{course.description}</p>
              <ul className={styles.featureList}>
                {course.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join our comprehensive training program and become a full-stack
            developer
          </p>
          <button className={styles.ctaButton}>Enroll Now</button>
        </section>
      </main>
      <Footer />
    </>
  );
}
