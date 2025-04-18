"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBriefcase,
  faChevronDown,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

interface Career {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  createdAt: string;
  updatedAt: string;
}

const CareersPage = () => {
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
        setCareers(data.data);
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-primary-600 border-t-transparent shadow-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="text-center bg-white p-10 rounded-3xl shadow-lg max-w-md mx-4">
          <div className="text-red-500 text-6xl mb-6">⚠️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops!</h2>
          <p className="text-gray-600 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-300 inline-flex items-center"
          >
            Try Again
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="careers-section min-h-screen py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20">
          <h4 className="inline-block px-6 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm tracking-wider uppercase mb-6">
            Career Opportunities
          </h4>
          <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Join Our Growing Team
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Be part of our mission to innovate and create impactful solutions.
            We're always looking for exceptional talent to join our diverse
            team.
          </p>
        </div>

        <div className="space-y-8">
          {careers.length === 0 ? (
            <div className="text-center p-16 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                No Open Positions
              </h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                We don't have any open positions right now, but we're always
                looking for great talent.
              </p>
              <button className="mt-8 px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-300 inline-flex items-center">
                Get Notified
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
              </button>
            </div>
          ) : (
            careers.map((career) => (
              <div
                key={career.id}
                className="p-2 group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary-100"
              >
                <div
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() =>
                    setExpandedId(expandedId === career.id ? null : career.id)
                  }
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="space-y-4 flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                          {career.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="flex items-center bg-gray-50 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-primary-50 transition-colors duration-300">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="w-4 h-4 mr-2 text-primary-500"
                            />
                            {career.location}
                          </span>
                          <span className="flex items-center bg-gray-50 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-primary-50 transition-colors duration-300">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="w-4 h-4 mr-2 text-primary-500"
                            />
                            {career.type}
                          </span>
                          <span className="flex items-center bg-gray-50 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-primary-50 transition-colors duration-300">
                            <FontAwesomeIcon
                              icon={faClock}
                              className="w-4 h-4 mr-2 text-primary-500"
                            />
                            Posted{" "}
                            {new Date(career.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <button
                        className="ml-6 w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-all duration-300"
                        style={{
                          transform:
                            expandedId === career.id
                              ? "rotate(180deg)"
                              : "rotate(0)",
                        }}
                        aria-label={
                          expandedId === career.id
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
                </div>

                {expandedId === career.id && (
                  <div className="border-t border-gray-100">
                    <div className="p-8 space-y-10 bg-gray-50 bg-opacity-50">
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-gray-900 flex items-center">
                          About the Role
                          <span className="ml-4 h-px flex-1 bg-gray-200"></span>
                        </h4>
                        <div className="prose prose-lg prose-gray max-w-none">
                          <ReactMarkdown>{career.description}</ReactMarkdown>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-gray-900 flex items-center">
                          Requirements & Qualifications
                          <span className="ml-4 h-px flex-1 bg-gray-200"></span>
                        </h4>
                        <div className="prose prose-lg prose-gray max-w-none">
                          <ReactMarkdown>{career.requirements}</ReactMarkdown>
                        </div>
                      </div>
                      <div className="pt-6 flex justify-end">
                        <button className="group px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 inline-flex items-center">
                          Apply Now
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
