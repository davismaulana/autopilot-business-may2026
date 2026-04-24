import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const criteria = [
    "Business Owner & Founder yang waktunya habis tersita untuk mengurusi hal-hal teknis dan operasional setiap hari.",
    "Pemilik Bisnis yang Ingin Scale-Up, namun sadar bahwa diri mereka sendiri adalah \"penghambat\" (bottleneck) utama pertumbuhan perusahaan.",
    "Pengusaha yang Ingin Bebas (Freedom), yang merindukan waktu berkualitas bersama keluarga tanpa harus terus-menerus memantau grup WhatsApp kantor.",
    "CEO & Direktur yang ingin membangun sistem dan tim mandiri agar kualitas bisnis tetap terjaga meski tanpa pengawasan melekat."
  ];

  return (
    <section className="py-24 bg-zinc-900 overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Siapa yang Paling Cocok Hadir?
            </h2>
            <p className="text-xl text-gray-400">
              Webinar ini khusus dirancang untuk Anda jika:
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <Card className="p-8 border-green-500/20 bg-green-900/10 hover:border-green-500/40 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400" />

              <StaggerContainer className="space-y-6">
                {criteria.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-start text-gray-200 text-base"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.div>
                ))}
              </StaggerContainer>
            </Card>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export { TargetAudience };
