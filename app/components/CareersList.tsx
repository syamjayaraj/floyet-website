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
import type { CareerRecord } from "@/app/lib/careers";
import { initScrollReveal } from "../utils/scrollReveal";

interface Career extends CareerRecord {
  shortCode: string;
  badgeColor: string;
}

interface CareersListProps {
  initialCareers?: CareerRecord[];
  fetchError?: boolean;
}

const getBadgeColor = (title: string, styleModule: typeof styles): string => {
  const colorMap: { [key: string]: string } = {
    Designer: styleModule.bgDanger,
    Developer: styleModule.bgSuccess,
    Manager: styleModule.bgWarning,
    Engineer: styleModule.bgInfo,
    Analyst: styleModule.bgTertiary,
    Architect: styleModule.bgWarning2,
  };

  const matchedKey = Object.keys(colorMap).find((key) =>
    title.toLowerCase().includes(key.toLowerCase()),
  );
  return matchedKey ? colorMap[matchedKey] : styleModule.bgPrimary;
};

const getShortCode = (title: string): string => {
  return title
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const transformCareers = (records: CareerRecord[]): Career[] =>
  records.map((career) => ({
    ...career,
    shortCode: getShortCode(career.title),
    badgeColor: getBadgeColor(career.title, styles),
  }));

const CareersList = ({
  initialCareers = [],
  fetchError: initialFetchError = false,
}: CareersListProps) => {
  const [careers, setCareers] = useState<Career[]>(() =>
    transformCareers(initialCareers),
  );
  const [loading, setLoading] = useState(initialFetchError);
  const [error, setError] = useState(
    initialFetchError ? "Failed to load career opportunities" : "",
  );
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    if (!initialFetchError) {
      return;
    }

    const fetchCareersClient = async () => {
      try {
        const response = await fetch("/api/careers");
        if (!response.ok) {
          throw new Error("Failed to fetch careers");
        }
        const data = await response.json();
        const records = Array.isArray(data?.data) ? data.data : [];
        setCareers(transformCareers(records));
        setError("");
      } catch {
        setError("Failed to load career opportunities");
      } finally {
        setLoading(false);
      }
    };

    fetchCareersClient();
  }, [initialFetchError]);

  useEffect(() => {
    if (loading) return;
    const cleanup = initScrollReveal();
    return () => cleanup?.();
  }, [loading, careers.length]);

  if (loading) {
    return (
      <div className={`${styles.stateScreen} glass-section`}>
        <div className="glass-section__ambient" aria-hidden="true">
          <div
            className="glass-orb glass-orb--purple"
            style={{ width: 400, height: 400, top: "20%", left: "30%" }}
          />
        </div>
        <div className={`${styles.loadingSpinner} glass-section__inner`} />
      </div>
    );
  }

  const hasOpenRoles = !error && careers.length > 0;

  return (
    <div className={`${styles.careersPage} glass-section reveal fade-in`}>
      <div className="glass-section__ambient" aria-hidden="true">
        <div
          className="glass-orb glass-orb--purple"
          style={{ width: 520, height: 520, top: "-5%", left: "-8%" }}
        />
        <div
          className="glass-orb glass-orb--blue"
          style={{ width: 420, height: 420, top: "35%", right: "-12%" }}
        />
        <div
          className="glass-orb glass-orb--white"
          style={{ width: 340, height: 340, bottom: "8%", left: "25%" }}
        />
      </div>
      <section className={styles.heroSection}>
        <div className="container glass-section__inner">
          <div
            className={`${styles.heroInner} liquid-glass liquid-glass--elevated reveal-blur`}
          >
            <div className={styles.heroEyebrow}>Careers at Floyet</div>
            <h1 className={styles.sectionTitle}>
              Help build practical products at Floyet.
            </h1>
            <p className={styles.sectionDescription}>
              We are a product team from Kerala building software across
              fitness, food, temples, personal finance, and retail. We value
              ownership, clarity, and craft in every product we ship.
            </p>
            <div className={styles.careerHighlights}>
              <span className="liquid-glass liquid-glass--strong">
                Product-led team
              </span>
              <span className="liquid-glass liquid-glass--strong">
                Kerala, India
              </span>
              <span className="liquid-glass liquid-glass--strong">
                Remote-friendly when available
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.jobsSection}>
        <div className="container glass-section__inner">
          <div className={styles.jobsContainer}>
            <div
              className={`${styles.jobsHeader} liquid-glass liquid-glass--elevated reveal-scale`}
            >
              <div>
                <span className={styles.jobsEyebrow}>Open roles</span>
                <h2>
                  {hasOpenRoles
                    ? "Current opportunities"
                    : "No open roles right now"}
                </h2>
              </div>
            </div>

            {hasOpenRoles ? (
              <div className={`${styles.jobsList} reveal-stagger`}>
                {careers.map((job) => (
                  <div
                    key={job.id}
                    className={`${styles.jobCard} liquid-glass liquid-glass--interactive reveal-child`}
                  >
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
                          <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
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
                          type="button"
                          className={`${styles.expandButton} liquid-glass ${
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
                              href="/contact"
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
              <div
                className={`${styles.noRolesCard} liquid-glass liquid-glass--elevated liquid-glass--purple reveal-scale`}
              >
                <div
                  className={`${styles.noRolesIcon} liquid-glass liquid-glass--strong`}
                >
                  <i className="bi bi-briefcase"></i>
                </div>
                <h3>We are not actively hiring for a specific role today.</h3>
                <p>
                  We still like hearing from thoughtful builders, designers,
                  operators, and growth-minded people who care about practical
                  software. Send your profile and a short note about how you can
                  contribute.
                </p>
                {error && (
                  <p className={styles.statusNote}>
                    Live openings could not be loaded right now.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersList;
