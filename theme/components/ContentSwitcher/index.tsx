"use client";
import { twMerge } from "tailwind-merge";

interface sectionType {
    selected?:boolean;
    disabled?:boolean;
    size?:'sm'|'md'|'lg';
    width:string;
    text:string;
    on:(e:string|number)=>void;
    value:string|number;
}

function Section ({text,value,on,width,selected,disabled,size='sm'}:sectionType){
    return(<>
    
    <div onClick={()=> !disabled && on(value) } style={{width:width?width:""}} className={twMerge("min-w-max  flex justify-start  px-4   select-none  text-base ",
    !disabled ? 
    selected ? 
        "bg-button-primary-selected text-text-oncolor transition-colors" :
        "text-text-secondary  transition-colors hover:text-text-primary cursor-pointer " 
     :
    selected ? 
            "text-text-disabled" : 
            " text-text-secondary"
    ,
    size == 'md' ? "py-[11px]"
    : size == 'lg' ? "py-[15px]" : 
    "py-[7px]",
    )}>
        {text}
    </div>
    
    </>)
}

function BorderBetween ({disabled}:{disabled?:boolean}){
 return (<>
      <div className="w-[1px]  items-center">
            <div className={twMerge("h-[25px] w-[1px] min-w-[1px] max-w-[1px] ",
            disabled ? "bg-border-strong" : "bg-button-primary-selected"
            )}></div>
    </div>
 </>)
}



interface listType {    
    text:string;
    value:string|number;
}

interface Props {
    list:listType[];
    size?:'sm' | "md" | 'lg';
    width?:string;
    value:string|number;
    onChange?:(e:string|number)=>void
    disabled?:boolean;
}

export default function ContentSwitcher ({size,list,value,onChange,width="",disabled}:Props) {

    function select(e:string|number){
        onChange && onChange(e);
    }

   

    return (<>


     <div className={twMerge("w-max h-max rounded-[4px] overflow-hidden border-[1px] border-solid border-Background-brand-dark flex items-center",
         disabled? "bg-button-disabled" : "bg-border-notification-information bg-opacity-10"
     )}>

       
    {
        list && list.map((e,i,a)=><>

            <Section on={select} key={e.value} value={e.value} width={width} text={e.text} disabled={disabled} size={size} selected={value == e.value}/>
            {
                i == (a.length - 1) ? "" : 
                value == e.value ? disabled ? <BorderBetween disabled /> : "" :
                a[i+1].value == value && !disabled ? "" :
                <BorderBetween />
            }
        
        
        </>)
    }
        

    </div>
    
    
    </>)
}