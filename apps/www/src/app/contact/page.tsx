"use client";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Mic,
  Video,
} from "lucide-react";
import { useState } from "react";
import ContactHero from "./components/ContactHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage(
        "Thank you for your message! I'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        contactType: "general",
      });
    } catch {
      setSubmitMessage(
        "There was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#4e3b7d]">
              Send Me a Message
            </h2>

            {submitMessage && (
              <div
                className={`mb-6 p-4 rounded-lg ${submitMessage.includes("Thank you") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="contactType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  What would you like to discuss?
                </label>
                <select
                  id="contactType"
                  name="contactType"
                  value={formData.contactType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e3b7d] focus:border-[#4e3b7d]"
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="press">Press/Media Inquiry</option>
                  <option value="collaboration">Business Collaboration</option>
                  <option value="investment">Investment Opportunity</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e3b7d] focus:border-[#4e3b7d]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e3b7d] focus:border-[#4e3b7d]"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e3b7d] focus:border-[#4e3b7d]"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e3b7d] focus:border-[#4e3b7d]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#4e3b7d] text-white font-medium rounded-lg hover:bg-[#3a2b5f] transition flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#4e3b7d]">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-8">
                For immediate inquiries or to schedule a meeting, use the
                details below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#4e3b7d] bg-opacity-10 p-3 rounded-lg text-[#e0c9a4] mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600 mb-1">For general inquiries</p>
                  <a
                    href="mailto:hello@collinsjoe.me"
                    className="text-[#4e3b7d] hover:underline"
                  >
                    hello@collinsjoe.me
                  </a>
                </div>
              </div>

              {/* Press */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#4e3b7d] bg-opacity-10 p-3 rounded-lg text-[#e0c9a4] mr-4">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Press & Media</h3>
                  <p className="text-gray-600 mb-1">For interview requests</p>
                  <a
                    href="mailto:press@collinsjoe.me"
                    className="text-[#4e3b7d] hover:underline"
                  >
                    press@collinsjoe.me
                  </a>
                </div>
              </div>

              {/* Speaking */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#4e3b7d] bg-opacity-10 p-3 rounded-lg text-[#e0c9a4] mr-4">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Speaking Engagements
                  </h3>
                  <p className="text-gray-600 mb-1">For event invitations</p>
                  <a
                    href="mailto:speaking@collinsjoe.me"
                    className="text-[#4e3b7d] hover:underline"
                  >
                    speaking@collinsjoe.me
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#4e3b7d] bg-opacity-10 p-3 rounded-lg text-[#e0c9a4] mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600 mb-1">Based in Ghana</p>
                  <p className="text-gray-700">Volta Region, Ghana</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="font-bold text-lg mb-4 text-[#4e3b7d]">
                Connect Socially
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/collinsjoeHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-[#4e3b7d]" />
                </a>
                <a
                  href="https://linkedin.com/in/collinsjoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#4e3b7d]" />
                </a>
                <a
                  href="https://youtube.com/@collinsjoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-[#4e3b7d]" />
                </a>
                <a
                  href="https://github.com/collinsjoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-[#4e3b7d]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 bg-[#4e3b7d] bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-[#4e3b7d] text-center"
          >
            Visit Our Office
          </motion.h2>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-xl font-bold mb-4">
                  Xtottel Ltd Headquarters
                </h3>
                <address className="not-italic text-gray-700 space-y-4">
                  <p className="flex items-start">
                    <MapPin className="flex-shrink-0 w-5 h-5 mr-3 text-[#4e3b7d]" />
                    <span>
                      4R59+MW,
                      <br />
                      Akatsi, Volta Region
                      <br />
                      Ghana
                    </span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-[#4e3b7d]" />
                    <a href="tel:+233555539152" className="hover:underline">
                      +233 555 539 152
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-[#4e3b7d]" />
                    <a
                      href="mailto:info@xtottel.com"
                      className="hover:underline"
                    >
                      info@xtottel.com
                    </a>
                  </p>
                </address>
                <div className="mt-8">
                  <h4 className="font-bold mb-2">Office Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="w-full h-64 lg:h-[450px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d3967.1594029082876!2d0.8172692250517136!3d6.109228927838729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m5!1s0x10213d0040923ec1%3A0x3230e3cfbeceb0b2!2s4R59%2BMW%2C%20Akatsi!3m2!1d6.1091991!2d0.819861!4m4!1s0x10213dcd57c7dd95%3A0x37012fa9584ef539!3m2!1d6.1091280999999995!2d0.8198118!5e0!3m2!1sen!2sgh!4v1750186070174!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* <div className="h-64 lg:h-auto">
                
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map of office location</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
