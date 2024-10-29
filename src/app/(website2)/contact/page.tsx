import ContactUsForm from "@/components/forms/website-2/ContactUsForm";
import { contact } from "@/constants/icons2";
import { Square } from "@/constants/icons2";

function Contact() {
  return (
    <div className="relative max-md:min-h-dvh min-h-[65vh] isolate grid md:grid-cols-2 md:gap-16 lg:justify-between">
      <div className="w-full h-max max-md:order-2 relative px-6 pt-8 sm:pb-4 md:px-[8%] sm:pt-[3em]">
        <ContactUsForm />
      </div>

      <div className="size-full max-md:h-[330px] md:max-h-[600px] relative max-md:order-1">
        <div className="absolute top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 w-4/5 h-[80%] md:h-3/5 max-h-[450px] z-10 -translate-y-1/2 sm:rounded-sm">
          <img src={contact} alt="" className="size-full object-cover object-center " />
          <Square className="absolute -left-7 -top-4 -z-10 h-fit w-fit object-contain max-md:w-16 max-md:top-auto max-md:-bottom-6" />
        </div>

        <div className="absolute right-0 top-0 w-full h-[40%] md:h-full md:w-1/2 z-0 bg-[#3C76F1]" />
      </div>
    </div>
  );
}

export default Contact;
