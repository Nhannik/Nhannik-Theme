'use client';
// ### Button Component ###

import { HiChevronDown } from 'react-icons/hi2'
import { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge'
import { Option } from '../DropDown';




export type OptionItemType = {
  text: string;
  value: number | string;
  selected?: boolean;
  line?: boolean;
  icon?: JSX.Element;
}

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  size?: "sm" | 'md' | "lg";
  optionsList?: OptionItemType[];
  className?: string;
  onChange: (v: number | string) => void;
  styleType?: "primary" | "tertiary" | "secondary"
}

export default function GroupButton({ className: cn, size, styleType, optionsList, onChange, ...props }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number | string>('');
  const optionListlRef = useRef<HTMLDivElement>(null);

  const onOptionClicked = (_: any, value: string | number) => {
    setSelectedValue(value);
    setToggle(false);
    onChange && onChange(value);
  }

  useEffect(() => {
    onChange && onChange(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    const eventFun = (e: MouseEvent) => {
      if (!optionListlRef.current?.contains(e.target as never)) {
        setToggle(false);
      }
    }

    if (toggle) {
      addEventListener('mousedown', eventFun);
    }

    return () => {
      removeEventListener('mousedown', eventFun)
    }

  }, [toggle]);

  return (
    <div className="max-w-max h-max flex relative items-center rounded-md ">

      <button {...props}
        onClick={() => setToggle((prevState) => !prevState)} // Toggle the option list
        className={twMerge('w-max justify-self-end h-max rounded-l-md flex justify-center items-center gap-2  font-semibold hover:transition-colors active:transition-colors outline-none select-none bg-transparent border-r-[1px] border-white border-solid',
          styleType == 'tertiary' ? "text-button-primary bg-button-tertiary group-hover:bg-button-tertiary-hover group-active:bg-button-tertiary-Selected disabled:bg-button-disabled disabled:text-neutral-400 border-solid border-[1px] disabled:border-transparent" :
            styleType == 'secondary' ? "text-text-oncolor bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-Selected disabled:bg-button-disabled disabled:text-neutral-400" :
              styleType == 'primary' ? "text-text-oncolor bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-Selected disabled:bg-button-disabled disabled:text-neutral-400" :
                "text-white bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-Selected disabled:bg-button-disabled disabled:text-neutral-400",
          // sizing
          size == 'sm' ? 'px-4 py-[6px]' :
            size == 'md' ? 'px-4 py-[9px]' :
              size == 'lg' ? 'px-4 py-[12px]' :
                'px-4 py-[6px]'
        )} />

      {toggle &&

        <div ref={optionListlRef} className={twMerge("absolute z-30 flex sm-scrollbar sm-hiddenScroll flex-col top-full left-0 rounded-md overflow-hidden shadow-md bg-field-background h-auto w-[120%]",
          optionsList && optionsList?.length > 8 ? "h-[18em] overflow-y-scroll" : ""
        )}>
          {
            optionsList && optionsList.map((e) => <Option limit={15} line={e.line} value={e.value} key={e.value} type='select' onClick={onOptionClicked} selected={selectedValue == e.value} size={size} Icon={e.icon} text={e.text} />)
          }
        </div>
      }
    </div>
  )
}
