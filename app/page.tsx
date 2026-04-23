import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LMS } from "@/components/LMS";
import { CorporateTrainings } from "@/components/CorporateTrainings";
import { IndividualTraining } from "@/components/IndividualTraining";
import { CapacityDevelopment } from "@/components/CapacityDevelopment";
import { ManagementDevelopment } from "@/components/ManagementDevelopment";

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
    </main>
  );
}
