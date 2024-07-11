import { twMerge } from "tailwind-merge";
import { HiCheckCircle,HiMinusCircle } from 'react-icons/hi';


interface Props {
    max:number;
    value:number;
    state?:"success"|"error"|'active';
    size?:'sm'|'md';
    label?:string;
    text?:string;
    className?:string;
    icon?:boolean;
    counter?:boolean;
}


export default function ProgressBar ({max,icon=true,counter=false,className,size='sm',value,state='active',text,label}:Props){
    return(


        <div className={twMerge("min-w-[10em] flex flex-col gap-2",className)}>
            <div className="w-full flex justify-between items-center">
                {label?<span className="text-base text-text-primary">{label}</span>:''}
                <div className="text-base text-text-primary">
                    {   
                        state == 'success' && icon ? (<HiCheckCircle className="w-4 h-4 text-border-success"/>) : state == 'error' && icon ? (<HiMinusCircle  className="w-4 h-4 text-border-error  self-end" />) : counter ? (<>{value}/{max}</>) : ''
                    }
                </div>
            </div>
            <div className={twMerge("w-full bg-border-subtle rounded-xl overflow-hidden",size=='sm'?"h-1":"h-2")}>
                <div style={{width:state != 'active' ? '100%' : ((value*100)/max)+'%'}} className={twMerge("h-full",
                state == 'error' ?'bg-border-error':state=='success'?'bg-border-success':' bg-border-brand'
                )}></div>
            </div>

           {text ? <span className={twMerge("text-sm",state=='error'?'text-text-error':'text-text-secondary')}>{text}</span> : ''}
        </div>


    )
}