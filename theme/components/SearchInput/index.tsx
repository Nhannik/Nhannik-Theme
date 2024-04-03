'use client';
import { useEffect, useState } from "react";
import { HiMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'type' | 'disabled' | 'defaultValue' | 'size' | 'onChange'> {
    size?: 'sm' | 'lg' | 'md';
    inputClassName?: string;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (e: string) => void;
}

export default function SearchInput({ disabled, defaultValue, onChange, size, inputClassName, className, ...props }: Props) {
    const [value, setValue] = useState<string>(defaultValue ? defaultValue : '');
    const [isExpanded, setExpanded] = useState<boolean>(false);

    useEffect(() => onChange && onChange(value), [value]);

    const handleIconClick = () => {
        setExpanded(true);
       
    };

    const handleClearClick = () => {
        setValue('');
        setExpanded(false);
    };

    return (
        <>
            <div
                className={twMerge('flex items-center text-icon-black  bg-background-layer2 rounded-md outline-1  ',
                    'pl-4 pr-2 gap-2',
                    size === 'lg' ? 'py-3' : size === 'md' ? 'py-2' : 'py-1' , size === 'sm' ? 'py-1.5' : 'py-1',
                    className,
                    isExpanded ? 'w-[20em]' : 'w-10'
                )}
            >
                <i
                    className={`text-icon-black cursor-pointer ${isExpanded ? 'text-icon-black' : ''}`}
                    onClick={handleIconClick}
                >
                    <HiMagnifyingGlass className={`h-6 w-6 ${isExpanded ? 'text-icon-black' : 'text-icon-blue'}`} />
                </i>
                <input
                    disabled={disabled}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={twMerge(
                        'placeholder:text-text-placeholder bg-background-layer2 w-full text-base text-text-primary   outline-blue-500 outline-1 disabled:bg-field-disabled disabled:text-text-disabled transition-colors',
                        'outline-none outline-0 ', inputClassName
                    )}
                    {...props}
                />
                {(isExpanded || value.length > 0)  ? (
                    <HiOutlineXMark
                        onClick={handleClearClick}
                        className="text-icon-black w-6 h-6 cursor-pointer "
                    />
                ) : null}
            </div>
        </>
    );
}
