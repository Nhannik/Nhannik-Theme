'use client';
import { useMemo } from 'react'
import { FaRegCircleDot, FaRegCircle } from 'react-icons/fa6'

import { twMerge } from 'tailwind-merge';
import { CheckboxColors } from '../../../typess';


interface Prop {
    styleType?: CheckboxColors;
    disabled?: boolean;
    label?: string;
    children: React.ReactNode | string,
    id: string | number;
    value: string | number | null;
    reverse?: boolean;
    text?: string
    onClick?: (e: string | number) => void
}

export default function RadioButton({ children, onClick, text, reverse, value, id, label, disabled, styleType = "dark" }: Prop) {
    const ch = useMemo(() => value == id, [value])
    const Ghange = () => {
        if (!disabled) {
            onClick && onClick(id);
        }
    }

    return (<div className='block max-w-max'>
        {
            label ? (
                <span className={twMerge("text-sm block text-text-primary mb-2",
                    disabled ? "text-icon-disabled select-none" : ""
                )}>{label}</span>
            ) : ""
        }
        <div className={twMerge("flex gap-3 items-start font-normal", reverse ? 'flex-row-reverse' : "")}>
            {
                ch ? (
                    <FaRegCircleDot onClick={Ghange} className={twMerge(
                        styleType == 'dark' ? "text-icon-dark" :
                            styleType == "brand" ? "text-icon-blue" :
                                styleType == "warning" ? "text-icon-warning" :
                                    styleType == "error" ? "text-icon-error"
                                        : "",
                        disabled ? "text-icon-disabled select-none" : ""
                        , "w-[17px] h-[17px]")} />
                ) : (
                    <FaRegCircle onClick={Ghange} className={twMerge(
                        styleType == 'dark' ? "text-icon-dark" :
                            styleType == "brand" ? "text-icon-blue" :
                                styleType == "warning" ? "text-icon-warning" :
                                    styleType == "error" ? "text-icon-error"
                                        : "",
                        disabled ? "text-icon-disabled select-none" : ""
                        , "w-[17px] h-[17px]")} />
                )
            }

            <span onClick={Ghange} className={twMerge("text-base block selection:text-text-primary",
                disabled ? "text-icon-disabled select-none" : ""
            )}>{children}</span>
        </div>

        {
            text ? (
                <span className={twMerge("text-sm block text-text-primary mt-1",
                    styleType == 'dark' ? 'text-text-primary' :
                        styleType == 'brand' ? 'text-icon-blue' :
                            styleType == 'warning' ? 'text-icon-warning' :
                                styleType == 'error' ? 'text-icon-error' : '',
                    disabled ? "text-icon-disabled select-none" : ""
                )}>{text}</span>
            ) : ""
        }



    </div>)

}