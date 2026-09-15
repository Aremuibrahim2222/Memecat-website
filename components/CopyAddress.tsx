"use client";

import { useState } from "react";
import { CONTRACT_ADDRESS } from "@/lib/constants";

export default function CopyAddress({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`group flex w-full items-center justify-between gap-3 rounded-sm border-2 border-marquee-ink bg-marquee-paper px-4 py-3 text-left text-marquee-ink shadow-ticket transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marquee-gold sm:px-5 ${className}`}
      aria-label="Copy contract address"
    >
      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-marquee-redDeep">
          Contract address
        </span>
        <span className="block truncate font-mono text-xs sm:text-sm">
          {CONTRACT_ADDRESS}
        </span>
      </span>
      <span className="shrink-0 rounded-sm bg-marquee-ink px-3 py-1.5 font-marquee text-xs tracking-wide text-marquee-gold">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
