"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useT } from "@/i18n/LocaleProvider";

import "swiper/css";

type Slide =
  | {
      type: "text";
      title: string;
      body: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      label: string;
    };

const TextCard = ({ title, body }: { title: string; body: string }) => {
  return (
    <article className="flex h-auto min-h-[320px] md:h-85 flex-col justify-between gap-8 rounded-[24px] md:rounded-[40px] bg-[#043D6E] p-6 md:p-10 text-white">
      <h3 className="font-boldonse text-lg md:text-[20px] font-normal leading-8 md:leading-10 text-balance">
        {title}
      </h3>

      <div className="flex flex-col gap-6">
        <p className="font-geist text-base font-normal leading-6 text-white">
          {body}
        </p>

        <div className="relative mt-auto h-0.5 w-full rounded-[32px] bg-[#043D6E] bg-[linear-gradient(0deg,#043D6E,#043D6E),linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))]">
          <span className="absolute left-0 top-0 h-px w-1/4 bg-[#043D6E] bg-[linear-gradient(0deg,#043D6E,#043D6E),linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2))]" />
        </div>
      </div>
    </article>
  );
};

const VideoCard = ({
  src,
  poster,
  label,
  playLabel,
  isVisible,
}: {
  src: string;
  poster: string;
  label: string;
  playLabel: string;
  isVisible: boolean;
}) => {
  const [playing, setPlaying] = useState(false);

  const isPlaying = playing && isVisible;

  return (
    <div className="relative h-auto min-h-[320px] md:h-85.25 overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#D9D9D9]">
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay={isPlaying}
          playsInline
          className="size-full object-cover"
        />
      ) : (
        <>
          <Image
            src={poster}
            alt={label}
            fill
            sizes="(min-width: 768px) 520px, 320px"
            className="object-cover"
          />

          <button
            type="button"
            aria-label={`${playLabel}: ${label}`}
            onClick={() => setPlaying(true)}
            className="absolute inset-0 m-auto grid size-12 cursor-pointer place-items-center rounded-full bg-[#171717]/90 text-white transition-transform hover:scale-110"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 translate-x-px"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

type ClaritySwiperProps = {
  swiperRef: React.MutableRefObject<SwiperType | null>;
};

const ClaritySwiper = ({ swiperRef }: ClaritySwiperProps) => {
  const t = useT();

  const slides: Slide[] = useMemo(
    () => [
      {
        type: "text",
        title: t("clarity.slide1Title"),
        body: t("clarity.slide1Body"),
      },
      {
        type: "video",
        src: "https://lorem.video/hls/corgi/",
        poster: "/landing_page/thumbnail.png",
        label: t("clarity.slide2Label"),
      },
      {
        type: "text",
        title: t("clarity.slide3Title"),
        body: t("clarity.slide3Body"),
      },
      {
        type: "video",
        src: "https://lorem.video/hls/cat/",
        poster: "/landing_page/thumbnail.png",
        label: t("clarity.slide4Label"),
      },
    ],
    [t],
  );

  const playLabel = t("clarity.playVideo");

  return (
    <>
      <Swiper
        key={playLabel}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView="auto"
        spaceBetween={12}
        breakpoints={{
          768: {
            spaceBetween: 16,
          },
        }}
        grabCursor
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        pagination={{
          el: ".feature-slider-pagination",
          clickable: true,
          bulletClass: "fs-dot",
          bulletActiveClass: "fs-dot-active",
        }}
        className="overflow-visible!"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={`${i}-${slide.type === "text" ? slide.title : slide.label}`}
            className={
              slide.type === "video"
                ? "h-auto! w-[84vw]! max-w-[340px]! sm:w-[440px]! sm:max-w-none! md:h-85.25! md:w-149.75!"
                : "h-auto! w-[76vw]! max-w-[300px]! sm:w-[340px]! sm:max-w-none! md:h-85! md:w-95.25!"
            }
          >
            {({ isVisible }) =>
              slide.type === "text" ? (
                <TextCard title={slide.title} body={slide.body} />
              ) : (
                <VideoCard
                  src={slide.src}
                  poster={slide.poster}
                  label={slide.label}
                  playLabel={playLabel}
                  isVisible={isVisible}
                />
              )
            }
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="feature-slider-pagination relative z-10 mt-8 md:mt-20 flex items-center gap-1.5" />
    </>
  );
};

export default ClaritySwiper;
