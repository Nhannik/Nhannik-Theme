import { twMerge } from "tailwind-merge";
import {PlacesType,Tooltip as Tp} from "react-tooltip";

interface Props {
    children:React.ReactNode;
    content:string|React.ReactNode;
    size?:'sm'|'md'|"lg"
    id:string;
    inline?:boolean;
    className?:string;
    position?: PlacesType;
}

export default function SSRToolTip({inline,className,id,children,content,position,size}:Props){
    return   <>
    <div className={twMerge(inline?'inline':'')} data-tooltip-id={id}>{children}</div>
     <Tp 
     id={id} place={position} opacity={1}  
     className={className}
     style={{
     maxWidth:'18em',
     backgroundColor:'#262626',
     padding:size == 'md' ? '8px 16px' : size == 'lg' ? "16px" : "2px 16px" ,
     fontSize:14,
     borderRadius:2,
     zIndex:100,
     }} 
      >{content}</Tp>
    </>
}