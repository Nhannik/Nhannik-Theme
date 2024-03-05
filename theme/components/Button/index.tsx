
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconOnly?: boolean;
  asChild?:boolean;
  size?: "sm" | 'md' | "lg";
  className?: string;
  variant?: "primary" | 'link' | "tertiary" | "secondary" | "ghost" | "danger" | "danger-ghost" | "danger-tertiary"
}

const Button = forwardRef<HTMLButtonElement, Props>(({ asChild=false,iconOnly, size, className, variant, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button' ;
  return <Comp ref={ref}  className={twMerge('w-max inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-md text-[14px] font-semibold transition-colors hover:transition-colors active:transition-colors outline-none select-none focus-visible:outline-blue-500'
    //  styling 
    , variant == 'primary' ? "text-text-oncolor bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-selected disabled:bg-button-disabled disabled:text-text-disabled" :
     variant == 'link' ? "text-link-default underline hover:text-link-hover visited:text-link-visited  disabled:text-text-disabled" :
      variant == 'secondary' ? "text-text-primary bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-selected border border-border-brand-dark disabled:border-border-disabled disabled:bg-button-disabled disabled:text-text-disabled" :
        variant == 'tertiary' ? "text-button-primary bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected disabled:bg-button-disabled disabled:text-text-disabled border-solid border-[1px] disabled:border-transparent" :
          variant == 'ghost' ? "text-button-primary bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected  disabled:text-neutral-400 disabled:bg-transparent" :
            variant == 'danger' ? "text-text-oncolor bg-button-danger hover:bg-button-danger-hover active:bg-button-danger-selected disabled:bg-button-disabled disabled:text-text-disabled" :
              variant == 'danger-ghost' ? "text-button-danger bg-button-tertiary hover:text-text-oncolor hover:bg-button-danger-hover active:bg-button-danger-selected  disabled:text-text-disabled disabled:bg-button-disabled" :
                variant == 'danger-tertiary' ? "text-button-danger bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected disabled:bg-button-disabled disabled:text-text-disabled border-solid border-[1px] disabled:border-transparent" :
                  "text-white bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-selected disabled:bg-button-disabled disabled:text-neutral-400"
    // sizing

    
    , size == 'sm' ? iconOnly ? 'p-[6px] min-w-[2em] min-h-[2em]' : 'px-4 py-[6px] min-h-[2em]' :
      size == 'md' ? iconOnly ? 'p-2 min-w-[2.5em] min-h-[2.5em]' : 'px-4 py-2 min-h-[2.5em]' :
        size == 'lg' ? iconOnly ? 'p-3 min-w-[3em] min-h-[3em]' : 'px-4 py-3 min-h-[3em]' :
          iconOnly ? 'p-[6px] min-w-[2em] min-h-[2em]' : 'px-4 min-h-[2em] py-[6px] '
    , className
  )} {...props} />
});



export default Button;