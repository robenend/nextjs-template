'use client';

import { useState } from 'react';
import { Select } from '@/components/ui/select';
import { PiCalendarBlank, PiCaretDownBold } from 'react-icons/pi';
import cn from '@/utils/class-names';

type Options = {
  value: string;
  label: string;
};

type DropdownActionProps = {
  name?: string;
  options: Options[];
  defaultActive?: string;
  onChange: (data: string) => void;
  className?: string;
  activeClassName?: string;
  prefixIconClassName?: string;
  suffixIconClassName?: string;
  selectClassName?: string;
};

export default function DropdownAction({
  options,
  onChange,
  className,
  prefixIconClassName,
  suffixIconClassName,
  selectClassName,
}: DropdownActionProps) {
  const [viewType, setViewType] = useState(options[0]);
  function handleOnChange(data: Options) {
    setViewType(data);
    onChange && onChange(data.value);
  }

  return (
    <Select
      variant="text"
      value={viewType.value}
      options={options}
      onChange={handleOnChange}
      displayValue={(selected) =>
        options.find((option) => option.value === selected)?.value
      }
      selectClassName={cn('py-1 px-2 leading-[32px] h-8', selectClassName)}
      optionClassName="py-1 px-2 leading-[32px] h-8"
      dropdownClassName="w-32 p-2 gap-1 grid"
      placement="bottom-end"
      prefix={
        <PiCalendarBlank
          className={cn('h-5 w-5 text-gray-500', prefixIconClassName)}
        />
      }
      suffix={
        <PiCaretDownBold className={cn('ml-2 h-3 w-3', suffixIconClassName)} />
      }
      className={cn('w-auto', className)}
    />
  );
}
