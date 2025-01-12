"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquareMore } from "lucide-react";
import toast from "react-hot-toast";

export const email = "kontakt@mfcustoms.pl";
export const phone_number = "790 616 496";
export const whatsApp = phone_number.replaceAll(" ", "");

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or a service
    console.log("Form submitted:", formData);

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success toast
    toast.success("Message sent successfully!");

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Kontakt
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Masz pytanie?</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Adres email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
              >
                Wyślij
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Informacje</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-500 mr-4" />
                <a href={`tel:${phone_number}`}>
                  <span>+48 {phone_number}</span>
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquareMore className="w-6 h-6 text-purple-500 mr-4" />
                <a
                  href={`https://wa.me/${whatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>+48 {phone_number}</span>
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-500 mr-4" />
                <a href={`mailto:${email}`}>
                  <span>{email}</span>
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-500 mr-4" />
                <div>
                  <p>34-300, Żywiec</p>
                  <p>Polska</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
