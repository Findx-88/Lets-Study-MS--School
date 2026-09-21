import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { BoardStrip } from "@/components/home/BoardStrip";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { SubjectGrid } from "@/components/home/SubjectGrid";
import { TeamPreview } from "@/components/home/TeamPreview";
import { FeeSnapshot } from "@/components/home/FeeSnapshot";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Split hero with student photography, badge pills, and floating stat cards) */}
      <HeroSection />

      {/* 2. Horizontal Stats Bar (Animated count-up style stats) */}
      <StatsBar />

      {/* 3. Board Logos Strip (CBSE / ICSE / WB Board alignment) */}
      <BoardStrip />

      {/* 4. "Your Child's Journey" Interactive Preview (Std 5→12 4-stage circular stepper) */}
      <JourneyPreview />

      {/* 5. Subjects Overview (Physics, Chemistry, Biology, Mathematics, English) */}
      <SubjectGrid />

      {/* 6. Teaching Team Preview (4 levels + Real Teachers: Pritha, Rudra, Deblina, Arpan, Moulisha, Annesha, Rahul) */}
      <TeamPreview />

      {/* 7. Fee Snapshot + Batch Size Explainer (Exact real fees) */}
      <FeeSnapshot />

      {/* 8. Parent & Student Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
