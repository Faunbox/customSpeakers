"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageSquareMore, Info, Send, Sparkles, Clock, CheckCircle2 } from "lucide-react"
import toast from "react-hot-toast"
import { z } from "zod"
import { type SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendContactEmail } from "@/app/[locale]/actions/contactForm"
import { useTranslations } from "next-intl"

export const email = "kontakt@mfcustoms.pl"
export const phone_number = "790 616 496"
export const whatsApp = phone_number.replaceAll(" ", "")

export type ResponseData = {
  status?: string
  message?: string
}

const Contact = () => {
  const t = useTranslations("Contact")
  const tt = useTranslations("ContactForm")
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  })
  const [disabled, setDisabled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

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
  })
  type ValidationSchema = z.infer<typeof validationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const formValues = watch()
  // const lng = useLocale() || "pl"

  async function onSend(data: ValidationSchema) {
    try {
      setIsSubmitting(true)
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value))
      })
      const res = await sendContactEmail(formData)
      setResponse({
        status: res.status,
        message: res.message,
      })
    } catch {
      alert("Błąd podczas wysyłania formularza")
      console.log(response)
    } finally {
      toast.success("Wiadomość została wysłana!")
      console.log(response)
      setIsSubmitting(false)
      setDisabled(true)
    }
  }

  const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => await onSend(data)

  return (
    <section id="kontakt" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gray-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-gray-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gray-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/10 border border-gray-900/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-gray-700" />
            <span className="text-sm text-gray-700">{t("badge")}</span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            className="h-1.5 w-32 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 128, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative"
          >
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-gray-300/40 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-400/40 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative p-10 rounded-3xl border-2 border-gray-300 bg-white backdrop-blur-xl shadow-2xl hover:border-gray-400 transition-all duration-500 group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-300/0 via-gray-400/0 to-gray-300/0 group-hover:from-gray-300/30 group-hover:via-gray-400/30 group-hover:to-gray-300/30 transition-all duration-500 -z-10 blur-2xl" />

              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  {t("subtitle")}
                </h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span>{t("a1")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-gray-600" />
                    <span>{t("a2")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Sparkles className="w-4 h-4 text-gray-600" />
                    <span>{t("a3")}</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="relative">
                  <motion.label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formValues.name
                        ? "-top-3 text-xs bg-white px-2 text-gray-700"
                        : "top-4 text-base text-gray-600"
                    }`}
                  >
                    {t("name")}
                  </motion.label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 text-black border-2 border-gray-300 focus:border-gray-600 focus:ring-4 focus:ring-gray-600/20 transition-all duration-300 outline-none"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-600 mt-2 flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.name?.message}
                    </motion.p>
                  )}
                </div>

                <div className="relative">
                  <motion.label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formValues.email
                        ? "-top-3 text-xs bg-white px-2 text-gray-700"
                        : "top-4 text-base text-gray-600"
                    }`}
                  >
                    {t("email")}
                  </motion.label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 text-black border-2 border-gray-300 focus:border-gray-600 focus:ring-4 focus:ring-gray-600/20 transition-all duration-300 outline-none"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-600 mt-2 flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.email?.message}
                    </motion.p>
                  )}
                </div>

                <div className="relative">
                  <motion.label
                    htmlFor="description"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "description" || formValues.description
                        ? "-top-3 text-xs bg-white px-2 text-gray-700"
                        : "top-4 text-base text-gray-600"
                    }`}
                  >
                    {t("message")}
                  </motion.label>
                  <textarea
                    id="description"
                    {...register("description")}
                    onFocus={() => setFocusedField("description")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-4 py-4 pt-6 rounded-xl bg-gray-50 text-black border-2 border-gray-300 focus:border-gray-600 focus:ring-4 focus:ring-gray-600/20 transition-all duration-300 outline-none resize-none"
                  ></textarea>
                  {errors.description && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-600 mt-2 flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.description?.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || disabled}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-black to-gray-700 rounded-xl" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <span className="relative flex items-center justify-center gap-3 text-white font-bold py-5 px-8 text-lg">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        {t("send")}
                        <motion.span
                          className="inline-block"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="relative p-6 rounded-2xl border border-gray-300 bg-white backdrop-blur-sm hover:border-gray-400 transition-all duration-500 group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-300/0 via-gray-400/0 to-gray-300/0 group-hover:from-gray-300/30 group-hover:via-gray-400/30 group-hover:to-gray-300/30 transition-all duration-500 -z-10 blur-xl" />

              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                {t("info")}
              </h3>
              <div className="space-y-4">
                <motion.a
                  href={`tel:${phone_number}`}
                  className="flex items-center gap-3 group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-600/20 flex items-center justify-center group-hover/item:bg-gray-600/30 transition-colors">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover/item:text-black transition-colors">
                    +48 {phone_number}
                  </span>
                </motion.a>

                <motion.a
                  href={`https://wa.me/${whatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-600/20 flex items-center justify-center group-hover/item:bg-gray-600/30 transition-colors">
                    <MessageSquareMore className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover/item:text-black transition-colors">WhatsApp</span>
                </motion.a>

                <motion.a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-600/20 flex items-center justify-center group-hover/item:bg-gray-600/30 transition-colors">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover/item:text-black transition-colors break-all">
                    {email}
                  </span>
                </motion.a>

                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <p>34-330, Trzebinia</p>
                    <p>{t("address")}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-600/20 flex items-center justify-center">
                    <Info className="w-5 h-5 text-gray-700" />
                  </div>
                  <p className="text-sm text-gray-700">{t("nip")}</p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-gray-300 bg-white backdrop-blur-sm hover:border-gray-400 transition-all duration-500 group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-300/0 via-gray-400/0 to-gray-300/0 group-hover:from-gray-300/30 group-hover:via-gray-400/30 group-hover:to-gray-300/30 transition-all duration-500 -z-10 blur-xl" />

              <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                {t("howToTravel")}
              </h4>
              <p className="text-sm text-gray-700 mb-4">{t("travelText")}</p>
              <motion.a
                href="https://maps.app.goo.gl/jh17kgQGS7PsrJ917"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 font-semibold py-2.5 px-5 rounded-lg transition-all duration-500 text-sm"
              >
                <MapPin className="w-4 h-4" />
                {t("travelButton")}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
