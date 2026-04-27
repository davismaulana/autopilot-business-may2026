import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTA_URL } from '../../lib/constants';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  const handleApplyNow = () => {
    window.open(CTA_URL, '_blank');
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-bold text-black text-xs">
            AL
          </div>
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            ALPHA LEADERS
          </span>
        </div>

        <Button
          variant="primary"
          size="sm"
          className="hidden md:flex gap-2"
          onClick={handleApplyNow}
        >
          Apply Now <ArrowRight className="w-4 h-4" />
        </Button>

        <button
          className="md:hidden p-2 text-gold-400 hover:text-gold-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/5"
          >
            <div className="container mx-auto px-4 py-6">
              <Button
                variant="primary"
                size="default"
                className="w-full flex gap-2 justify-center"
                onClick={handleApplyNow}
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navigation };
