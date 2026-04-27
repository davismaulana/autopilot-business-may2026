import React from 'react';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { CTA_URL } from '../../lib/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black pt-16 pb-4 md:pt-0 md:pb-0 md:min-h-screen md:flex md:items-center md:justify-center overflow-hidden">

      <div className="relative w-full max-w-[1920px] mx-auto">
        <FadeIn duration={1.2}>
          <picture>
            <source srcSet="/lp-poster.webp" type="image/webp" />
            <img
              src="/lp-poster.jpg"
              alt="Business Without You — Coach Ferly F. Raya · Alpha Leaders Community · 21 May 2026"
              className="w-full h-auto object-contain md:object-cover"
            />
          </picture>
        </FadeIn>

        <div className="absolute inset-x-0 bottom-[5%] md:bottom-[15%] flex justify-center z-10 opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
           <Button
             className="w-[200px] h-[50px] md:w-[300px] md:h-[60px] cursor-pointer"
             onClick={() => window.open(CTA_URL, '_blank')}
           >
             Apply Now
           </Button>
        </div>
      </div>

    </section>
  );
};

export { Hero };
