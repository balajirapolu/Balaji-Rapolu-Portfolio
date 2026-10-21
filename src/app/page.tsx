import ImmersiveHero from '@/components/ImmersiveHero';
import BentoAboutSection from '@/components/BentoAboutSection';
import JourneyTimelineSection from '@/components/JourneyTimelineSection';
import ProjectCaseStudiesSection from '@/components/ProjectCaseStudiesSection';
import CredibilityAchievementsSection from '@/components/CredibilityAchievementsSection';
import ContactSection from '@/components/ContactSection';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="w-full">
        {/* Full Viewport Width Hero */}
        <ImmersiveHero />

        {/* Centered Content Container for Remaining Sections (90vw) */}
        <div className="w-[90vw] max-w-[90vw] mx-auto px-2 sm:px-4 space-y-12 pt-8 pb-16">
          <BentoAboutSection />
          <JourneyTimelineSection />
          <ProjectCaseStudiesSection />
          <CredibilityAchievementsSection />
          <ContactSection />
        </div>
      </div>
    </SmoothScroll>
  );
}
