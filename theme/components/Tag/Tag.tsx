import { twMerge } from "tailwind-merge";
import { TagColors } from "../../../types";

// ### Tag file ###
interface Props {
    disabled?:boolean;
    styleType?:TagColors;
    children: string;
    size?:"sm"|"md";
    className?:string
}

export default function Tag ({disabled,className,size,styleType="blue",children}:Props){
    return (<div  className={
        twMerge('w-max px-4 py-1 h-max rounded-xl text-sm',
        size == 'md' ? 'min-w-[57px] h-[30px]' : ''
        ,
        styleType == 'blue' ? 'bg-tag-blue-bg text-tag-blue-text' :
        // styleType == 'yellow' ? 'bg-tag-yellow-bg text-tag-yellow-text' :
        styleType == 'purple' ? 'bg-tag-purple-bg text-tag-purple-text' :
        styleType == 'gray' ? 'bg-tag-gray-bg  text-tag-gray-text' :
        styleType == 'cool-gray' ? 'bg-tag-cool-gray-bg text-tag-cool-gray-text' :
        styleType == 'magenta' ? 'bg-tag-magenta-bg text-tag-magenta-text' :
        styleType == 'warm-gray' ? 'bg-tag-warm-gray-bg text-tag-warm-gray-text' :
        styleType == 'orange' ? 'bg-tag-orange-bg text-tag-orange-text' :
        styleType == 'red' ? 'bg-tag-red-bg text-tag-red-text' :
        styleType == 'cyan' ? 'bg-tag-cyan-bg text-tag-cyan-text' :
        styleType == 'green' ? 'bg-tag-green-bg text-tag-green-text' :
        styleType == 'teal' ? 'bg-tag-teal-bg text-tag-teal-text' :
        styleType == 'dark-gray' ? 'bg-tag-dark-gray-bg text-tag-dark-gray-text' :
        styleType == 'outline' ? 'bg-white text-neutral-900 border-neutral-900 border-[1px] border-solid' :
        'bg-tag-blue-bg text-tag-blue-text',
        disabled ? styleType == 'outline' ? 'bg-transparent border-[1px] border-solid border-neutral-400 text-neutral-400 select-none' : 'bg-neutral-100 text-neutral-400 select-none' : '',
        className
        )}>{children}</div>)
}