import { ShootingStars } from "@/components/loading/ShootingStars";
import { StarsBackground } from "@/components/loading/StarsBackground";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/dashboard/profile");

  return (
    <div>
      <div className="h-screen rounded-md bg-transparent flex flex-col items-center justify-center relative w-full">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-indigo-500 flex items-center gap-2 md:gap-8">
          <span>Doing big calculations</span>
        </h2>
        <ShootingStars starColor="#5850EC" trailColor="#5850EC" />
        <StarsBackground />
      </div>
    </div>
  );
}
