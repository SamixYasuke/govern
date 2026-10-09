 "use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Selector, { IOption } from "./Selector";

const availableLanguages: IOption[] = [
  {
    label: "English",
    value: "eng",
  },
  {
    label: "Yoruba",
    value: "yo",
  },
  {
    label: "Igbo",
    value: "ig",
  },
  {
    label: "Hausa",
    value: "ha",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center w-full py-4 px-5 sm:px-8 md:py-6 lg:px-30">
      <div className="flex items-center gap-8 lg:gap-20">
        <div>
          <Link
            href={"/"}
            className="font-geist font-normal text-xl leading-7 tracking-[-0.02em] text-[#25292F]"
          >
            <span className="font-boldonse font-normal text-base leading-7 tracking-[-0.02em]">
              GO
            </span>
            vern
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          <li>
            <Link className="text-[#2F353C] hover:text-[#2F353C]/70" href={"#"}>
              Product
            </Link>
          </li>
          <li>
            <Link className="text-[#2F353C] hover:text-[#2F353C]/70" href={"#"}>
              Cards
            </Link>
          </li>
          <li>
            <Link className="text-[#2F353C] hover:text-[#2F353C]/70" href={"#"}>
              Pricing
            </Link>
          </li>
          <li>
            <Link className="text-[#2F353C] hover:text-[#2F353C]/70" href={"#"}>
              Company
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex gap-2 sm:gap-4 items-center">
        <li className="hidden xs:block sm:block">
          <Selector
            btnName={"EN"}
            dropdownSubtitle="Select language"
            dropdownOptions={availableLanguages}
          />
        </li>
        <li className="hidden sm:block">
          <button className="bg-[#F7F7F7] hover:bg-[#F7F7F7]/60 transition-colors rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
            <Image
              src={"/icons/qr.svg"}
              alt={"qr code icon"}
              width={14.3}
              height={14.3}
            />
          </button>
        </li>
        <li className="hidden sm:block">
          <button className="text-white py-2.5 px-5 md:py-3 md:px-8 border-2 border-white rounded-[32px] font-geist font-medium text-sm md:text-base leading-6 tracking-[-0.02em] bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer whitespace-nowrap">
            Get started
          </button>
        </li>
        <li className="md:hidden">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="bg-[#F7F7F7] rounded-full w-11 h-11 flex justify-center items-center cursor-pointer"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </li>
      </ul>
      {menuOpen && (
        <div className="absolute inset-x-4 top-full z-50 md:hidden">
          <nav className="bg-white rounded-3xl border border-[#CDD8E2] shadow-xl p-6 flex flex-col gap-5">
            <ul className="flex flex-col gap-4">
              {["Product", "Cards", "Pricing", "Company"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-[#2F353C] font-geist font-medium text-base block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#CDD8E2] pt-4 flex flex-col gap-3">
              <button className="text-white py-3 px-8 rounded-[32px] font-geist font-medium text-base bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer w-full">
                Get started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
