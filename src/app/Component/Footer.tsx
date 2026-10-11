
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto border-t border-green-100 bg-white">
      <div className="mx-auto max-w-[1420px] px-4 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
              🛒
            </span>

            <span>
              <span className="block text-lg font-extrabold text-green-900">
                বাজার দর
              </span>
              <span className="mt-1 block text-sm text-gray-600">
                প্রয়োজনীয় পণ্যের দাম এক নজরে।
              </span>
            </span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-5 text-sm text-gray-600"
          >
            <Link href="/" className="transition hover:text-green-700">
              হোম
            </Link>

            <Link
              href="/#সব-পণ্য"
              className="transition hover:text-green-700"
            >
              সব পণ্য
            </Link>

            <Link
              href="/sign-in"
              className="transition hover:text-green-700"
            >
              সাইন ইন
            </Link>
          </nav>
        </div>

        <div className="my-6 border-t border-gray-100" />

        <div className="flex flex-col gap-3 text-xs leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year ?? "2026"} বাজার দর (BazarDor)। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p className="max-w-xl sm:text-right">
            সকল দাম সম্ভাব্য; বাজার পরিস্থিতি ও স্থান অনুযায়ী পরিবর্তিত হতে পারে।
          </p>
        </div>
      </div>
    </footer>
  );
}
