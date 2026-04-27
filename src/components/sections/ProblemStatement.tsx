import React from 'react';
import { Card } from '../ui/Card';
import { Flame, Plane, Lock, Users } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const ProblemStatement: React.FC = () => {
  const painPoints = [
    {
      icon: Flame,
      title: "Si Pemadam Kebakaran",
      desc: "Waktu Anda habis setiap hari hanya untuk membereskan masalah teknis, staf, dan komplain yang tidak ada habisnya."
    },
    {
      icon: Plane,
      title: "Liburan yang Semu",
      desc: "Fisik Anda berada di tempat wisata bersama keluarga, tapi pikiran dan mata tetap terpaku pada grup WhatsApp kantor."
    },
    {
      icon: Lock,
      title: "Satu-satunya Penentu",
      desc: "Bisnis macet total jika Anda tidak ada di tempat, karena semua keputusan sekecil apa pun harus lewat Anda."
    },
    {
      icon: Users,
      title: "Tim Tanpa Inisiatif",
      desc: "Punya banyak karyawan tapi rasanya tetap kerja sendirian, karena tim hanya bergerak jika diperintah dan diawasi."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white block mb-2">Bisnis Anda Adalah Aset,</span>
              <span className="text-gray-400">Atau Penjara Berkedok Omzet?</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
              Baru mau duduk tenang, sudah ada komplain. Baru mau fokus strategi, staf panggil karena masalah teknis.<br />
              Anda terjebak mengurus hal kecil, sementara impian besar Anda terbengkalai.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.1}>
          <p className="text-center text-xl font-semibold text-gold-400 mb-10">
            Jujur, Apakah Anda Sedang Berada di Titik Ini?
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {painPoints.map((point, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="border-l-4 border-l-red-500 bg-red-500/5 p-6 hover:bg-red-500/10 transition-colors duration-300 h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 text-red-500">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.4}>
          <div className="max-w-4xl mx-auto text-center relative">
              <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full opacity-20" />
              <div className="relative border border-gold-500/30 bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12">
                  <p className="text-xl md:text-2xl font-semibold text-white leading-normal">
                    Jika Anda masih menjawab <span className="text-gold-500">YA</span> untuk poin-poin di atas,
                    artinya Anda bukanlah seorang <span className="text-white font-bold">Business Owner</span>,
                    melainkan <span className="text-red-400 font-bold italic">"Karyawan Termahal"</span> di bisnis Anda sendiri.
                  </p>
              </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export { ProblemStatement };
