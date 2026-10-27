"use client";

import Image from "next/image";
import DesktopView from "./components/DesktopView";
import MobileView from "./components/MobileView";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <DesktopView cards={[{
    "id": "chase-sapphire-reserve",
    "name": "Chase Sapphire Reserve",
    "issuer": "Chase",
    "annual_fee": 795,
    "benefits": [
      {
        "id": "csr-travel",
        "title": "$300 Annual Travel Credit",
        "monetary_value": 300,
        "reset_interval": "annually",
        "description": "Automatically applied to eligible travel purchases each account anniversary year."
      },
      {
        "id": "csr-dining",
        "title": "$300 Dining Credit",
        "monetary_value": 300,
        "reset_interval": "semi-annually",
        "description": "Up to $150 per half-year via Sapphire Exclusive Table restaurants."
      }
    ]
  }, {
    "id": "amex-platinum",
    "name": "The Platinum Card from American Express",
    "issuer": "American Express",
    "annual_fee": 895,
    "benefits": [
      {
        "id": "amex-plat-uber",
        "title": "$200 Uber Cash",
        "monetary_value": 200,
        "reset_interval": "monthly",
        "description": "Up to $15 per month, plus a $20 bonus in December."
      },
      {
        "id": "amex-plat-resy",
        "title": "$400 Resy Credit",
        "monetary_value": 400,
        "reset_interval": "quarterly",
        "description": "Up to $100 per quarter on eligible Resy restaurant purchases."
      },
      {
        "id": "amex-plat-hotel",
        "title": "$600 Hotel Credit",
        "monetary_value": 600,
        "reset_interval": "semi-annually",
        "description": "Up to $300 semi-annually on prepaid Fine Hotels + Resorts or The Hotel Collection via Amex Travel."
      }
    ]
  }]}/>
  <MobileView cards={[{
    "id": "chase-sapphire-reserve",
    "name": "Chase Sapphire Reserve",
    "issuer": "Chase",
    "annual_fee": 795,
    "benefits": [
      {
        "id": "csr-travel",
        "title": "$300 Annual Travel Credit",
        "monetary_value": 300,
        "reset_interval": "annually",
        "description": "Automatically applied to eligible travel purchases each account anniversary year."
      },
      {
        "id": "csr-dining",
        "title": "$300 Dining Credit",
        "monetary_value": 300,
        "reset_interval": "semi-annually",
        "description": "Up to $150 per half-year via Sapphire Exclusive Table restaurants."
      }
    ]
  }, {
    "id": "amex-platinum",
    "name": "The Platinum Card from American Express",
    "issuer": "American Express",
    "annual_fee": 895,
    "benefits": [
      {
        "id": "amex-plat-uber",
        "title": "$200 Uber Cash",
        "monetary_value": 200,
        "reset_interval": "monthly",
        "description": "Up to $15 per month, plus a $20 bonus in December."
      },
      {
        "id": "amex-plat-resy",
        "title": "$400 Resy Credit",
        "monetary_value": 400,
        "reset_interval": "quarterly",
        "description": "Up to $100 per quarter on eligible Resy restaurant purchases."
      },
      {
        "id": "amex-plat-hotel",
        "title": "$600 Hotel Credit",
        "monetary_value": 600,
        "reset_interval": "semi-annually",
        "description": "Up to $300 semi-annually on prepaid Fine Hotels + Resorts or The Hotel Collection via Amex Travel."
      }
    ]
  }]} />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
