import Banner from "@/components/Banner";
import TopGeneration from "@/components/TopGenaretion";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
<Banner></Banner>
<TopGeneration></TopGeneration>

    </div>

  );
}
