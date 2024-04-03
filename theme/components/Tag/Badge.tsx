import { twMerge } from "tailwind-merge";
import { TagColors } from "../../../types";

// ### Badge Tag ###
interface Props {
    disabled?:boolean;
    styleType?:TagColors;
    children: string;
}

export default function Badge ({disabled,styleType,children}:Props){
    return (<div className={
         twMerge('w-max px-2 py-1 rounded-md text-sm  max-h-max border-[1px] border-solid',
        styleType == 'blue' ? 'bg-tag-blue-bg border-tag-blue-stroke text-tag-blue-text' :
        styleType == 'purple' ? 'bg-tag-purple-bg border-tag-purple-stroke text-tag-purple-text' :
        styleType == 'gray' ? 'bg-tag-gray-bg border-tag-gray-stroke text-tag-gray-text' :
        styleType == 'cool-gray' ? 'bg-tag-cool-gray-bg border-tag-cool-gray-stroke text-tag-cool-gray-text' :
        styleType == 'magenta' ? 'bg-tag-magenta-bg border-tag-magenta-stroke text-tag-magenta-text' :
        styleType == 'warm-gray' ? 'bg-tag-warm-gray-bg border-tag-warm-gray-stroke text-tag-warm-gray-text' :
        styleType == 'orange' ? 'bg-tag-orange-bg border-tag-orange-stroke text-tag-orange-text' :
        styleType == 'red' ? 'bg-tag-red-bg border-tag-red-stroke text-tag-red-text' :
        styleType == 'cyan' ? 'bg-tag-cyan-bg border-tag-cyan-stroke text-tag-cyan-text' :
        styleType == 'green' ? 'bg-tag-green-bg border-tag-green-stroke text-tag-green-text' :
        styleType == 'teal' ? 'bg-tag-teal-bg border-tag-teal-stroke text-tag-teal-text' :
        styleType == 'dark-gray' ? 'bg-tag-dark-gray-bg border-tag-dark-gray-stroke text-tag-dark-gray-text' :
        styleType == 'outline' ? 'bg-white text-neutral-900 border-neutral-900 border-[1px] border-solid' :
         "bg-tag-blue-bg border-tag-blue-stroke text-tag-blue-text",
         disabled ? styleType == 'outline' ? 'bg-transparent border-[1px] border-solid border-neutral-400 text-neutral-400 select-none' : 'bg-neutral-100 text-neutral-400 select-none border-transparent' : ''
         )}>{children}</div>)
}