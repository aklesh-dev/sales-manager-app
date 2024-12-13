import { Card } from "@/components/ui/card";
import Navbar from "./Components/Navbar";
import StatsCard from "./Components/StatsCard";

export default function Home() {
  return (
    <section className="m-5 poppins">
      <Card>
        <Navbar />
      </Card>
      <StatsCard />
    </section>
  );
}
