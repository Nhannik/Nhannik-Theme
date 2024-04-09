import * as SelectPrimitives from '@radix-ui/react-select'
import { forwardRef, FC } from 'react'
import { twMerge as cn } from 'tailwind-merge'
import * as ScrollBarPrimitive from '@radix-ui/react-scroll-area';
import { SizeType, StateType } from '../../../types';
import { HiCheck, HiChevronDown, HiExclamationCircle, HiExclamationTriangle } from 'react-icons/hi2';



// Select Type (the global type)
interface SelectType extends FC<SelectPropsType> {

  // Trigger 
  Trigger: FC<TriggerPropsType>;

  // Trigger 
  CustomTrigger: FC<CustomTriggerPropsType>;

  // List 
  List: FC<ListPropsType>

  // Item 
  Item: FC<ItemPropsType>

  // CustomItem 
  CustomItem: FC<ItemPropsType>

  // Separator 
  Separator: FC<SeparatorPropsType>

  // Group
  Group: FC<GroupPropsType>

  // Label
  Label: FC<LabelPropsType>;

  // Value
  Value: typeof SelectPrimitives.Value;

  // ItemText
  ItemText: typeof SelectPrimitives.ItemText;

  // ItemIndicator
  ItemIndicator: typeof SelectPrimitives.ItemIndicator;
}


// Select 

interface SelectPropsType extends React.ComponentProps<typeof SelectPrimitives.Root> { }


const Select: SelectType = (props) => {
  return <SelectPrimitives.Root {...props} />
}


// # Value
Select.Value = SelectPrimitives.Value;

// # Value
Select.ItemText = SelectPrimitives.ItemText;

// # Value
Select.ItemIndicator = SelectPrimitives.ItemIndicator;


// # Group 

// Group type 
interface GroupPropsType extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Group> { }

Select.Group = forwardRef<React.ElementRef<typeof SelectPrimitives.Group>, GroupPropsType>(({ className, ...props }, ref) => {
  return <SelectPrimitives.Group className={cn('flex flex-col ', className)} ref={ref} {...props} />
})

Select.Group.displayName = SelectPrimitives.Group.displayName;


// # Trigger 

// Trigger type
interface TriggerPropsType extends Omit<React.ComponentPropsWithRef<typeof SelectPrimitives.Trigger>, 'children'> {
  children: string;
  disabled?: boolean;
  size?: SizeType;
  state?: StateType
}

Select.Trigger = forwardRef<React.ElementRef<typeof SelectPrimitives.Trigger>, TriggerPropsType>(({ state = 'active', size = "sm", children, disabled, className, ...props }, ref) => {

  return (<SelectPrimitives.Trigger
    className={cn('group w-[16em] flex justify-between items-center rounded-md select-none px-4 border cursor-pointer text-base outline-none transition-colors',
      size == 'md' ? "py-2 min-h-[2.5em]" : size == 'lg' ? 'py-3 min-h-[3em]' : 'py-1 min-h-[2em]',
      state == 'error' ? 'border-border-error' : state == 'warning' ? 'border-border-warning' : 'border-transparent',
      disabled ? 'bg-field-disabled border-border-disabled cursor-not-allowed pointer-events-none text-text-disabled border-transparent' : 'bg-field-Background hover:bg-field-hover text-base text-text-primary focus-visible:outline-blue-500',
      className)}
    ref={ref} disabled={disabled} {...props}>
    <SelectPrimitives.Value placeholder={children} />
    <div className="flex items-center gap-2">
      {
        !disabled && state == 'error' ?
          <HiExclamationCircle className="text-icon-error h-5 w-5" />
          : !disabled && state == 'warning' ? <HiExclamationTriangle className="text-icon-warning h-5 w-5" /> : null
      }
      <SelectPrimitives.Icon children={<HiChevronDown className='w-5 h-5 transition-transform group-data-[state=open]:rotate-180 ' />} />
    </div>
  </SelectPrimitives.Trigger>)
})

Select.Trigger.displayName = SelectPrimitives.Trigger.displayName;

// # CustomTrigger 

// Trigger type
interface CustomTriggerPropsType extends React.ComponentPropsWithRef<typeof SelectPrimitives.Trigger> { }

Select.CustomTrigger = forwardRef<React.ElementRef<typeof SelectPrimitives.Trigger>, CustomTriggerPropsType>((props, ref) => {
  return (<SelectPrimitives.Trigger asChild ref={ref} {...props} />)
});

Select.CustomTrigger.displayName = SelectPrimitives.Trigger.displayName;


// # List 

// list type 
interface ListPropsType extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content> { size?: SizeType }

Select.List = forwardRef<React.ElementRef<typeof SelectPrimitives.Content>, ListPropsType>(({ size = "sm", position = "popper", side = 'bottom', children, className, ...props }, ref) => {
  return <SelectPrimitives.Portal children={
    <SelectPrimitives.Content

      className={cn('group', 'relative z-50 w-[17.4em] max-h-[15.4em] sm-scrollbar overflow-y-auto rounded-md shadow-md bg-field-Background data-[state=open]:translate-x-0  data-[state=open]:translate-y-0',
        position == 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 transition-transform',
        'data-[side=top]:bottom-2 data-[side=left]:right-1 data-[side=bottom]:top-1 data-[side=right]:left-1', className)} data-size={size} data-side={side} side={side} ref={ref}
      position={'popper'}
      {...props}>
      <ScrollBarPrimitive.Root>
        <ScrollBarPrimitive.Viewport >
          <SelectPrimitives.Viewport className='w-full p-1 -mb-1' children={children} />
        </ScrollBarPrimitive.Viewport>
      </ScrollBarPrimitive.Root>
    </SelectPrimitives.Content >
  } />
})
Select.List.displayName = SelectPrimitives.Content.displayName;


// # Item 

// Item type 
interface ItemPropsType extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item> { }

Select.Item = forwardRef<React.ElementRef<typeof SelectPrimitives.Item>, ItemPropsType>(({ className, children, ...props }, ref) => {
  return <SelectPrimitives.Item
    className={cn(
      'w-full mb-1 flex justify-between data-[state=unchecked]:cursor-pointer select-none items-center data-[state=unchecked]:rounded-md data-[state=checked]:rounded-r-md px-4 text-base outline-none data-[disabled]:pointer-events-none',
      'bg-field-Background text-text-primary focus-visible:bg-field-hover  hover:bg-field-hover data-[state=checked]:bg-notification-brand-transparent data-[state=checked]:focus-visible:bg-notification-brand-transparent border-transparent data-[state=checked]:border-l-2  data-[state=checked]:border-l-border-selected data-[state=checked]:text-text-brand transition-colors',
      // size == 'md' ? "py-2 min-h-[2.5em]" : size == 'lg' ? 'py-3 min-h-[3em]' : 'py-1 min-h-[2em]','
      "group-data-[size=md]:py-2 group-data-[size=md]:min-h-[2.5em] group-data-[size=lg]:py-3 group-data-[size=lg]:min-h-[3em] group-data-[size=sm]:py-1 group-data-[size=sm]:min-h-[2em]"
      , "data-[disabled]:bg-field-disabled data-[disabled]:text-text-disabled"
      , className)}
    ref={ref} children={<><SelectPrimitives.ItemText children={children} /> <SelectPrimitives.ItemIndicator asChild children={<HiCheck className="w-5 h-5 text-icon-blue" />} /> </>} {...props} />
})

Select.Item.displayName = SelectPrimitives.Item.displayName;

// # CustomItem 

// CustomItem type 
interface CustomItemPropsType extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item> { }

Select.CustomItem = forwardRef<React.ElementRef<typeof SelectPrimitives.Item>, CustomItemPropsType>(({ className, ...props }, ref) => {
  return <SelectPrimitives.Item className={cn('w-full select-none outline-none cursor-pointer rounded-md py-1 px-2 mb-1', className)} ref={ref} {...props} />
})

Select.CustomItem.displayName = SelectPrimitives.Item.displayName;

// # Separator 

// Separator type 
interface SeparatorPropsType extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Separator> { }

Select.Separator = forwardRef<React.ElementRef<typeof SelectPrimitives.Separator>, SeparatorPropsType>(({ className, ...props }, ref) => {
  return <SelectPrimitives.Separator className={cn('-mx-1 my-1 h-px', className)} ref={ref} {...props} />
})

Select.Separator.displayName = SelectPrimitives.Separator.displayName;

// # Label 

// Label type 
interface LabelPropsType extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Label> { }

Select.Label = forwardRef<React.ElementRef<typeof SelectPrimitives.Label>, LabelPropsType>(({ className, ...props }, ref) => {
  return <SelectPrimitives.Label className={cn('py-1 px-4 text-sm select-none font-semibold text-text-secondary text-opacity-50', className)} ref={ref} {...props} />
})

Select.Label.displayName = SelectPrimitives.Label.displayName;

// exporting the Select 
export default Select;