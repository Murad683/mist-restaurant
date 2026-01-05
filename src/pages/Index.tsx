import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Mist Restaurant atmosferi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
        </div>

        {/* Animated Mist Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-mist-light/30 blur-3xl"
              style={{
                width: `${300 + i * 150}px`,
                height: `${300 + i * 150}px`,
                left: `${i * 25}%`,
                top: `${30 + (i % 2) * 20}%`,
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -30, 20, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Shah Palace, Bakı
            </p>
          </motion.div>

          <motion.h1
            className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight text-foreground mb-8"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            MIST.
          </motion.h1>

          <motion.p
            className="font-mono text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Tarixin və müasirliyin qovuşduğu məkan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-foreground text-background font-mono text-sm tracking-wider uppercase transition-all duration-500 hover:bg-transparent hover:text-foreground border border-foreground"
            >
              Masa Rezerv Et
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
                2018-ci ildən
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Sirli 
                <br />
                <span className="italic">Sığınacaq</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Şah Sarayının qədim divarları arasında yerləşən Mist Restaurant & Terrace, 
                əsrlərin Azərbaycan irsini müasir kulinariya sənəti ilə birləşdirən 
                fövqəladə bir yemək təcrübəsi təqdim edir. Hər yemək bir hekayə, 
                hər an bir xatirədir.
              </p>
              <Link
                to="/experience"
                className="inline-flex items-center gap-3 font-mono text-sm tracking-wider uppercase text-foreground group"
              >
                <span>Hekayəmizi Kəşf Et</span>
                <span className="w-8 h-px bg-foreground transition-all duration-300 group-hover:w-12" />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="font-mono text-sm tracking-wide">
                    Shah Palace, İçərişəhər
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border/50">
                    <span className="text-muted-foreground">Bazar ertəsi — Cümə axşamı</span>
                    <span className="font-mono text-sm">10:00 — 23:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border/50">
                    <span className="text-muted-foreground">Cümə — Bazar</span>
                    <span className="font-mono text-sm">10:00 — 01:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Terras</span>
                    <span className="font-mono text-sm">Mövsümi</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-mist">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Təcrübə
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Mükəmməlliyin <span className="italic">Üç Sütunu</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Miras Mətbəxi",
                description:
                  "Nəsillərdən-nəsillərə ötürülən ənənəvi Azərbaycan reseptləri müasir sənətkarlıqla təqdim olunur.",
              },
              {
                number: "02",
                title: "Tarixi Atmosfer",
                description:
                  "Əsrlər boyu keçmişin hekayələrini fısıldayan qədim saray divarları arasında yeməklərin dadına baxın.",
              },
              {
                number: "03",
                title: "Terras Mənzərəsi",
                description:
                  "Dumanın səhər işığı ilə qovuşduğu İçərişəhərin panoramik mənzərələri.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.number}
                className="glass-card p-8 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <span className="font-mono text-4xl text-gold/30 mb-4 block">
                  {feature.number}
                </span>
                <h3 className="font-display text-2xl mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-mist opacity-50" />
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
              Səyahətinizə <span className="italic">Başlayın</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Masanızı rezerv edin və kulinariya mükəmməlliyi ilə 
              zamansız zərifliyin qovuşduğu dünyaya qədəm qoyun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="px-10 py-4 border border-foreground text-foreground font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                Menyuya Bax
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 bg-foreground text-background font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground border border-foreground"
              >
                Rezerv Et
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
