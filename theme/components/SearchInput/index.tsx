'use client';
import { useEffect, useState } from "react";
import { HiMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

// this's a controlled input so if you needed to use any function , implant it 
// ## IF YOU NEEDED ##

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'value'|'type'|'disabled'|'defaultValue'|'size'|'onChange'> {
    size?:'sm'|'lg'|'md';
    inputClassName?:string;
    defaultValue?:string;
    disabled?:boolean;
    onChange?:(e:string)=>void;
}

export default function SearchInput ({disabled,defaultValue,onChange,size,inputClassName,className,...props}:Props){
    const [value,setValue] = useState<string>(defaultValue?defaultValue:'');
    useEffect(()=>onChange&&onChange(value),[value]);
    return (<>    
     <div
            className={twMerge('flex h-max w-[20em] items-center bg-background-layer2 rounded-md outline-1 ',
            'pl-4 pr-2 gap-2',
            size == 'lg' ? "py-3" : size == 'md' ? 'py-2' : "py-1"
            ,className)}><i className="text-icon-dark"><HiMagnifyingGlass className="h-6 w-6"/></i>
            <input
            disabled={disabled}
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            className={twMerge(
            'placeholder:text-text-placeholder bg-background-layer2 w-full text-base text-text-primary   outline-blue-500 outline-1 disabled:bg-field-disabled disabled:text-text-disabled transition-colors',
            'outline-none outline-0 ',inputClassName
            )} {...props} />
           {value && value.length > 0 ?
                <HiOutlineXMark onClick={()=>setValue('')} className="text-icon-dark w-6 h-6 cursor-pointer hover:opacity-75" />
            : null
           }
        </div>
    </>);
}