'use client';
import { useId } from "react";
import {PlacesType} from "react-tooltip";
import SSRToolTip from "./ssrTooltip";

interface Props {
    children:React.ReactNode;
    content:string|React.ReactNode;
    size?:'sm'|'md'|"lg"
    position?: PlacesType;
    inline?:boolean;
    className?:string;
}

export default function Tooltip (props:Props){
      const id = useId()
     return <SSRToolTip id={id} {...props}/> ;
}