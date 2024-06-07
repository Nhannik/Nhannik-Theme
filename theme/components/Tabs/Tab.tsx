'use client';
import { useMemo, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from 'react-responsive';

interface TabProps {
	selected?: boolean;
	disabled?: boolean;
	style: '1' | '2';
	onlyIcon?: boolean;
	tertiary?: boolean;
	bigIcon?: boolean;
	vertical?: boolean;
	border?: boolean;
	className?: string;
	value: string | number;
	click: (n: string | number) => void;

	children: React.ReactNode | string;
}

function Tab({
	click,
	border,
	vertical,
	className,
	value,
	tertiary,
	onlyIcon,
	style,
	disabled,
	bigIcon,
	selected,
	children,
}: TabProps) {
	return (
		<>
			<div
				onClick={() => !disabled && !selected && click(value)}
				className={twMerge(
					'w-max  px-4 flex transition-all justify-center items-center text-base select-none gap-2 sm:text-sm md:text-sm truncate text-clip ',
					style == '2' ? 'py-[14px]' : 'py-[11px]',
					onlyIcon
						? style == '2' || bigIcon
							? 'p-[13px] text-xl'
							: 'p-[11px]'
						: '',
					className,
					style == '2'
						? selected
							? ' text-text-brand font-semibold border-text-brand'
							: 'bg-button-tertiary-hover cursor-pointer text-text-secondary border-button-tertiary-hover hover:text-text-primary transform-color'
						: selected
						? '   text-text-brand font-semibold border-text-brand '
						: 'bg-transparent cursor-pointer border-border-strong  text-text-secondary hover:text-text-primary transform-color',
					vertical
						? style == '2'
							? 'border-l-2'
							: 'border-l-2'
						: style == '2'
						? 'border-t-2'
						: 'border-b-2',
					border ? 'border-r-[1px] border-r-border-strong' : '',
					selected ? (tertiary ? 'bg-transparent' : 'bg-[#1966B21A]') : '',
					disabled
						? style == '2'
							? 'bg-button-disabled   text-text-disabled hover:text-text-disabled cursor-not-allowed border-border-disabled'
							: 'bg-transparent  text-text-disabled hover:text-text-disabled cursor-not-allowed border-border-disabled'
						: ''
				)}
			>
				{children}
			</div>
		</>
	);
}

interface List {
	value: string | number;
	content: React.ReactNode;
	bigIcon?: boolean;
	onlyIcon?: boolean;
	disabled?: boolean;
}

interface Props {
	tabsList?: List[];
	style?: 'line' | 'contained';
	value: string | number;
	tertiary?: boolean;
	vertical?: boolean;
	disabled?: boolean;
	overflow?: number;
	className?: string;
	onChange: (n: string | number) => void;
}

export default function Tabs({
	value,
	vertical,
	className,
	disabled,
	tertiary,
	overflow,
	onChange,
	style = 'line',
	tabsList = [],
}: Props) {
	const isSmallScreen = useMediaQuery({ maxWidth: 640 });
	const newOverflow = isSmallScreen ? 3 : overflow;

	const [po, setPo] = useState<number>(0);
	const tabsList2: List[] = useMemo(
		() => (newOverflow ? tabsList.slice(po, po + newOverflow) : []),
		[po]
	);

	function add() {
		newOverflow &&
			setPo((e) => (e + newOverflow < tabsList.length ? e + 1 : e));
	}
	function remove() {
		newOverflow && setPo((e) => (e > 0 ? e - 1 : e));
	}

	return (
		<div className={twMerge('flex ', vertical ? 'flex-col' : 'items-center')}>
			{newOverflow && !vertical ? (
				<>
					<button
						disabled={po != 0 ? disabled : true}
						onClick={remove}
						className={twMerge(
							'flex mr-2 justify-center items-center text-md focus-visible:outline-button-primary',
							style == 'contained'
								? 'w-[48px] h-[48px] text-icon-dark  bg-button-tertiary-hover disabled:bg-button-disabled disabled:text-icon-disabled'
								: 'w-[44px]  h-[44px] text-icon-dark  disabled:text-icon-disabled'
						)}
					>
						<HiChevronLeft />
					</button>

					{tabsList2.map((e, i, a) => (
						<Tab
							key={i + '' + e.value}
							bigIcon={e.bigIcon}
							className={className}
							vertical={vertical}
							tertiary={vertical ? true : tertiary}
							onlyIcon={e.onlyIcon}
							selected={value == e.value}
							disabled={e.disabled || disabled}
							border={
								value != e.value &&
								value != a[i + 1]?.value &&
								i != a.length - 1 &&
								style == 'contained'
							}
							value={e.value}
							children={e.content}
							click={(e) => onChange(e)}
							style={style == 'contained' ? '2' : '1'}
						/>
					))}

					<button
						disabled={po + newOverflow != tabsList.length ? disabled : true}
						onClick={add}
						className={twMerge(
							'flex ml-2 justify-center items-center text-md focus-visible:outline-button-primary',
							style == 'contained'
								? 'w-[48px] h-[48px] text-icon-dark bg-button-tertiary-hover disabled:text-icon-disabled'
								: 'w-[44px]  h-[44px] text-icon-dark disabled:text-icon-disabled'
						)}
					>
						<HiChevronRight />
					</button>
				</>
			) : (
				<>
					{tabsList.map((e, i, a) => (
						<Tab
							key={i + '' + e.value}
							bigIcon={e.bigIcon}
							vertical={vertical}
							tertiary={vertical ? true : tertiary}
							onlyIcon={e.onlyIcon}
							className={className}
							selected={value == e.value}
							disabled={e.disabled || disabled}
							border={
								value != e.value && i != a.length - 1 && style == 'contained'
							}
							value={e.value}
							children={e.content}
							click={(e) => onChange(e)}
							style={style == 'contained' ? '2' : '1'}
						/>
					))}
				</>
			)}
		</div>
	);
}
