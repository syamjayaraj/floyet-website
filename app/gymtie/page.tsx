"use client";

import { useEffect } from "react";
import { initScrollReveal } from "../utils/scrollReveal";

const GymTie = () => {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return () => cleanup?.();
  }, []);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="reveal py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Gym Management
          </h1>
          <p className="text-xl mb-8">
            The all-in-one mobile solution for modern gym management
          </p>
          <div className="flex gap-4">
            <img
              src="/google-play.png"
              alt="Get it on Google Play"
              className="h-12"
            />
            <img
              src="/app-store.png"
              alt="Coming soon to App Store"
              className="h-12"
            />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="reveal py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4">Member Management</h3>
              <p>
                Efficiently track and manage your gym members with detailed
                profiles and attendance tracking
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4">Payment Logging</h3>
              <p>
                Record and track all membership payments with downloadable
                digital receipts
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4">
                WhatsApp Integration
              </h3>
              <p>
                Automated payment receipts, birthday wishes, and renewal
                reminders via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="reveal py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose GymTie
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="benefit-card">
              <h3 className="text-xl font-semibold mb-4">Save Time</h3>
              <p>
                Automate repetitive tasks and reduce manual work by up to 70%.
                Focus on growing your business instead of paperwork.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="text-xl font-semibold mb-4">
                WhatsApp Integration
              </h3>
              <p>
                Engage members effectively with automated WhatsApp messages for
                payments, renewals, and special occasions.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="text-xl font-semibold mb-4">Enterprise Grade</h3>
              <p>
                100% data security with country-wise server allocation for
                optimal performance. Built with latest technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="reveal py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-3xl font-bold mb-4">₹0/month</p>
              <p className="mb-4">For small gyms</p>
              <ul className="mb-6">
                <li>Up to 200 members</li>
                <li>Basic member management</li>
                <li>Payment logging</li>
                <li>Digital receipts</li>
              </ul>
              <button className="btn-primary">Get Started</button>
            </div>
            {/* Standard Plan */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold">Standard</h3>
              <p className="text-3xl font-bold mb-4">₹349/month</p>
              <p className="mb-4">For growing gyms</p>
              <ul className="mb-6">
                <li>Unlimited members</li>
                <li>Advanced member management</li>
                <li>All Free features</li>
                <li>Automated WhatsApp messages</li>
              </ul>
              <button className="btn-primary">Get Started</button>
            </div>
            {/* Premium Plan */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-3xl font-bold mb-4">₹849/month</p>
              <p className="mb-4">For automated management</p>
              <ul className="mb-6">
                <li>All Standard features</li>
                <li>Fully automated notifications</li>
                <li>Custom reports</li>
                <li>Priority support</li>
              </ul>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="reveal py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="mb-4">Phone: +91 9746742650</p>
          <p>Email: info@floyet.com</p>
        </div>
      </section>
    </main>
  );
};

export default GymTie;
