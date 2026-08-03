// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { useEffect, useState } from "react";

// import { Menu } from "lucide-react";

// import DesktopNav from "./desktop-nav";
// import MobileNav from "./mobile-nav";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <header
//         className={`
//           fixed
//           inset-x-0
//           top-0
//           z-50
//           transition-all
//           duration-500
//         `}
//       >
//         <div className="mx-auto w-full max-w-full ">
//           <div
//             className={`

//               flex
//               h-16
//               items-center
//               justify-between
//               gap-4
//               border
//               px-6
//               lg:px-8
//               transition-all
//               duration-500

//               ${
//                 scrolled
//                   ? `
//                   border-white/20
//                   bg-white/80
//                   backdrop-blur-xl
//                   shadow-[0_10px_40px_rgba(122,166,55,0.12)]
//                 `
//                   : `
//                   border-transparent
//                   bg-white/60
//                   backdrop-blur-md
//                 `
//               }
//             `}
//           >
//             {/* Logo */}

//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/images/logo.png"
//                 alt="PiusVirgin"
//                 width={52}
//                 height={52}
//                 priority
//               />

//               <div className="hidden sm:block">
//                 <p className="font-heading text-sm uppercase tracking-[0.25em]">
//                   <span className="text-pius-red">Pius</span>
//                   <span className="text-pius-blue">Virgin</span>
//                 </p>

//                 <p className="text-xs text-muted-foreground">
//                   Communicated Limited
//                 </p>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}

//             <DesktopNav />

//             {/* Right Side */}

//             <div className="flex items-center gap-3">
//               <Link
//                 href="/who-we-are/contact-us"
//                 className="
//                   hidden
//                   lg:inline-flex
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-primary
//                   px-6
//                   py-3
//                   text-sm
//                   font-medium
//                   text-primary-foreground
//                   transition-all
//                   duration-300
//                   hover:scale-[1.03]
//                 "
//               >
//                 Contact Us
//               </Link>

//               <button
//                 onClick={() => setMobileOpen(true)}
//                 className="
//                   inline-flex
//                   lg:hidden
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-border
//                   cursor-pointer
//                   p-3
//                 "
//               >
//                 <Menu size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
//     </>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // fix hydration

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Render a static header first to match server HTML
  if (!mounted) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-transparent bg-white/60 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="PiusVirgin"
              width={52}
              height={52}
              priority
            />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
        <div
          className={`
            flex h-16 items-center justify-between gap-4 border px-6 lg:px-8 transition-all duration-500
            ${
              scrolled
                ? "border-white/20 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(122,166,55,0.12)]"
                : "border-transparent bg-white/60 backdrop-blur-md"
            }
          `}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="PiusVirgin"
              width={52}
              height={52}
              priority
            />
            <div className="hidden sm:block">
              <p className="font-heading text-sm uppercase tracking-[0.25em]">
                <span className="text-pius-red">Pius</span>
                <span className="text-pius-blue">Virgin</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Communications Limited
              </p>
            </div>
          </Link>

          <DesktopNav />

          <div className="flex items-center gap-3">
            <Link
              href="/who-we-are/contact-us"
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="inline-flex lg:hidden items-center justify-center rounded-full border border-border p-3"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
