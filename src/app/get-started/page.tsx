import OurServices from "@/components/our-services";
import StyledButton from "@/components/styled-button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";


export default function Component() {
  return (
    <section>

      <div className="flex flex-col items-center mt-44">
        <Link href={"https://cal.com/unicorn-space/15min"}>
          <StyledButton
            className="flex justify-start items-center bg-blue-700 gap-1 btn-primary group  "
            parentClassName="mt-0"
          >
            Book a call{" "}
            <ArrowTopRightIcon className="group-hover:translate-x-px " />
          </StyledButton>
        </Link>
      </div>
      <OurServices />
      <div className="flex flex-col items-center mt-44">
        <Link href={"https://cal.com/unicorn-space/15min"}>
          <StyledButton
            className="flex justify-start items-center bg-blue-700 gap-1 btn-primary group  "
            parentClassName="mt-0"
          >
            Book a call{" "}
            <ArrowTopRightIcon className="group-hover:translate-x-px " />
          </StyledButton>
        </Link>
      </div>
    </section>
  );
}
