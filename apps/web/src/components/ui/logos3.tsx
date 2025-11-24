"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from 'next/image'

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  { id: "logo-1", description: "Logo 1", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg", className: "h-7 w-auto" },
  { id: "logo-2", description: "Logo 2", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg", className: "h-7 w-auto" },
  { id: "logo-3", description: "Logo 3", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg", className: "h-7 w-auto" },
  { id: "logo-4", description: "Logo 4", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg", className: "h-7 w-auto" },
  { id: "logo-5", description: "Logo 5", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg", className: "h-7 w-auto" },
  { id: "logo-6", description: "Logo 6", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg", className: "h-7 w-auto" },
];

export default function Logos3({ heading = "Ils nous font confiance", logos = defaultLogos, className }: Logos3Props) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl md:text-4xl font-bold text-pretty">{heading}</h2>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, stopOnInteraction: true })] as any}>
            <CarouselContent className="-ml-8">
              {logos.concat(logos).map((logo) => (
                <CarouselItem key={logo.id + Math.random()} className="basis-1/3 md:basis-1/6 pl-8">
                  <div className="flex items-center justify-center">
                    <Image 
                      src={logo.image} 
                      alt={logo.description} 
                      width={160}
                      height={28}
                      className={cn("opacity-70 hover:opacity-100 transition", logo.className)} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
