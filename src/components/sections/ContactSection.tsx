import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { contactData } from '../../config/siteConfig';
import type { SectionProps, ContactFormData } from '../../types';

// Brand SVG for LinkedIn
const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

// Brand SVG for GitHub
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const ContactSection: React.FC<SectionProps> = ({ id = 'contact', className = '' }) => {
  // Form input state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Validation error state
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isMailtoTriggered, setIsMailtoTriggered] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Field validation helper
  const validateField = (field: keyof ContactFormData, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field upon typing if error existed
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (isMailtoTriggered) {
      setIsMailtoTriggered(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof ContactFormData, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    let hasError = false;

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      // Focus first error field
      const firstInvalidField = Object.keys(newErrors)[0];
      const element = document.getElementById(`contact-${firstInvalidField}`);
      element?.focus();
      return;
    }

    setErrors({});

    // Build graceful mailto fallback link with pre-filled subject and body
    const emailBody = `Hi Aniket,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`;
    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Trigger user's default email client
    window.location.href = mailtoUrl;
    setIsMailtoTriggered(true);
  };

  const handleCopy = async (text: string, type: 'email' | 'phone' | 'draft') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else if (type === 'draft') {
        setCopiedDraft(true);
        setTimeout(() => setCopiedDraft(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-transparent via-slate-50/40 to-slate-100/50 dark:via-slate-950/40 dark:to-slate-950/70 ${className}`}
    >
      <Container>
        <SectionHeader
          badge="Get In Touch"
          title="Contact Me"
          subtitle="Feel free to connect for software engineering opportunities, enterprise Java development roles, or technical project collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Direct Information (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Candidate Identity Snippet */}
            <Card padding="lg" className="reveal-card border-l-4 border-l-blue-600 dark:border-l-blue-500">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {contactData.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                    {contactData.title}
                  </p>
                </div>
                <Badge variant="emerald" className="text-[10px] py-0.5 shrink-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Available
                </Badge>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{contactData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Open to Full-Time & Immediate Joining Roles</span>
                </div>
              </div>
            </Card>

            {/* Email Contact Card */}
            <Card padding="md" className="reveal-card flex items-center justify-between gap-4 group hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 block">
                    Email
                  </span>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(contactData.email, 'email')}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  title="Copy email to clipboard"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${contactData.email}`}
                  className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  title="Open mail client"
                  aria-label="Open default mail client"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>

            {/* Phone Contact Card */}
            <Card padding="md" className="reveal-card flex items-center justify-between gap-4 group hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 block">
                    Phone
                  </span>
                  <a
                    href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400 font-mono truncate block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:outline-none rounded"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(contactData.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:outline-none"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                  className="p-2 text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/50 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:outline-none"
                  title="Call phone number"
                  aria-label="Call phone number"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>

            {/* Social Links Cards: LinkedIn & GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* LinkedIn */}
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xs transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Aniket Salve LinkedIn profile (opens in new tab)"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-slate-400 block">
                    LinkedIn
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate block">
                    Connect on LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0" />
              </a>

              {/* GitHub */}
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-xs transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Aniket Salve GitHub profile (opens in new tab)"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-slate-400 block">
                    GitHub
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white truncate block">
                    Explore Repositories
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form with Frontend Validation & Mailto Fallback (7 Cols) */}
          <div className="lg:col-span-7">
            <Card padding="lg" className="reveal-card border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Fill out the details below to initiate an email conversation.
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                  Direct Mailto Delivery
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider font-mono text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Full Name"
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-400 dark:border-rose-600 bg-rose-50/30 dark:bg-rose-950/20 text-slate-900 dark:text-slate-100 focus:ring-rose-400'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider font-mono text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your.email@example.com"
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-400 dark:border-rose-600 bg-rose-50/30 dark:bg-rose-950/20 text-slate-900 dark:text-slate-100 focus:ring-rose-400'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider font-mono text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Role Opportunity / Project Discussion"
                    aria-required="true"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? 'border-rose-400 dark:border-rose-600 bg-rose-50/30 dark:bg-rose-950/20 text-slate-900 dark:text-slate-100 focus:ring-rose-400'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <p
                      id="contact-subject-error"
                      className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider font-mono text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Hello Aniket, I came across your portfolio and would like to discuss..."
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 resize-y min-h-[110px] ${
                      errors.message
                        ? 'border-rose-400 dark:border-rose-600 bg-rose-50/30 dark:bg-rose-950/20 text-slate-900 dark:text-slate-100 focus:ring-rose-400'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button & Integration Notice */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="shadow-md hover:shadow-lg transition-all"
                  >
                    Send Message
                  </Button>

                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Launches email client with pre-filled details</span>
                  </span>
                </div>

                {/* Honest & Transparent Delivery Feedback */}
                {isMailtoTriggered && (
                  <div className="mt-2 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 text-xs text-slate-700 dark:text-slate-300 flex flex-col gap-2.5 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2 text-blue-800 dark:text-blue-300 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>Email Client Prompted</span>
                    </div>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      Your default mail application has been triggered with your pre-filled message addressed to{' '}
                      <code className="font-mono font-semibold text-blue-700 dark:text-blue-300">
                        {contactData.email}
                      </code>
                      . Please click <strong>Send</strong> in your mail application to finish transmitting your message.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        icon={copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        onClick={() =>
                          handleCopy(
                            `Subject: ${formData.subject}\n\nHi Aniket,\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
                            'draft'
                          )
                        }
                      >
                        {copiedDraft ? 'Message Text Copied!' : 'Copy Form Content'}
                      </Button>
                      <Button
                        href={`mailto:${contactData.email}?subject=${encodeURIComponent(
                          formData.subject
                        )}&body=${encodeURIComponent(
                          `Hi Aniket,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
                        )}`}
                        size="sm"
                        variant="ghost"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        Re-open Mail Client
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
