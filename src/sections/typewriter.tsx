import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/typewriter";

export default function Typewriter() {
  const words = [
    { text: "We, " },
    { text: "Build things for web!" },
    { text: "Let's build something amazing." },
  ];

  return (
    <div className="container px-36 text-center flex items-center justify-center">
      <TypewriterEffectSmooth
        words={words}
        className="text-primary font-bebas"
        cursorClassName="bg-secondary"
      />
    </div>
  );
}
