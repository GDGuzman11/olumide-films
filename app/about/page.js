import AboutIntro from "@/components/sections/AboutIntro";
import Approach from "@/components/sections/Approach";
import PersonalStatement from "@/components/sections/PersonalStatement";

export const metadata = {
  title: "About",
  description:
    "Meet Olumide — a filmmaker and visual storyteller based in Calgary, Alberta, crafting cinematic films with intention, emotion, and a story-first approach.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Approach />
      <PersonalStatement />
    </>
  );
}
