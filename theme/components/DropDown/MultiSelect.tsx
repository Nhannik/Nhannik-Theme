'use client';
import { useEffect, useRef, useState } from "react";
import { HiChevronDown, HiExclamationCircle, HiExclamationTriangle, HiXMark } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { Option } from ".";
import Text from "../Text";
import { TagInput } from "../..";


export type OptionItemType = {
    text: string;
    value: number | string;
    type?:string
    line?:boolean;
    selected?: boolean;
}


interface Props {
    size?: 'sm' | 'md' | 'lg' // px-1 #4px , px-2 #8px , px-3 #12px
    state?: 'error' | 'warning' | 'active';
    disabled?: boolean;
    text?: string;
    optionsList?: OptionItemType[];
    className?: string;
    title: string;
    search?:boolean;
    onChange?: (value: any) => void;
    category?:[string,string];
    overflowLimit?:number
}


export default function MultiSelectDropDown ({title,overflowLimit=16,search=false,category=['option','options'],className,disabled,onChange,optionsList=[],size='sm',state,text}:Props){
    const [toggle, setToggle] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string[]|number[]>([]);
    const [selectedName, setSelectedName] = useState<string>('' as string);
    const optionListlRef = useRef<HTMLDivElement>(null);
    const butOptionRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLDivElement>(null);
    const [searchText,setSearchText] = useState<string>('');
    const [SearchedList ,setSreachList] = useState<OptionItemType[]>([])

    useEffect(() => {

        const eventFun = (e: MouseEvent) => {
            if (!optionListlRef.current?.contains(e.target as never) &&
             !butOptionRef.current?.contains(e.target as never) 
             
            ) {
                if(!tagRef.current?.contains(e.target as never)){
                    setToggle(false);
                }
            }
        }

        if (toggle) {
            addEventListener('mousedown', eventFun);
        }

        return () => {
            removeEventListener('mousedown', eventFun)
        }

    }, [toggle]);


    const onOptionClicked = (option: string, value: string|number) => {  

        setSelectedName("")
        if(selectedValue?.includes(value as never)){
            setSelectedValue((e:any)=>e.filter((it:string | number)=>it!=value));
        }else {
            setSelectedValue((e:any)=>[...e,value]);
        }
        
    }
    
    useEffect(()=>{ 
        if(selectedValue.length == 1){
            const v =  optionsList?.find(e=>e.value == selectedValue[0]) 
            setSelectedName(v?.text||'');
        }else if (selectedValue.length == 0){
            setSelectedName(search ? '' : title); 
        }else if (selectedValue.length > 1){
            setSelectedName('');    
        }
        onChange && onChange(selectedValue)
    
    },[selectedValue])

    // input search 

    

    useEffect(()=>{
        optionsList && setSreachList(optionsList?.filter(e=>e.text.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())))
    },[searchText]);




    return (<>

        <div className={twMerge("flex flex-col gap-2 min-w-[12em]",disabled?"cursor-not-allowed":"", className)}>
            <div  className={twMerge("relative h-max flex items-center gap-1 w-full max-h-max  border-[1px] border-solid border-transparent cursor-pointer  px-4 bg-field-background  transition-colors"
            ,
            state == 'error' ? 'border-border-error' : state == 'warning' ? 'border-border-warning' : '',
          
            disabled ? 'bg-field-disabled cursor-not-allowed' : '',
            !toggle ? 'hover:bg-field-hover rounded-md' : 'rounded-t-md'
            )}>
            { selectedValue && selectedValue?.length > 1 ? 
                    
                    (
                       <div ref={tagRef}> <TagInput size={size == 'sm'?'sm':'md'} onClose={()=>{setSelectedValue([])}} children={`${selectedValue?.length} ${selectedValue.length ==0 ? category[0] : selectedValue.length > 1 && selectedValue.length <= 10 ? category[1] : category[0]  }`} styleType='dark-gray' closeable/>
                        </div>): '' 
                        
            }
                <div ref={butOptionRef} onClick={() => !disabled &&setToggle(e => !e)} className={twMerge(`w-full flex items-center justify-between h-full
                `,
                !disabled && search ? 'p-0' :
                size == 'md' ? "py-2" : size == 'lg' ? 'py-3' : 'py-1',

                )}>

                    <div className="flex items-center gap-1">
                     <span title={selectedName} className={twMerge("block select-none text-base min-w-max text-text-primary",disabled ? "text-text-disabled" : "")}><Text children={selectedName} limit={overflowLimit} /></span>
                    </div>
   
                    
                    {
                      !disabled && search ? (
                         <input type="text"  onChange={(e)=>{setSearchText(e.target.value); if(!toggle){setToggle(true)} }} className={twMerge("outline-none w-full text-md z h-full pl-1 bg-transparent text-text-primary",
                            search ? size == 'md' ? "py-2" : size == 'lg' ? 'py-3' : 'py-1' : ''
                            )} />

                        ) : ''
                    }

                <div className="flex items-center gap-1">
                        {
                         state == 'error' ? (<HiExclamationCircle className={twMerge("text-icon-error h-5 w-5",disabled?"text-text-disabled":"")} />) : state == 'warning' ? (<HiExclamationTriangle className={twMerge("text-icon-warning h-5 w-5",disabled?"text-text-disabled":"")} />): selectedValue.length >= 1 ? <HiXMark onClick={()=>setSelectedValue([])} className={twMerge("text-icon-dark h-5 w-5",disabled?"text-text-disabled":"")}  /> : ''
                        }
                        <HiChevronDown className={twMerge("text-icon-dark h-5 w-5 transition-transform",disabled?"text-text-disabled":"",toggle?'rotate-180':'')} />
                    </div>

                </div>

                {toggle ?

                    <div ref={optionListlRef} className={twMerge("absolute z-30 md-scrollbar md-hiddenScroll flex flex-col top-[102%] left-0 rounded-b-md  shadow-md bg-field-background h-auto w-full",
                    optionsList?.length > 8 ? SearchedList.length >= 8 ? "h-[18em] overflow-y-scroll overflow-x-visible" : 'h-max' : "h-max"
                )}>
                        {

                            search && SearchedList ? SearchedList.map((e) => <Option line={e.line} limit={overflowLimit} value={e.value} key={e.value} type="checkbox"  onClick={onOptionClicked} selected={selectedValue&&selectedValue?.includes(e.value as never)} size={size} text={e.text} />) : 
                            optionsList &&  optionsList.map((e) => <Option line={e.line} limit={overflowLimit} value={e.value} key={e.value} type="checkbox"  onClick={onOptionClicked} selected={selectedValue&&selectedValue?.includes(e.value as never)} size={size} text={e.text} />)

                        }
                    </div> : ''
                }
            </div>

            {text ? (<span className={twMerge('text-sm',
                state == 'error' ? 'text-text-error' : state == 'warning' ? "text-text-warning" : 'text-text-secondary'
            )}>{text}</span>) : ""}
        </div>


    </>)
}