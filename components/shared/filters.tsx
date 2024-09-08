import { cn } from '@/lib/utils';
import React from 'react';
import { FilterCheckbox, RangeSlider, Title } from '.';
import { Input } from '../ui';

interface Props {
   className?: string;
}

export const Filters : React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
        <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

        {/* Обычные фильтры */}
        <div className="flex flex-col gap-4">
            <FilterCheckbox text='Можно собирать' value='1' />
            <FilterCheckbox text='Новинки' value='2' />
        </div>

        {/* Фильтры по цене */}
        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className='font-bold mb-3'>Цена от и до:</p>
            <div className="flex gap-3 mb-5">
                <Input type='number' placeholder='0' min={0} max={5000} defaultValue={0} />
                <Input type='number' placeholder='5000' min={100} max={5000} defaultValue={500} />
            </div>

            <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
        </div>

        
    </div>
  );
};