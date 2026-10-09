import Image from "next/image";
import Link from "next/link";
import CurrentYear from "./CurrentYear";

const footerLinks = {
  products: [
    {
      name: "Cards",
      link: "#",
    },
    {
      name: "Payments",
      link: "#",
    },
    {
      name: "Pricing",
      link: "#",
    },
  ],

  company: [
    {
      name: "About",
      link: "#",
    },
    {
      name: "Careers",
      link: "#",
    },
    {
      name: "Press",
      link: "#",
    },
  ],

  support: [
    {
      name: "Help center",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
    {
      name: "Security",
      link: "#",
    },
  ],

  legal: [
    {
      name: "Privacy",
      link: "#",
    },
    {
      name: "Terms",
      link: "#",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#043D6E] pt-10 pb-10 px-4 sm:px-8 md:pt-20 md:pb-60 lg:px-30">
      <div className="bg-[white] p-6 sm:p-8 md:p-16 rounded-[24px] md:rounded-[40px] flex flex-col gap-8 md:gap-12 max-w-249 mx-auto w-full">
        <div
          id="grid"
          className="grid gap-8 md:gap-10 grid-cols-2 md:grid-cols-4 place-content-center w-full"
        >
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-6">
              <h6 className="text-[#171717] font-geist font-medium text-base leading-6 capitalize">
                {title}
              </h6>
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="text-[#171717] font-geist font-normal text-sm leading-5.5"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div id="socials" className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
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
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <div className="bg-[#F7F7F7] hover:bg-[#F7F7F7]/70 duration-75 ease-in-out transition-colors w-10 h-10 md:w-12 md:h-12 rounded-[100px] flex justify-center items-center">
                <Link href={"#"}>
                  <Image
                    src="/icons/linkedin.svg"
                    alt="linkedin icon"
                    width={16}
                    height={16}
                    className="pointer-events-none"
                  />
                </Link>
              </div>
              <div className="bg-[#F7F7F7] hover:bg-[#F7F7F7]/70 duration-75 ease-in-out transition-colors w-10 h-10 md:w-12 md:h-12 rounded-[100px] flex justify-center items-center">
                <Link href={"#"}>
                  <Image
                    src="/icons/tiktok.svg"
                    alt="tiktok icon"
                    width={16}
                    height={16}
                    className="pointer-events-none"
                  />
                </Link>
              </div>
              <div className="bg-[#F7F7F7] hover:bg-[#F7F7F7]/70 duration-75 ease-in-out transition-colors w-10 h-10 md:w-12 md:h-12 rounded-[100px] flex justify-center items-center">
                <Link href={"#"}>
                  <Image
                    src="/icons/instagram.svg"
                    alt="instagram"
                    width={16}
                    height={16}
                    className="pointer-events-none"
                  />
                </Link>
              </div>
              <div className="bg-[#F7F7F7] hover:bg-[#F7F7F7]/70 duration-75 ease-in-out transition-colors w-10 h-10 md:w-12 md:h-12 rounded-[100px] flex justify-center items-center">
                <Link href={"#"}>
                  <Image
                    src="/icons/x.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            id="horizontal-rule"
            className="w-full max-w-217 border-t border-[#CDD8E2]"
          />
          <div id="law" className="flex flex-col gap-6">
            <div id="hori" className="flex flex-wrap gap-x-4 gap-y-2 md:justify-between">
              <div className="p-1 flex gap-1">
                <Image
                  src="icons/uk-icon.svg"
                  alt="uk icon"
                  width={16}
                  height={16}
                />
                <p className="font-geist font-normal text-[12px] leading-5 tracking-[-2%] text-[#2F353C]">
                  United Kingdom
                </p>
              </div>
              <div className="p-1 flex gap-1">
                <p className="font-geist font-normal text-[12px] leading-5 tracking-[-2%] text-[#2F353C]">
                  Website terms
                </p>
              </div>
              <div className="p-1 flex gap-1">
                <p className="font-geist font-normal text-[12px] leading-5 tracking-[-2%] text-[#2F353C]">
                  Legal agreements
                </p>
              </div>
              <div className="p-1 flex gap-1">
                <p className="font-geist font-normal text-[12px] leading-5 tracking-[-2%] text-[#2F353C]">
                  Complaints
                </p>
              </div>
              <div className="p-1 flex gap-1">
                <p className="font-geist font-normal text-[12px] leading-5 tracking-[-2%] text-[#2F353C]">
                  Privacy
                </p>
              </div>
              <div className="p-1 flex gap-1">
                <p className="font-geist font-normal text-[12px] leading-5 tracking-[-2%] text-[#2F353C]">
                  Data privacy
                </p>
              </div>
              <div className="p-1 flex gap-1">
                <p className="font-geist font-normal text-[12px] leading-5 tracking-[-2%] text-[#2F353C]">
                  Customer vulnerability
                </p>
              </div>
            </div>
            <div id="article" className="flex flex-col gap-8 max-w-217 w-full">
              <div>
                <p className="font-normal text-[12px] leading-6 font-geist text-[#171717]">
                  Govern is a global payments and financial technology company
                  providing multi-currency payment solutions for individuals and
                  businesses worldwide.
                </p>
              </div>
              <div>
                <p className="font-normal text-[12px] leading-6 font-geist text-[#171717]">
                  Govern Ltd is registered in the United Kingdom and owns the
                  Govern brand and associated trademarks, which are licensed to
                  its subsidiaries and partners where applicable.{" "}
                </p>
              </div>
              <div>
                <p className="font-normal text-[12px] leading-6 font-geist text-[#171717]">
                  Govern does not operate as a bank. Banking and financial
                  services are provided by licensed partner institutions in
                  relevant jurisdictions. Funds held with partner banks may be
                  eligible for protection under applicable local deposit
                  insurance schemes, subject to specific terms and conditions.
                </p>
              </div>
              <div>
                <p className="font-normal text-[12px] leading-6 font-geist text-[#171717]">
                  Regulatory coverage, safeguards, and protections vary by
                  country and product. Please review the applicable terms,
                  disclosures, and regulatory information before using our
                  services.
                </p>
              </div>
            </div>
            <div id="copyright">
              <p className="font-geist font-normal text-[12px] leading-5 text-[#808080]">
                © Govern Ltd <CurrentYear />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
