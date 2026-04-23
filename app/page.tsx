import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LMS } from "@/components/LMS";
import { CorporateTrainings } from "@/components/CorporateTrainings";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LMS />
      <CorporateTrainings />
    </main>
  );
}
