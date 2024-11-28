import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Social Links",
  description: "Follow us on social media platforms",
};

export default function SocialLinks() {
  return (
    <main className=" flex flex-col items-center py-10 my-24">
      {/* Logo and Header */}
      <div className="w-24 h-24 relative mb-6">
        <Image
          src="/logo-white-256x256.png"
          alt="Unicorn space logo"
          fill
          className="rounded-full bg-black"
          priority
        />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-medium text-center relative tracking-tighter mx-auto w-fit underline decoration-wavy decoration-primary/80 decoration-2 underline-offset-4">Unicorn Space</h1>
      <p className="text-muted-foreground mb-8"></p>
      
      {/* Links */}
      <div className="w-full max-w-md space-y-4 px-4">
        <Link href="https://x.com/_unicornspace_" className="block">
          <Button 
            variant="secondary" 
            className="w-full py-6 text-lg bg-[#2D3339] hover:bg-[#3D444A] text-white transition-all duration-300 hover:scale-[1.02]"
          >
           Follow us on X
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/company/unicornspace/" className="block">
          <Button 
            variant="secondary" 
            className="w-full py-6 text-lg bg-[#2D3339] hover:bg-[#3D444A] text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Follow us on LinkedIn
          </Button>
        </Link>
        
        <Link href="https://ui.unicorn-space.com/" target="_blank" className="block">
          <Button 
            variant="secondary" 
            className="w-full py-6 text-lg bg-[#2D3339] hover:bg-[#3D444A] text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Visit our UI Library - UnicornSpaceUI
          </Button>
        </Link>
        
        
      </div>
    </main>
  )
}

