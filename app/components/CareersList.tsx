"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faChevronDown,
  faArrowRight,
  faEnvelope,
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
      <div className={styles.stateScreen}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  const hasOpenRoles = !error && careers.length > 0;

  return (
    <div className={`${styles.careersPage} reveal fade-in`}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroEyebrow}>Careers at Floyet</div>
              <h1 className={styles.sectionTitle}>
                Build products that solve real business problems.
              </h1>
              <p className={styles.sectionDescription}>
                We are a small product team from Kerala building GymTie and other focused platforms for real-world operations. We value ownership, clarity, craft, and practical execution.
              </p>
              <div className={styles.careerHighlights}>
                <span>Product-first team</span>
                <span>Kerala, India</span>
                <span>Remote-friendly roles when available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs List Section */}
        <section className={styles.jobsSection}>
          <div className="container">
            <div className={styles.jobsContainer}>
              <div className={styles.jobsHeader}>
                <div>
                  <span className={styles.jobsEyebrow}>Open roles</span>
                  <h2>{hasOpenRoles ? "Current opportunities" : "No open roles right now"}</h2>
                </div>
                <a href="mailto:info@floyet.com" className={styles.emailButton}>
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  Send profile
                </a>
              </div>

              {hasOpenRoles ? (
                <div className={styles.jobsList}>
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
              ) : (
                <div className={styles.noRolesCard}>
                  <div className={styles.noRolesIcon}>
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <h3>We are not actively hiring for a specific role today.</h3>
                  <p>
                    We still like hearing from thoughtful builders, designers, operators, and growth-minded people who care about practical software.
                    Send your profile and a short note about how you can contribute.
                  </p>
                  {error && <p className={styles.statusNote}>Live openings could not be loaded right now.</p>}
                  <a href="mailto:info@floyet.com" className={styles.applyButton}>
                    Send Profile
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
    </div>
  );
};

export default CareersList;
