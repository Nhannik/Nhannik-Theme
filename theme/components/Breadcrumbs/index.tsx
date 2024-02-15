'use client';
import { Children, MouseEvent } from 'react'
import { twMerge as cn } from 'tailwind-merge'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { HiChevronRight, HiEllipsisHorizontal } from 'react-icons/hi2';
import { SizeType } from '../../../types';


interface PropsType {
    children?: React.ReactNode;
    size?: SizeType;
    onClick?: (ItemValue: string, event: MouseEvent) => void
}


interface BreadcrumbsRootType extends React.FC<PropsType> {
    // List
    List: React.FC<{ className?: string; children?: React.ReactNode }>
    // Item 
    Item: React.FC<ItemPropsType>
}

interface BreadcrumbType extends Omit<ItemPropsType, 'value'> {
    value: string;
}

const Breadcrumbs: BreadcrumbsRootType = ({ onClick, size = 'sm', children, ...props }) => {

    const { Breads, className }: { Breads: BreadcrumbType[], className: string } = (() => {

        const resArr: BreadcrumbType[] = [];

        let className: string = ''
        // Looping in children to find the List subComponent
        Children.toArray(children).forEach((child: any) => {

            if (child.type?.displayName == 'BreadcrumbsList') {
                // checking the children prop in the List component and looping in in to find the items and convert them to an array to show them 
                if (child.props.children) {
                    // if it's exists then we loop through it to find the items 
                    Children.toArray(child.props.children).forEach((itemChild: any, idx) => {
                        // check if the component is a Item subComponent then get the data from it and use it
                        if (itemChild.type?.displayName == 'BreadcrumbsItem') {
                            // then use it's props
                            resArr.push({
                                value: itemChild.props.value || idx,
                                children: itemChild.props.children || 'breadcrumb ' + idx,
                                onClick: itemChild.props.onClick
                            })
                        }
                    })
                }

                // save the styles of the List 
                if (child.props.className) {
                    className = child.props.className;
                }
            }

        });

        return { Breads: resArr, className };
    })();


    // handle the clicks 

    const HandleClick = (event: any, value: string, cb?: (e: MouseEvent) => void) => {
        // calling the function of the item 
        if (cb) cb(event);
        // calling the function of the Root 
        if (onClick) onClick(value, event);
    }

    return (<div className={cn('w-max py-1 px-3 select-none bg-[#1966B21A] rounded-md flex gap-2 items-center', className)} {...props}>

        {
            Breads && Breads.length < 4 ?
                Breads.map((b, idx, ar) =>
                    <>
                        <button
                            onClick={(idx + 1 == ar.length) ? undefined : (e) => HandleClick(e, b.value, b.onClick)}
                            key={b.value}
                            className={cn('w-max px-1 inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-sm text-base outline-none select-none', (idx + 1) == ar.length ? 'cursor-auto text-text-primary' : 'transition-colors cursor-pointer text-text-link hover:text-text-link-hover focus-visible:outline-1 focus-visible:outline-blue-500 focus-visible:text-text-link-hover')}
                            children={b.children} />
                        {(idx + 1) < (ar.length) ? <HiChevronRight className="w-5 h-5 text-icon-dark" /> : null}
                    </>
                )
                : Breads ?
                    <>
                        {/* 1 */}
                        <button
                            onClick={e => HandleClick(e, Breads[0].value, Breads[0].onClick)}
                            key={Breads[0].value}
                            className={cn('w-max px-1 inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-sm text-base transition-colors cursor-pointer text-text-link hover:text-text-link-hover', 'outline-none select-none focus-visible:outline-1 focus-visible:outline-blue-500 focus-visible:text-text-link-hover')}
                            children={Breads[0].children}
                        />
                        <HiChevronRight className="w-5 h-5 text-icon-dark" />


                        {/* list (the items between the first and the item before the last item )  */}

                        <DropdownPrimitive.Root >

                            <DropdownPrimitive.Trigger className='rounded-sm outline-none select-none focus-visible:outline-1 focus-visible:outline-blue-500 focus-visible:text-text-link-hover'>
                                <HiEllipsisHorizontal className="w-5 h-5 text-text-link transition-colors cursor-pointer hover:text-text-link-hover " />
                            </DropdownPrimitive.Trigger>

                            <DropdownPrimitive.Portal >

                                <DropdownPrimitive.Content
                                    side='bottom'
                                    sideOffset={4}
                                    className="group relative w-[9em] mt-1 ml-14 max-h-[15.4em] sm-scrollbar overflow-y-auto rounded-md shadow-md bg-field-background flex flex-col p-1 gap-1"
                                    data-size={size}>
                                    {/* remove the first item and item before the last and the last and looping through the array  */}

                                    {
                                        Breads.filter((_, i, a) => i !== 0 && i !== (a.length - 1) && i !== (a.length - 2)).map(e =>
                                            <DropdownPrimitive.Item
                                                key={e.value}
                                                onClick={ev => HandleClick(ev, e.value, e.onClick)}
                                                children={e.children}
                                                className={cn(
                                                    'w-full flex justify-between cursor-pointer select-none items-center rounded-md px-4 text-base outline-none data-[disabled]:pointer-events-none',
                                                    'bg-field-background text-text-primary focus-visible:bg-field-hover hover:bg-field-hover   border-transparent data-[state=checked]:border-l-2  data-[state=checked]:border-l-border-selected data-[state=checked]:text-text-brand transition-colors',
                                                    "group-data-[size=md]:py-2 group-data-[size=md]:min-h-[2.5em] group-data-[size=lg]:py-3 group-data-[size=lg]:min-h-[3em] group-data-[size=sm]:py-1 group-data-[size=sm]:min-h-[2em]"
                                                    , "data-[disabled]:bg-field-disabled data-[disabled]:text-text-disabled"
                                                )}
                                            />
                                        )
                                    }

                                </DropdownPrimitive.Content>
                            </DropdownPrimitive.Portal>

                        </DropdownPrimitive.Root>

                        <HiChevronRight className="w-5 h-5 text-icon-dark" />



                        {/* the item before the last item  */}
                        <button
                            onClick={e => HandleClick(e, Breads.at(-2)?.value as never, Breads.at(-2)?.onClick)}
                            key={Breads.at(-2)?.value} className={cn('w-max px-1 inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-sm text-base transition-colors cursor-pointer text-text-link hover:text-text-link-hover', 'outline-none select-none focus-visible:outline-1 focus-visible:outline-blue-500 focus-visible:text-text-link-hover ')}
                            children={Breads.at(-2)?.children}
                        />
                        <HiChevronRight className="w-5 h-5 text-icon-dark" />

                        {/* last item */}
                        <button
                            key={Breads.at(-1)?.value}
                            className={cn('w-max px-1 inline-flex justify-center items-center gap-2 cursor-auto whitespace-nowrap rounded-sm text-base text-text-primary', 'outline-none select-non')}
                            children={Breads.at(-1)?.children} />

                    </>
                    : <></>
        }

    </div>)
}


// List 

Breadcrumbs.List = function () {
    // this component is just for storing the Items  
    return null;
}
Breadcrumbs.List.displayName = 'BreadcrumbsList';


// Item

interface ItemPropsType {
    children: string;
    value?: string;
    onClick?: (event: MouseEvent) => void
}

Breadcrumbs.Item = function () {
    // this component is just for storing data in props  
    return null;
}

Breadcrumbs.Item.displayName = 'BreadcrumbsItem';


export default Breadcrumbs;
