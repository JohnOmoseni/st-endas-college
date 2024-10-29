import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../CustomButton";

interface FormWrapperProps {
  children: ReactNode;
  buttonLabel: string;
  icon?: any;
  headerText?: string;
  isSubmitting?: boolean;
  containerStyles?: string;
  btnStyles?: string;
  onSubmit?: () => void;
}

function FormWrapper({
  children,
  buttonLabel,
  isSubmitting,
  containerStyles,
  btnStyles,
  icon: Icon,
  headerText,
  onSubmit,
}: FormWrapperProps) {
  return (
    <div
      className={cn(
        "h-full w-full max-w-[600px] overflow-hidden rounded-lg shadow-sm",
        containerStyles,
      )}
    >
      <div
        className={cn(
          "row-flex-start bg-background-200 px-5 py-4",
          Icon && "gap-3.5",
        )}
      >
        {Icon && (
          <span className="icon-div !size-14">
            <Icon className="h-fit w-fit" />
          </span>
        )}
        <p className="pr-3 text-lg font-semibold leading-6">{headerText}</p>
      </div>

      <form
        onSubmit={onSubmit}
        className="flex-column flex-1 gap-8 bg-background px-6 py-4"
      >
        <div className="flex-column w-full gap-4">{children}</div>

        <Button
          type="submit"
          title={isSubmitting ? "Submitting..." : buttonLabel}
          className={cn("!mt-auto !w-full !py-6", btnStyles)}
          disabled={isSubmitting}
          isLoading={isSubmitting}
        />
      </form>
    </div>
  );
}

export default FormWrapper;
