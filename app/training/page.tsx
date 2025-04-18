import { Metadata } from "next";
import styles from "./page.module.css";
import {
  FaReact,
  FaMobile,
  FaRobot,
  FaCertificate,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";
import { SiStrapi, SiNextdotjs } from "react-icons/si";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Free Web & Mobile Development Internship Program | Next.js, Strapi, React Native",
  description:
    "Join our free internship program to master web and mobile development. Get hands-on experience with Next.js, Strapi CMS, React Native, and AI tools. Earn a certificate upon completion.",
  keywords:
    "free internship, web development, mobile development, Next.js, Strapi CMS, React Native, Expo, AI tools, training program, certification",
};

export default function TrainingPage() {
  const benefits = [
    {
      icon: <FaCertificate className={styles.benefitIcon} />,
      title: "Industry-Recognized Certificate",
      description:
        "Receive a certificate upon successful completion of the internship program",
    },
    {
      icon: <FaUserGraduate className={styles.benefitIcon} />,
      title: "Hands-on Experience",
      description: "Work on real-world projects under expert guidance",
    },
    {
      icon: <FaBriefcase className={styles.benefitIcon} />,
      title: "Job Ready Skills",
      description:
        "Build a portfolio of projects to showcase to potential employers",
    },
  ];

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
      image: "/assets/training/webapp.jpg",
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
      image: "/assets/training/cms.jpg",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobile className={styles.icon} />,
      description:
        "Build cross-platform mobile apps for iOS and Android using Expo and React Native.",
      features: [
        "Expo Workflow",
        "Native Components",
        "Device APIs",
        "App Publishing",
        "Performance Optimization",
      ],
      image: "/assets/training/mobileapp.jpg",
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
      image: "/assets/training/ai.jpg",
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
          <div className={styles.freeTag}>100% Free Internship Program</div>
          <h1 className={styles.title}>Launch Your Tech Career</h1>
          <p className={styles.subtitle}>
            Join our comprehensive internship program and gain hands-on
            experience in modern web and mobile development
          </p>
          <div className={styles.techStack}>
            <SiNextdotjs className={styles.techIcon} />
            <SiStrapi className={styles.techIcon} />
            <FaReact className={styles.techIcon} />
            <FaRobot className={styles.techIcon} />
          </div>
        </section>

        <section className={styles.benefits}>
          <h2 className={styles.sectionTitle}>Program Benefits</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                {benefit.icon}
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <section className={styles.videoSection}>
          <h2 className={styles.sectionTitle}>Program Overview</h2>
          <div className={styles.videoWrapper}>
            <video
              className={styles.video}
              controls
              poster="/images/program-overview-poster.webp"
            >
              <source src="/videos/program-overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section> */}

        <section className={styles.features}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.courseImage}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={225}
                  className={styles.courseImg}
                />
              </div>
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

        <section className={styles.internshipDetails}>
          <h2 className={styles.sectionTitle}>Internship Structure</h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <h3>Duration</h3>
              <p>3 months intensive program</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Format</h3>
              <p>Hybrid (Online & Office)</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Projects</h3>
              <p>4 major projects</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Mentorship</h3>
              <p>1-on-1 guidance</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Start Your Journey Today</h2>
          <p>
            Join our free internship program and kickstart your career in tech
          </p>
          <a className={styles.ctaButton} href="/#contact">
            Apply Now - It's Free!
          </a>
          <p className={styles.ctaNote}>
            Limited seats available for each batch
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
