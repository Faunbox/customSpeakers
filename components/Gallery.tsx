"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { id: 1, src: "/images/1.webp", alt: "Customowy system audio" },
  { id: 11, src: "/images/11.webp", alt: "Kolumny na zamówienie" },
  { id: 12, src: "/images/1.jpg", alt: "Customowy system audio" },
  { id: 2, src: "/images/2.webp", alt: "glosnik diy" },
  { id: 3, src: "/images/3.webp", alt: "kolumny diy" },
  { id: 4, src: "/images/4.webp", alt: "glosnik custom" },
  { id: 5, src: "/images/5.webp", alt: "system audio diy" },
  { id: 6, src: "/images/6.webp", alt: "Kolumny na zamówienie" },
  { id: 7, src: "/images/7.webp", alt: "Customowy system audio" },
  { id: 8, src: "/images/8.webp", alt: "Customowy system audio" },
  { id: 9, src: "/images/9.webp", alt: "Customowy system audio" },
  { id: 10, src: "/images/10.webp", alt: "Customowy system audio" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nasze prace
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item.id)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative w-full max-w-3xl aspect-square"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <Image
              src={
                galleryItems.find((item) => item.id === selectedImage)?.src ||
                ""
              }
              alt={
                galleryItems.find((item) => item.id === selectedImage)?.alt ||
                ""
              }
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
