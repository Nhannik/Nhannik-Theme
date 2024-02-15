import { CheckboxSizeType, CheckboxVariantType } from "./type";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { forwardRef } from 'react'
import { HiCheck , HiMinus } from "react-icons/hi";
import { twMerge as cn } from "tailwind-merge";

interface CheckboxPropsType extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    variant? : CheckboxVariantType;
    size?:CheckboxSizeType;
    intermediate?:boolean;
}

const Checkbox = forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>,CheckboxPropsType>
(({ size='base',intermediate,variant='dark',className ,...props},ref)=>{
    const Icon = intermediate ? HiMinus : HiCheck ;

    return <CheckboxPrimitive.Root data-intermediate={intermediate} data-size={size} data-variant={variant} className={cn(
    'rounded-sm border border-solid transition-colors flex justify-center items-center cursor-pointer outline-none select-none focus-visible:outline-blue-500',
    // variant
    'data-[state=checked]:data-[variant=dark]:bg-icon-dark data-[variant=dark]:border-icon-dark',
    'data-[state=checked]:data-[variant=brand]:bg-icon-blue data-[variant=brand]:border-icon-blue',
    'data-[state=checked]:data-[variant=warning]:bg-icon-warning data-[variant=warning]:border-icon-warning',
    'data-[state=checked]:data-[variant=error]:bg-icon-error data-[variant=error]:border-icon-error',
    // size
    'data-[size=base]:w-[15px] data-[size=base]:h-[15px] data-[size=lg]:w-[18px] data-[size=lg]:h-[18px]',
    // disabled
    'data-[state=checked]:disabled:bg-icon-disabled data-[state=unchecked]:disabled:border-icon-disabled data-[state=checked]:disabled:border-icon-disabled disabled:cursor-auto disabled:pointer-events-none'
    ,className)}
    {...props} ref={ref}>
        <CheckboxPrimitive.Indicator data-size={size} className="group text-white">
            <Icon className="group-data-[size=lg]:w-4 group-data-[size=lg]:h-4 group-data-[size=base]:w-3 group-data-[size=base]:h-3" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
}) 


export default Checkbox ;