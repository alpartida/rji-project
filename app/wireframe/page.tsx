import Image from "next/image";
import HeroImage from "/public/images/homepage-traffic.png";

export default function Wireframe() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Reframing the article page for local news
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Empower your newsroom to engage readers more effectively with
                our Article as Homepage Toolkit, which reimagines the article
                page to fulfill the traditional role of the homepage.
              </p>
              {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          <Image
            className="max-w-none"
            src={HeroImage}
            width={760}
            height={668}
            alt="Hero Image"
            style={{ margin: "0 auto" }}
          />
          <div></div>
          <div className="pb-12 text-center md:pb-20">
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                The importance of the article page has been increasing for
                years, yet many local publishers lack the resources to optimize
                this entry point for their audience. Larger and national
                publishers have rethought their article pages in response to
                changes in social and search referrals, resulting in more
                engaging experiences for users entering directly via articles
                rather than the homepage. However, these adjustments are often
                limited to their own brands and proprietary CMS.
              </p>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Local publishers face similar user shifts and challenges. For
                example, only 17% of our traffic at The Salt Lake Tribune goes
                through our homepage, with the rest coming on a story-by-story
                basis. Due to constrained resources, many newsrooms our size and
                smaller have not been able to optimize the article page for it
                to be the readers site entry.
              </p>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                It's essential to rethink the user experience on our news sites
                to better weather shifts to search and social. As business
                models rapidly evolve, local publishers need to grow
                newsletters, encourage donations, seek subscriptions, and
                maintain room for sponsorships or advertising. We must create a
                solution that is modular and paired with tests, learnings, and
                design theory to be widely implementable.
              </p>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos-delay={200}
              >
                Through this fellowship, I will create an article page design
                system that helps newsrooms present reporting in rich,
                multimedia formats and provides audiences with the utility once
                held by homepages. This customizable system will encourage
                conversions to deeper forms of support and readership, critical
                to local media companies' business models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
