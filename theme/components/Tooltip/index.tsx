'use client';
import { useId } from "react";
import {PlacesType} from "react-tooltip";
import SToolTip from "./STooltip";

interface Props {
    children:React.ReactNode;
    content:string|React.ReactNode;
    size?:'sm'|'md'|"lg"
    position?: PlacesType;
    inline?:boolean;
    className?:string;
}

export default function STooltip (props:Props){
      const id = useId()
     return <SToolTip id={id} {...props}/> ;
}