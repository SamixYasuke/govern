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
  return (
    <header className="flex justify-between w-full py-6 px-30">
      <div className="flex items-center gap-20">
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
        <ul className="flex items-center gap-10">
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
      <ul className="flex gap-4 items-center">
        <li>
          <Selector
            btnName={"EN"}
            dropdownSubtitle="Select language"
            dropdownOptions={availableLanguages}
          />
        </li>
        <li>
          <button className="bg-[#F7F7F7] hover:bg-[#F7F7F7]/60 transition-colors rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
            <Image
              src={"/icons/qr.svg"}
              alt={"qr code icon"}
              width={14.3}
              height={14.3}
            />
          </button>
        </li>
        <li>
          <button className="text-white py-3 px-8 border-2 border-white rounded-[32px] font-geist font-medium text-base leading-6 tracking-[-0.02em] bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer">
            Get started
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
