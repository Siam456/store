import { cn } from '@/lib/utils';
import { ProductAttribute } from '@/types/product';
import React from 'react';

interface Color {
  name: string;
  hexCode: string;
}

interface Props {
  color: Color;
  productAttribute: ProductAttribute;
  setProductAttribute: React.Dispatch<React.SetStateAction<ProductAttribute>>;
}

function ColorSelector({
  color,
  productAttribute,
  setProductAttribute,
}: Props) {
  return (
    <span>
      <label
        htmlFor={`color-${color.name}`}
        style={{
          display: 'inline-block',
          background: color.hexCode.trim().toLowerCase(),
          border: '2px solid white',
        }}
        className={cn(
          'h-8 w-8 cursor-pointer rounded-full ring-[#6b7280]',
          color.name.trim().toLowerCase() ===
            productAttribute.color.trim().toLowerCase()
            ? 'ring-2'
            : 'hover:ring-2',
        )}
      >
        <input
          id={`color-${color.name}`}
          name={`color-${color.name}`}
          type="radio"
          onClick={() => {
            setProductAttribute((prev) => ({
              ...prev,
              color: color.name,
            }));
          }}
          value={color.name}
          className="h-0 w-0 opacity-0"
        />

        <span className="sr-only">{color.name}</span>
      </label>
    </span>
  );
}

export default ColorSelector;
