"use client";
import React, { useState, useEffect } from "react";

const ContactLinks = () => {
  const [visibleLink, setVisibleLink] = useState<any>(null);
  const [prevLink, setPrevLink] = useState(null);
  const links = [
    { id: "email", href: "mailto:info@floyet.com", text: "info@floyet.com" },
    { id: "phone", href: "tel:+919746742650", text: "+91 9746742650" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevLink(visibleLink); // Set the previous link before updating the visible one
      setVisibleLink((prev: any) => {
        if (prev === null) return links[0].id;
        const currentIndex = links.findIndex((link) => link.id === prev);
        const nextIndex = (currentIndex + 1) % links.length;
        return links[nextIndex].id;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [visibleLink, links]);

  return (
    <section id="three">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={
            visibleLink === link.id
              ? "show"
              : prevLink === link.id
              ? "hide"
              : ""
          }
        >
          {link.text}
        </a>
      ))}
    </section>
  );
};

export default ContactLinks;
