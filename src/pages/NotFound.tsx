import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-mist" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Dumanda İtmiş
          </p>
          
          <h1 className="font-display text-8xl md:text-9xl leading-none mb-6 text-foreground/20">
            404
          </h1>
          
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Səhifə <span className="italic">Tapılmadı</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Axtardığınız səhifə efirə qarışıb.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground border border-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ana Səhifəyə Qayıt</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
