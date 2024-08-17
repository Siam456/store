import { cn } from '@/lib/utils';
import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

export default function Colors({
  colors,
  control,
  watch,
}: {
  colors: { name: string; hexCode: string; imageUrl: string }[];
  control: Control<FieldValues, any>;
  watch: any;
}) {
  return (
    <span>
      {colors?.length > 0 && (
        <div className="relative flex flex-wrap justify-between py-2">
          <div>
            <div className="mb-2 text-sm">
              Color:{' '}
              <span className="capitalize text-gray-400">
                {watch('color') || ''}
              </span>
            </div>
            <div className="flex gap-2">
              {colors.map(
                (
                  color: { name: string; hexCode: string },
                  colorIdx: number,
                ) => (
                  <div key={`${colorIdx + 1}`}>
                    <Controller
                      name="color"
                      control={control}
                      render={({ field }) => (
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
                              field.value.trim().toLowerCase()
                              ? 'ring-2'
                              : 'hover:ring-2',
                          )}
                        >
                          <input
                            id={`color-${color.name}`}
                            type="radio"
                            {...field}
                            value={color.name}
                            className="h-0 w-0 opacity-0"
                          />
                        </label>
                      )}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="flex items-center">
            {colors.map(
              (
                color: {
                  name: string;
                  imageUrl: string;
                },
                colorIdx,
              ) => (
                <div className="overflow-hidden" key={`${colorIdx + 1}`}>
                  {color.imageUrl && color.name === watch('color') && (
                    <img
                      src={color.imageUrl}
                      alt={color.name}
                      className="block max-h-24 max-w-24 rounded-lg"
                    />
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </span>
  );
}
