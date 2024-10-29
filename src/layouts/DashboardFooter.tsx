import { dashboardFooterLinks, socials } from "@/constants/dashboard-index";
import { ArrowRight } from "@/constants/icons";
import { Link } from "react-router-dom";
import { footer_logo } from "@/constants/icons2";

const DashboardFooter = () => {
  return (
    <footer className="footer mt-auto bg-[#131623] text-grey-100">
      <div className="md:row-flex-btwn mt-8 flex flex-col !items-start gap-12 p-6 px-6 pt-6 sm:py-[4%] md:gap-6 md:px-[4%]">
        <div className="flex-column max-sm:w-full w-11/12">
          <Link to="/" className="row-flex group relative block gap-3 md:!justify-start">
            <img src={footer_logo} alt="" className="h-fit w-56 md:w-60 object-contain" />
          </Link>
          <p className="mt-3.5 text-base leading-6 lg:mt-5 md:w-[35ch] lg:w-[40ch]">
            At St. Enda's College Agbarho, we are dedicated to shaping the leaders of tomorrow. Our
            commitment to academic excellence, and moral integrity ensures that every student is not
            only prepared for success but also empowered to make a positive impact on the world.
          </p>
        </div>

        <div className="flex-column flex w-full justify-between gap-12 md:flex-row">
          <div className="w-full">
            {dashboardFooterLinks.map((item) => {
              return (
                <div key={item.name}>
                  <h3 className="text-lg font-semibold uppercase text-background-100">
                    {item.name}
                  </h3>
                  <ul className="flex-column mt-4 gap-4 text-base">
                    {item.dropdown?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`${item.href}`}
                        className="hover:brightness-750 transition-colors hover:text-background-100"
                      >
                        {item.link}
                      </Link>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="flex-column w-full gap-5">
            <h3 className="text-lg uppercase text-background-100">Get in touch</h3>

            <div className="row-flex-start gap-5">
              <p className="row-flex-start gap-1 text-sm brightness-75">
                Socials
                <ArrowRight />
              </p>
              <div className="row-flex-start gap-x-4 gap-y-3">
                {socials?.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    title={social.tag}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition hover:scale-105"
                  >
                    <social.label className="size-5 text-grey transition-colors group-hover:text-foreground-variant" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-light brightness-75">Phone:</p>
              <p className="row-flex-start !flex-wrap gap-x-1.5 text-xs">
                <span> +2348064289024 </span>
              </p>
            </div>
            <div>
              <p className="text-sm font-light brightness-75">Email:</p>
              <a href="mailto:info@stendas.com" className="text-sm !underline">
                info@stendascollege.ng{" "}
              </a>
            </div>

            <div>
              <p className="text-sm font-light brightness-75">Address:</p>
              <p className="text-xs">Along Old Ughelli/Warri Road, Delta State.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 flex border-t-2 border-grey px-3 py-5" />
    </footer>
  );
};

export default DashboardFooter;
