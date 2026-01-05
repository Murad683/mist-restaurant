import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Salam, rezervasiya etmək istəyirəm.");
    window.open(`https://wa.me/994552057813?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative pt-24">
        <div className="absolute inset-0 bg-gradient-mist" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rezervasiya
          </motion.p>
          
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Bizimlə <span className="italic">Əlaqə</span>
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Masanızı rezerv edin və sirli təcrübəni yaşayın
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-8">
                Bizi <span className="italic">Ziyarət Edin</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Ünvan</h3>
                    <p className="text-muted-foreground">
                      Shah Palace<br />
                      Bakı, Azərbaycan 1005
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Telefon</h3>
                    <a
                      href="tel:+994552057813"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +994 55 205 78 13
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@mistrestaurant.az"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@mistrestaurant.az
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">İş Saatları</h3>
                    <p className="text-muted-foreground">
                      Bazar ertəsi — Cümə axşamı: 10:00 — 23:00<br />
                      Cümə — Bazar: 10:00 — 01:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden glass-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.9985101217953!2d49.83521830657738!3d40.368368023901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7d1c5d081b%3A0x9ba1cc2471b9091e!2sMist%20Restaurant!5e0!3m2!1saz!2saz!4v1767609080384!5m2!1saz!2saz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mist Restaurant Ünvanı"
                />
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-8">
                <span className="italic">Rezervasiya</span> Edin
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      Adınız
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-border py-3 px-0 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      Əlaqə Nömrəsi
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-border py-3 px-0 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                      placeholder="+994 55 000 00 00"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      Qonaq Sayı
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-border py-3 px-0 text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Seçin</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                        <option key={num} value={num} className="bg-background">
                          {num} {num === 1 ? "Qonaq" : "Qonaq"}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      Tarix
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-border py-3 px-0 text-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Saat
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-border py-3 px-0 text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Seçin</option>
                    {["12:00", "13:00", "14:00", "15:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((time) => (
                      <option key={time} value={time} className="bg-background">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Qeydlər
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-border py-3 px-0 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Xüsusi tələblər və ya münasibət..."
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleWhatsAppReservation}
                  className="w-full md:w-auto px-12 py-4 bg-foreground text-background font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground border border-foreground flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Rezervasiya et (WhatsApp)</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-mist">
        <div className="container-custom text-center">
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            8 nəfərdən çox qruplar və ya xüsusi tədbirlər üçün bizimlə birbaşa əlaqə saxlayın. 
            Əvvəlcədən bildirişlə xüsusi qida tələblərini nəzərə alırıq.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Contact;
