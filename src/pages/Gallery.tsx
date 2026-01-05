import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mist from "@/assets/mist.jpg";
import mist1 from "@/assets/mist1.jpg";
import mist2 from "@/assets/mist2.jpg";
import mist3 from "@/assets/mist3.jpg";
import mist4 from "@/assets/mist4.jpg";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  { src: mist, alt: "Buxarlanmış imza quzu yeməyi", category: "Mətbəx" },
  { src: mist1, alt: "Dumanlı köhnə şəhər mənzərəsi ilə şəfəqdə terras yeməyi", category: "Atmosfer" },
  { src: mist2, alt: "Ənənəvi Azərbaycan çay mərasimi", category: "Təcrübə" },
  { src: mist3, alt: "Aşpaz təzə dolma hazırlayır", category: "Mətbəx" },
  { src: mist4, alt: "Çilçıraqları olan tarixi saray yemək salonu", category: "İnteryer" },
  { src: mist, alt: "Tüstülü premium qəlyan", category: "Salon" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative pt-24">
        <div className="absolute inset-0 bg-gradient-mist" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vizual Səyahət
          </motion.p>
          
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Duman <span className="italic">Arasından</span>
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Sirli sığınacağımızda çəkilmiş anlara baxış
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative group overflow-hidden rounded-lg hover-lift">
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Fog Overlay */}
                  <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] transition-all duration-700 group-hover:bg-transparent group-hover:backdrop-blur-0" />
                  
                  {/* Category Label */}
                  <div className="absolute bottom-4 left-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-mono text-xs tracking-wider uppercase px-3 py-1 bg-background/80 backdrop-blur-sm rounded">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              className="max-w-5xl max-h-[85vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent rounded-b-lg">
                <p className="font-mono text-xs tracking-wider uppercase text-gold mb-2">
                  {selectedImage.category}
                </p>
                <p className="text-foreground">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-mist">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Özünüz <span className="italic">Yaşayın</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Şəkillər anları ələ alır, lakin Mist-in əsl mahiyyəti yaşanmalıdır. 
              Masanızı rezerv edin və öz xatirələrinizi yaradın.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-foreground text-background font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground border border-foreground"
            >
              Təcrübənizi Sifariş Edin
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
