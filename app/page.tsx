import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LMS } from "@/components/LMS";
import { CorporateTrainings } from "@/components/CorporateTrainings";
import { IndividualTraining } from "@/components/IndividualTraining";
import { CapacityDevelopment } from "@/components/CapacityDevelopment";
import { ManagementDevelopment } from "@/components/ManagementDevelopment";
import { TransformationHub } from "@/components/TransformationHub";
import { TrainingConsultant } from "@/components/TrainingConsultant";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LMS />
      <CorporateTrainings />
      <IndividualTraining />
      <CapacityDevelopment />
      <ManagementDevelopment />
      <TransformationHub />
      <TrainingConsultant />
      <ConsultationCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
