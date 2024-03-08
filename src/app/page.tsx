import { FloatingNav } from "./components/ui/floating-navbar";
import { HeroParallax } from "./components/ui/hero-paralax";
import { HoverEffect } from "./components/ui/card-hover-effect";


export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/about",
    },
    {
      name: "Skills",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  const projects = [

    {
      title: "HTML",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      link: "https://stripe.com",
      icon: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
    },
    {
      title: "CSS",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      link: "https://netflix.com",
    },
    {
      title: "JavaScript",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      link: "https://google.com",
    },
    {
      title: "TypeScript",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      link: "https://stripe.com",
      icon: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
    },
    {
      title: "Bootstrap",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      link: "https://netflix.com",
    },
    {
      title: "TailwindCSS",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      link: "https://google.com",
    },
    {
      title: "Node JS",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      link: "https://google.com",
    },
    {
      title: "React JS",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      link: "https://google.com",
    },
    {
      title: "Next JS",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      link: "https://google.com",
    },


  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FloatingNav navItems={navItems} />
      <HeroParallax products={products} />
      <HoverEffect items={projects} />
    </main>
  );
}
