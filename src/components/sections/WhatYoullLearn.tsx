import React from 'react';
import { Card } from '../ui/Card';
import { Users, FileText, BarChart2, BookOpen } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const WhatYoullLearn: React.FC = () => {
  const modules = [
    {
      number: "1",
      icon: Users,
      title: "Self-Managing Team",
      desc: "Rahasia membangun tim mandiri yang memiliki ownership tinggi, sehingga mereka bisa bekerja tanpa harus Anda instruksi terus-menerus."
    },
    {
      number: "2",
      icon: FileText,
      title: "High-Impact SOP",
      desc: "Cara praktis merancang sistem operasional yang otomatis menjaga standar kualitas produk dan layanan, meski Anda tidak di tempat."
    },
    {
      number: "3",
      icon: BarChart2,
      title: "Remote Dashboard System",
      desc: "Teknik memantau kesehatan dan performa seluruh departemen melalui angka (dashboard), agar Anda bisa mengontrol bisnis dari mana saja."
    },
    {
      number: "4",
      icon: BookOpen,
      title: "Case Study: Bisnis Autopilot",
      desc: "Pengalaman riil membangun bisnis yang autopilot dari pebisnis besar — bukan teori, tapi implementasi nyata."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-400">
              Dalam sesi ini Anda akan memahami:
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mb-16">
          {modules.map((item, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Card className="p-6 border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-gold-500/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="text-3xl font-bold text-zinc-700 leading-none mb-2 group-hover:text-gold-500/30 transition-colors select-none">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-1">{item.title}</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-zinc-400 italic leading-relaxed">
              "Rekrutmen sistem bukan soal keberuntungan.{' '}
              <span className="text-white font-medium">Tapi soal desain yang tepat agar bisnis berjalan tanpa Anda.</span>"
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/20 via-gold-400/10 to-gold-600/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />

               <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 md:p-16 shadow-2xl">

                 <div className="flex justify-center mb-10">
                   <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                 </div>

                  <h3 className="text-center text-4xl md:text-5xl font-serif text-white mb-16 tracking-tight">
                    Main <span className="text-gold-500 italic">Outcome</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-10 bottom-10 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    <div className="hidden md:block absolute top-10 bottom-10 right-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="text-center group/item hover:-translate-y-1 transition-transform duration-500">
                      <span className="text-6xl md:text-7xl font-serif text-white/5 font-bold block mb-4 group-hover/item:text-gold-500/10 transition-colors">01</span>
                      <h4 className="text-xl text-gold-200 font-medium mb-2">Bisnis Autopilot</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        Tim bisa <span className="text-white">bekerja mandiri tanpa instruksi</span> terus-menerus dari Anda.
                      </p>
                    </div>

                    <div className="text-center group/item hover:-translate-y-1 transition-transform duration-500 delay-100">
                      <span className="text-6xl md:text-7xl font-serif text-white/5 font-bold block mb-4 group-hover/item:text-gold-500/10 transition-colors">02</span>
                      <h4 className="text-xl text-gold-200 font-medium mb-2">Standar Terjaga</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        Kualitas produk & layanan <span className="text-white">terjaga otomatis meski Anda tidak di tempat</span>.
                      </p>
                    </div>

                    <div className="text-center group/item hover:-translate-y-1 transition-transform duration-500 delay-200">
                      <span className="text-6xl md:text-7xl font-serif text-white/5 font-bold block mb-4 group-hover/item:text-gold-500/10 transition-colors">03</span>
                      <h4 className="text-xl text-gold-200 font-medium mb-2">Kontrol dari Mana Saja</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        Pantau seluruh bisnis via dashboard — <span className="text-white">tanpa harus hadir secara fisik</span>.
                      </p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export { WhatYoullLearn };
