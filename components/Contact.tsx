"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquareMore } from "lucide-react";
import toast from "react-hot-toast";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmail } from "@/app/actions/contactForm";
import { useGtagSendEvent } from "@/app/hooks/useGtagSendEvent";

export const email = "kontakt@mfcustoms.pl";
export const phone_number = "790 616 496";
export const whatsApp = phone_number.replaceAll(" ", "");

export type ResponseData = {
  status?: string;
  message?: string;
};

const validationSchema = z.object({
  name: z.string().min(3, { message: "Imie jest wymagane" }),
  email: z
    .string()
    .min(1, { message: "Adres email jest wymagany" })
    .email({ message: "Adres email musi być poprawny" }),
  description: z
    .string()
    .min(10, { message: "Wiadomość musi posiadać minimum 10 znaków" })
    .max(300, { message: "Wiadomość musi posiadać mniej niż 300 znaków" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

const Contact = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { pending } = useFormStatus();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const gtagSendEvent = useGtagSendEvent();

  async function onSend(data: ValidationSchema) {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value));
      });
      const res = await sendContactEmail(formData);

      setResponse(res.response);
    } catch {
      alert("Błąd podczas wysyłania formularza");
    } finally {
      gtagSendEvent(process.env.WEBSITE_NAME as string);
      toast.success("Wiadomość została wysłana!");
      setIsSubmitting(false);
      setDisabled(true);
      console.log(response);
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  required
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
                  Adres email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  required
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
                  Wiadomość
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  required
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
                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
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
