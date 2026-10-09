import Image from "next/image";

interface ITestimonialCard {
  flagSrc: string;
  sourceIcon: string;
  reviewBold: string;
  reviewText: string;
  author: string;
}

const testimonials: ITestimonialCard[] = [
  {
    flagSrc: "/icons/south-africa-icon.svg",
    reviewBold: "Amazing app. Getting payments done in seconds",
    reviewText: "and not needing a physical card is pure joy.",
    author: "Hadassah from App store",
    sourceIcon: "/icons/appstore.svg",
  },
  {
    flagSrc: "/icons/uk-icon.svg",
    reviewBold: "The card makes payments effortless",
    reviewText: "I barely carry a wallet anymore",
    author: "Malachi from App store",
    sourceIcon: "/icons/appstore.svg",
  },
  {
    flagSrc: "/icons/nigeria-icon.svg",
    reviewBold: "Used it seamlessly as a foreign exchange student.",
    reviewText: "I’d recommend it ten times over.",
    author: "Tiffany from Trust pilot",
    sourceIcon: "/icons/star.svg",
  },
];

const TestimonialCard = ({
  flagSrc = "",
  sourceIcon = "",
  reviewText = "",
  reviewBold = "",
  author = "",
}: ITestimonialCard) => {
  return (
    <div className="bg-[#F7F7F7] p-6 md:p-10 rounded-[24px] md:rounded-[32px] flex flex-col justify-between gap-10 md:gap-16 w-full min-w-[260px] max-w-[320px] snap-start sm:min-w-[300px] md:w-79 md:max-w-none md:shrink-0 h-auto min-h-[300px] md:h-85.5">
      <div className="flex flex-col gap-6">
        <div>
          <Image
            className="pointer-events-none"
            src={flagSrc}
            alt="south africa icon"
            width={56}
            height={56}
          />
        </div>
        <div>
          <p className="font-geist font-normal text-base leading-6">
            <span className="font-bold">{reviewBold}</span> {reviewText}
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src={sourceIcon}
            className="pointer-events-none"
            alt="apple-icon"
            width={16}
            height={16}
          />
          <p className="font-geist font-normal text-small leading-5.5">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="px-5 py-12 sm:px-8 md:px-30 md:py-20 bg-white overflow-x-clip">
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-2 max-w-198 mx-auto w-full">
          <div>
            <h4 className="text-[#171717] font-boldonse text-[26px] leading-11 sm:text-3xl md:text-[32px] md:leading-16 text-center text-balance">
              HEAR IT FROM OUR USERS
            </h4>
          </div>
          <div>
            <p className="text-[#2F353C] font-geist text-base leading-6 text-center">
              Trusted by over{" "}
              <span className="text-[#043D6E] font-bold">25+ million</span>{" "}
              users worldwide
            </p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 md:overflow-visible md:justify-center md:pb-0 md:flex-wrap lg:flex-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              flagSrc={testimonial.flagSrc}
              sourceIcon={testimonial.sourceIcon}
              reviewBold={testimonial.reviewBold}
              reviewText={testimonial.reviewText}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
