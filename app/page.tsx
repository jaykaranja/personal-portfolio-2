import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ProjectsSection } from "@/components/layout/sections/projects";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Littu - Software Development Agency",
  description: "We build custom software solutions that power your business. Web apps, mobile apps, and enterprise solutions.",
  openGraph: {
    type: "website",
    url: "https://littu.dev",
    title: "Littu - Software Development Agency",
    description: "We build custom software solutions that power your business. Web apps, mobile apps, and enterprise solutions.",
    images: [
      {
        url: "https://littu.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Littu - Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://littu.dev",
    title: "Littu - Software Development Agency",
    description: "We build custom software solutions that power your business. Web apps, mobile apps, and enterprise solutions.",
    images: [
      "https://littu.dev/og-image.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
