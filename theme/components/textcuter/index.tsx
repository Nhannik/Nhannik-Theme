

function TextCuter(text:string,limit:number,end :string='...'):string{
    const str = text.split('');
    let res = '';
    const endT = (limit > str.length) ? "" : end;
    for(let i=0;i<limit&&i<str.length;i++)res+=str[i];
    return res + endT;
}

interface TextCuterJSXProps {
    text:string;
    limit:number;
    end:React.ReactNode|JSX.Element
}

export function TextCuterJSX({text,limit,end}:TextCuterJSXProps){
    const str = text.split('');
    let res = '';
    const endT = (limit > str.length) ? <></> : end;
    for(let i=0;i<limit&&i<str.length;i++)res+=str[i];
    return <>{ res }{endT}</>
}


export default TextCuter;