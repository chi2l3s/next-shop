import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    title: string;
   className?: string;
}

export const CheckboxFiltersGroup : React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}></div>
  );
};