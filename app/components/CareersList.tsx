"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faChevronDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../app/careers/page.module.css";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface Career {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  shortCode: string;
  badgeColor: string;
}

const getBadgeColor = (title: string, styles: any): string => {
  const colorMap: { [key: string]: string } = {
    Designer: styles.bgDanger,
    Developer: styles.bgSuccess,
    Manager: styles.bgWarning,
    Engineer: styles.bgInfo,
    Analyst: styles.bgTertiary,
    Architect: styles.bgWarning2,
  };

  const matchedKey = Object.keys(colorMap).find((key) =>
    title.toLowerCase().includes(key.toLowerCase())
  );
  return matchedKey ? colorMap[matchedKey] : styles.bgPrimary;
};

const getShortCode = (title: string): string => {
  return title
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const CareersList = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/careers`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch careers");
        }
        const data = await response.json();

        // Transform the data to include shortCode and badgeColor
        const transformedCareers = data.data.map((career: any) => ({
          ...career,
          shortCode: getShortCode(career.title),
          badgeColor: getBadgeColor(career.title, styles),
        }));

        setCareers(transformedCareers);
      } catch (err) {
        setError("Failed to load career opportunities");
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-indigo-500 border-t-transparent shadow-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="text-center p-10 rounded-3xl shadow-lg max-w-md mx-4" style={{ backgroundColor: "var(--color-background-elevated)", border: "1px solid var(--color-separator)" }}>
          <div className="text-red-500 text-6xl mb-6">⚠️</div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>Oops!</h2>
          <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center"
          >
            Try Again
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="reveal fade-in"
      style={{
        marginTop: "100px",
        backgroundColor: "var(--color-background)"
      }}
      >
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h1 className={styles.sectionTitle}>
                Build Your Career at{" "}
                <span className={styles.highlight}>FLOYET</span>
              </h1>
              <p className={styles.sectionDescription}>
                Join a team of passionate innovators and problem-solvers. We're
                looking for exceptional talent to help shape the future of
                technology and create meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs List Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {careers.length === 0 ? (
                <div className="text-center p-16 rounded-3xl" style={{ backgroundColor: "var(--color-background-elevated)", border: "1px solid var(--color-separator)" }}>
                  <div className="text-5xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
                    No Open Positions
                  </h3>
                  <p className="text-lg max-w-md mx-auto" style={{ color: "var(--color-text-secondary)" }}>
                    We don't have any open positions right now, but we're always
                    looking for great talent.
                  </p>
                  <button className="mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 inline-flex items-center group">
                    Get Notified
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {careers.map((job) => (
                    <div key={job.id} className={styles.jobCard}>
                      <div
                        className={styles.jobHeader}
                        onClick={() =>
                          setExpandedId(expandedId === job.id ? null : job.id)
                        }
                      >
                        <div className={styles.jobDetails}>
                          <span className={styles.jobTitle}>
                            <span
                              className={`${styles.badgeCircle} ${styles.textWhite} ${job.badgeColor}`}
                            >
                              {job.shortCode}
                            </span>
                            {job.title}
                          </span>

                          <span className={styles.jobInfo}>
                            <FontAwesomeIcon
                              icon={faClock}
                              className="w-4 h-4"
                            />
                            {job.type}
                          </span>

                          <span className={styles.jobInfo}>
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="w-4 h-4"
                            />
                            {job.location}
                          </span>

                          <button
                            className={`${styles.expandButton} ${
                              expandedId === job.id ? styles.expanded : ""
                            }`}
                            aria-label={
                              expandedId === job.id
                                ? "Collapse details"
                                : "Expand details"
                            }
                          >
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="w-5 h-5"
                            />
                          </button>
                        </div>
                      </div>

                      {expandedId === job.id && (
                        <div className={styles.jobContent}>
                          <div className="space-y-6">
                            <div>
                              <div className={styles.jobDescription}>
                                <ReactMarkdown>{job.description}</ReactMarkdown>
                              </div>
                            </div>

                            <div className={styles.applySection}>
                              <Link
                                href={`/#contact`}
                                className={styles.applyButton}
                              >
                                Apply Now
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
    </div>
  );
};

export default CareersList;
