import { Children , ReactElement , MouseEvent , MouseEventHandler , ButtonHTMLAttributes } from 'react'




interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {}


interface BreadcrumbsRootType extends React.FC<PropsType> {
    // List
    List : React.FC<any>
    // Item 
    Item: React.FC<ItemPropsType>
}

interface BreadcrumbType extends ItemPropsType {

}

const Breadcrumbs : BreadcrumbsRootType = (props)=>{

    const Breads : BreadcrumbType[] = (()=>{
        const resArr : BreadcrumbType[] = [];
        
        // Looping in children to find the List subComponent
        Children.toArray(props.children).forEach((child:any,idx)=>{
            if(child.type?.displayName == 'BreadcrumbsList'){
                // checking the children prop in the List component and looping in in to find the items and convert them to an array to show them 
                if(child.props.children){
                    // if it's exists then we loop through it to find the items 
                    Children.toArray(child.props.children).forEach((itemChild:any,idx)=>{
                        // check if the component is a Item subComponent then get the data from it and use it
                        if(itemChild.type?.displayName == 'BreadcrumbsItem'){
                            // then use it's props
                            resArr.push({
                                value:itemChild.props.value || idx ,
                                children:itemChild.props.children || 'breadcrumb ' + idx ,
                                onClick:itemChild.props.onClick
                            })                 
                        }
                    })
                }
            }
        });

        return resArr ;
    })()
    

    return (<div>{Breads.map(e=><h2 key={e.value}>{e.children}</h2>)}</div>)
}  


// List 

Breadcrumbs.List = function () {
    // this component is just for storing the Item  
    return null;
}
Breadcrumbs.List.displayName = 'BreadcrumbsList'; 


// Item

interface ItemPropsType {
    children:string ;
    value:string;
    onClick?:(event:MouseEvent<HTMLDivElement, MouseEvent>)=>MouseEventHandler<HTMLDivElement>
} 

Breadcrumbs.Item = function (){
    // this component is just for storing data in props  
    return null ;
}

Breadcrumbs.Item.displayName = 'BreadcrumbsItem' ;






export default Breadcrumbs ;
