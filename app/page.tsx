import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LMS } from "@/components/LMS";
import { CorporateTrainings } from "@/components/CorporateTrainings";
import { IndividualTraining } from "@/components/IndividualTraining";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LMS />
      <CorporateTrainings />
      <IndividualTraining />
    </main>
  );
}
