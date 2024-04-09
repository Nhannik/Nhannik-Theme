'use client';
import { InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";
import {HiEye , HiEyeOff } from 'react-icons/hi'
import { HiExclamationCircle, HiExclamationTriangle } from 'react-icons/hi2';


interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    text?: string,
    label?: string;
    state?: 'base' | 'error' | 'warning',
    gauge?:boolean;
    gaugeType?:'strong'|'weak'|'average'
    inputClassName?:string;
    disabled?:boolean;
}

export default function PasswordInput({ className,inputClassName,gauge,gaugeType,state='base', text,disabled, label, size = "sm", ...props }: Props) {
    const [show,setShow] = useState<boolean>(false)

    return (
    <div className="block">
        {
            label ?
            <div className="mb-1">
                <span className={twMerge("text-sm text-text-primary",disabled?"text-text-disabled":"")}>{label}</span>
            </div>
            : ""
        }
        <div
            className={twMerge('flex h-max w-[20em] rounded-md outline-1 ',
                state == 'error' && !disabled ? 'outline outline-border-error' : state == 'warning' && !disabled ?
                    'outline outline-border-warning' : '',className
            )}>
            <input 
                disabled={disabled}
                type={show?'text':"password"} className={twMerge(
                'px-4 placeholder:text-text-placeholder w-full text-base text-text-primary  bg-background-layer2 outline-blue-500 outline-1 disabled:bg-field-disabled disabled:text-text-disabled transition-colors',
                size == 'md' ? "py-[10px]" : size == 'lg' ? 'py-[14px]' : "py-[6px]", "outline-none outline-0 rounded-l-md",
                inputClassName
                )} {...props} />
                {
                    state == 'error'  && !disabled  || state == 'warning'  && !disabled  ? (
                    <div className=" justify-center bg-Background-layer2 flex items-center px-[0]
                    ">
                        {
                            state == 'error' ? (<HiExclamationCircle className="text-text-error w-5 h-5" />) : state == 'warning' ? (<HiExclamationTriangle className="text-text-warning w-5 h-5" />) : ''
                        }
                    </div>

                    ) : ""
                }
            <div  className={twMerge("justify-center bg-Background-layer2  flex items-center px-4 rounded-r-md ",
            disabled ? "bg-field-disabled" : ''
            )}>
                {show ? <HiEyeOff onClick={()=> !disabled && setShow(false)}  className={twMerge("text-icon-dark cursor-pointer w-5 h-5",disabled?"text-text-disabled cursor-auto":"")} /> : <HiEye onClick={()=>!disabled &&setShow(true)} className={twMerge("text-icon-dark cursor-pointer w-5 h-5",disabled?"text-text-disabled cursor-auto":"")} />}   
            </div>
        </div>
        {
            gauge && state == 'base' ? 

            <div className="mt-[2px] gap-1 flex items-center w-full">
                <div className="w-[88%] gap-1 flex items-center">
                    <div className={twMerge("w-1/3 h-1 transition-colors  rounded-xl",gaugeType == "weak" ? "bg-border-error" : gaugeType == "average" ? "bg-border-warning" : "bg-border-success" )}></div>
                    <div className={twMerge("w-1/3 h-1 transition-colors bg-border-success rounded-xl",gaugeType == "weak" ? "bg-border-disabled" : gaugeType == "average" ? "bg-border-warning" : "bg-border-success" )}></div>
                    <div className={twMerge("w-1/3 h-1 transition-colors bg-border-success rounded-xl",gaugeType == "weak" ? "bg-border-disabled" : gaugeType == "average" ? "bg-border-disabled" : "bg-border-success" )}></div>
                </div>
                <p className={twMerge("w-[12%] items-center select-none flex justify-end text-sm  font-bold",gaugeType=="weak"? "text-text-error" : gaugeType=="strong"?"text-text-success":"text-text-warning")}>
                {
                    gaugeType == 'weak' ? "Faible" : gaugeType == "strong" ? "Fort" : "Moyen"
                }    
                </p>
            </div>
            
            : ""
        }


        {
            text ?
                <div className="mt-[2px]">
                    <span className={twMerge("text-sm ",
                        state == 'error' && !disabled  ? "text-text-error" : state == 'warning' && !disabled  ? 'text-text-warning' : 'text-text-secondary'
                    )}>{text}</span>
                </div>
                : ""
        }

    </div>);

}