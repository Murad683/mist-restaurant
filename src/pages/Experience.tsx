import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import mist1 from "@/assets/mist1.jpg";
import mist2 from "@/assets/mist2.jpg";
import mist4 from "@/assets/mist4.jpg";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-mist" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Təcrübə
          </motion.p>
          
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Əsrlərin
            <br />
            <span className="italic">Qovuşduğu Yer</span>
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Şah Sarayının qədim qapılarından keçin və tarixin nəfəs aldığı, 
            ləzzətlərin zamanı aşdığı yemək sığınacağını kəşf edin.
          </motion.p>
        </div>
      </section>

      {/* Parallax Story Section */}
      <section ref={containerRef} className="section-padding bg-background relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div style={{ y: y1, opacity }}>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Mirasımız
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                Qədim Daşlardan
                <br />
                <span className="italic">Oyulmuş</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Şah Sarayının divarları imperiyaların yüksəlişini və süqutunu 
                müşahidə edib. XV əsrdə tikilmiş bu memarlıq möcüzəsi 
                Şirvanşahlar üçün kral iqamətgahı kimi xidmət edib. Bu gün, 
                eyni köhnə daşlar arasında Mist Restaurant yarım minilliyi 
                əhatə edən qonaqpərvərlik mirasını davam etdirir.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hər tağ bir hekayə danışır. Hər dəhliz ipək tacirlərin, 
                şairlərin və padşahların pıçıltıları ilə əks-səda verir. 
                Biz bu mirası qədim və müasiri birləşdirən bir təcrübə 
                yaradaraq şərəfləndiririk.
              </p>
            </motion.div>

            <motion.div 
              className="relative h-[600px]"
              style={{ y: y2 }}
            >
              <div className="absolute top-0 right-0 w-4/5 h-3/5 overflow-hidden rounded-lg shadow-float">
                <img
                  src={mist4}
                  alt="Zərif çilçıraqları olan tarixi saray interyeri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-2/5 overflow-hidden rounded-lg shadow-float-lg">
                <img
                  src={mist1}
                  alt="Köhnə şəhər mənzərəsi ilə terras yeməyi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-mist">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Orijinallıq",
                text: "Reseptlərimiz nəsillərdən-nəsillərə ötürülən əsrlik Azərbaycan ənənələrini şərəfləyir.",
              },
              {
                title: "İnnovasiya",
                text: "Klassik ləzzətləri yüksəltmək, təəccübləndirən və həzz verən yeməklər yaratmaq üçün müasir texnikaları qəbul edirik.",
              },
              {
                title: "Atmosfer",
                text: "İşıqlandırmadan musiqiyə qədər hər detal immersiv, unudulmaz bir təcrübə yaratmaq üçün orkestrləşdirilib.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <h3 className="font-display text-2xl mb-4">{item.title}</h3>
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrace Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <img
                  src={mist2}
                  alt="Ənənəvi Azərbaycan çay xidməti"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Terras
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                Buludların
                <br />
                <span className="italic">Üstündə Yemək</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Terrasımız Bakının İçərişəhərinin panoramik mənzərələrini təqdim edir, 
                burada qədim minarələr səhər dumanını dəlir və Xəzər dənizi 
                üfüqdə parıldayır. Gün batarkən şəhər qızıl işıqlar parçasına çevrilir.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                İntim yemək və ya bayram olsun, terras təbiətin gözəlliyi ilə 
                insan sənətkarlığının qovuşduğu misilsiz mühit təqdim edir.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-mono text-sm tracking-wider uppercase text-foreground group"
              >
                <span>Terras Masası Rezerv Et</span>
                <span className="w-8 h-px bg-foreground transition-all duration-300 group-hover:w-12" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-mist relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-mist opacity-30" />
        <div className="container-custom relative z-10">
          <motion.blockquote
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-display text-3xl md:text-4xl lg:text-5xl italic leading-relaxed mb-8">
              "Hər yeməkdə efemeri tutmağa çalışırıq—
              bir gözəllik anı, tarixin pıçıltısı, 
              yemək bitdikdən sonra da qalan bir duyğu."
            </p>
            <footer className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
              — Mist Fəlsəfəsi
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </>
  );
};

export default Experience;
