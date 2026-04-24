import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { CTA_URL } from '../../lib/constants';

const ClosingPhilosophy: React.FC = () => {
  const desires = [
    "Bisnis yang bisa berjalan mandiri tanpa Anda harus ada di tempat setiap saat",
    "Sistem operasional yang menjaga kualitas secara otomatis",
    "Tim yang bebas dari drama internal dan bisa mencapai target tanpa diawasi"
  ];

  return (
    <section className="py-24 bg-black md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center">

        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-8">
              Bisnis hebat tidak runtuh karena persaingan atau modal yang habis.
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Bisnis hebat runtuh karena owner-nya kelelahan menjadi{' '}
              <span className="text-gold-500">'jantung' bagi organisasi yang tidak memiliki sistem untuk bernapas sendiri.</span>
            </h3>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-xl text-gray-400 mb-8">Jika Anda ingin:</p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {desires.map((item, idx) => (
             <motion.div key={idx} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
               <Card className="p-8 border-zinc-800 bg-zinc-900/30 flex flex-col items-center justify-center hover:border-gold-500/30 transition-colors h-full">
                 <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center mb-4">
                   <Check className="w-5 h-5" />
                 </div>
                 <p className="text-gray-200 font-medium">{item}</p>
               </Card>
             </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.6}>
          <Button
            variant="primary"
            size="lg"
            className="px-10 py-6 text-lg"
            onClick={() => window.open(CTA_URL, '_blank')}
          >
            Apply for Community Invitation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </FadeIn>

      </div>
    </section>
  );
};

export { ClosingPhilosophy };
