import { forwardRef, useMemo, useState } from "react";
import * as SwitchPrimitive from '@radix-ui/react-switch' ;
import { twMerge as cn  } from "tailwind-merge";
import { HiCheck, HiLockClosed, HiLockOpen } from 'react-icons/hi'

interface PropsType extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    size?:'sm'|'lg' ;
    variant?: 'default' | 'locked';
}

const Switch = forwardRef<
React.ElementRef<typeof SwitchPrimitive.Root>,PropsType>
(({className,size='lg',variant='default',...props},ref)=>{

    const [checkState,setCheckState] = useState<boolean>(false);
    const Icon = variant == 'locked' ? checkState ? HiLockClosed : HiLockOpen : HiCheck ;

    return <SwitchPrimitive.Root  
    data-variant={variant}
    data-size={size}
    onCheckedChange={(e)=>setCheckState(e)}
    className={cn('group','flex p-[3px] items-center rounded-xl cursor-pointer transition-colors outline-none select-none focus-visible:outline-blue-500',
    'data-[size=sm]:w-[32px] data-[size=lg]:w-[48px]',
    'data-[state=unchecked]:bg-icon-secondary data-[state=checked]:data-[variant=default]:bg-icon-success data-[state=checked]:data-[variant=locked]:bg-icon-error',
    'disabled:data-[state=checked]:bg-button-disabled disabled:data-[state=unchecked]:bg-button-disabled data-[disabled]:cursor-not-allowed',
    className)}

    ref={ref} {...props}>
    
    <SwitchPrimitive.Thumb 
    data-size={size}
    data-variant={variant} 
    className={cn("group flex justify-center items-center rounded-full transition-transform",
    'data-[state=checked]:data-[size=lg]:translate-x-[24px] data-[state=checked]:data-[size=sm]:translate-x-[16px]',
    'data-[size=sm]:w-[10px] data-[size=sm]:h-[10px] data-[size=lg]:w-[18px] data-[size=lg]:h-[18px]',
    'bg-white data-[disabled]:bg-icon-disabled',
    'data-[state=unchecked]:data-[variant=locked]:text-icon-secondary',
    'data-[variant=default]:data-[state=checked]:text-icon-success data-[variant=locked]:data-[state=checked]:text-icon-error',
    'data-[disabled]:data-[variant=default]:data-[state=checked]:text-icon-secondary data-[disabled]:data-[variant=locked]:data-[state=checked]:text-icon-secondary',
    ''
    )}>
        <Icon data-size={size} data-variant={variant}
        className={cn(
            'group-data-[state=unchecked]:data-[variant=default]:hidden ',
            'data-[size=sm]:w-2 data-[size=sm]:h-2 data-[size=lg]:data-[variant=default]:w-[14px] data-[size=lg]:data-[variant=default]:h-[14px] data-[size=lg]:data-[variant=locked]:w-[12px] data-[size=lg]:data-[variant=locked]:h-[12px]'
        )}/>
    </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
})  

Switch.displayName = SwitchPrimitive.Root.displayName ;



export default Switch