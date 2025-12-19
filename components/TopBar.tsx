"use client";

import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div
      className={`${
        isHomePage ? "absolute" : "sticky"
      } top-0 left-0 right-0 z-50 bg-primary-navy text-white text-sm py-2 border-b border-gray-800`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="uppercase tracking-wide font-semibold">
            Investing Without Complexity
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+2348141416640"
              className="flex items-center gap-2 hover:text-primary-gold transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>08141416640</span>
            </a>
            <a
              href="mailto:hello@tuslik.com"
              className="flex items-center gap-2 hover:text-primary-gold transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>hello@tuslik.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

