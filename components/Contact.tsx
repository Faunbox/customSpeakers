"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquareMore } from "lucide-react";
import toast from "react-hot-toast";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmail } from "@/app/[locale]/actions/contactForm";
import { useTranslations } from "next-intl";

export const email = "kontakt@mfcustoms.pl";
export const phone_number = "790 616 496";
export const whatsApp = phone_number.replaceAll(" ", "");

export type ResponseData = {
  status?: string;
  message?: string;
};

const Contact = () => {
  const t = useTranslations("Contact");
  const tt = useTranslations("ContactForm");
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { pending } = useFormStatus();

  const validationSchema = z.object({
    name: z.string().min(3, { message: tt("namerequired") }),
    email: z
      .string()
      .min(1, { message: tt("emailrequired") })
      .email({ message: tt("emailisEmail") }),
    description: z
      .string()
      .min(10, { message: tt("descrequired") })
      .max(300, { message: tt("descmax") }),
  });
  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  async function onSend(data: ValidationSchema) {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value));
      });
      const res = await sendContactEmail(formData);
      setResponse({
        status: res.status,
        message: res.message,
      });
    } catch {
      alert("Błąd podczas wysyłania formularza");
      console.log(response);
    } finally {
      toast.success("Wiadomość została wysłana!");
      console.log(response);
      setIsSubmitting(false);
      setDisabled(true);
    }
  }

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => await onSend(data);

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
          {t("title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">{t("subtitle")}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
                {errors.name && (
                  <p className="text-xs italic text-red-600 ">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
                {errors.email && (
                  <p className="text-xs italic text-red-600 ">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="description" className="block mb-2">
                  {t("message")}
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                ></textarea>
                {errors.description && (
                  <p className="text-xs italic text-red-600 ">
                    {errors.description?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || disabled}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
              >
                {isSubmitting ? "Wysyłanie..." : `${t("send")}`}
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">{t("info")}</h3>
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
                  <p>34-330, Trzebinia</p>
                  <p>{t("address")}</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-xl font-semibold mb-4 text-purple-300">
                {t("howToTravel")}
              </h4>
              <div className="space-y-3 text-gray-300">
                <p>{t("travelText")}</p>
              </div>
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://maps.app.goo.gl/jh17kgQGS7PsrJ917"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  {t("travelButton")}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
