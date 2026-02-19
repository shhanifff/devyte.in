"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset form
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl"
    >
      {submitted ? (
        <div className="text-center py-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl mb-4"
          >
            ✓
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
          <p className="text-white/60">
            We'll get back to you as soon as possible.
          </p>
          <Button
            variant="link"
            className="mt-8 text-blue-400"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm text-white/60">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formState.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Project Inquiry"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-white/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 text-lg mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
