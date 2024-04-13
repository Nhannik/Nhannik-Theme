import { HTMLAttributes } from 'react'
import TextCuter, { TextCuterJSX } from '../../components/textcuter';
import Tooltip from '../Tooltip';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children:string;
    tooltip?:boolean;
    limit?:number;
}

export default function Text ({children,limit,tooltip,...p}:Props) {

    return <>
    {
        limit ? tooltip ?  
        <div {...p}>
            <TextCuterJSX text={children}  limit={limit} end={<Tooltip position='right' inline content={children}>
            <span className='h-min max-h-min'>...</span>
        </Tooltip>}/>
        </div>
        :
        <div {...p}>{TextCuter(children,limit)}</div>
        : <div {...p}>{children}</div>
    }
    </>
}