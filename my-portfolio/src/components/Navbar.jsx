"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Doto } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const title_font = Doto({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className={`${title_font.className} text-3xl`}>
        <Link href="/">Rakib Shahid</Link>
      </h1>
      <div className="flex space-x-4">
        <Link
          href="/"
          //   className="my-auto font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/projects"
          //   className="my-auto font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Projects
        </Link>
        <a
          href="https://linkedin.com/in/rakib-shahid"
          //   className="my-auto font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          //   className="my-auto font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
          target="_blank"
        >
          Resume
        </a>
        <Link
          href="/blog"
          //   className="my-auto font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Blog
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="hover:cursor-pointer"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => setTheme("system")}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
