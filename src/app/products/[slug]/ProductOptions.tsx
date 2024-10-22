import { Label } from "@/components/ui/label";
import { products } from "@wix/stores";
import React from "react";

interface ProductOptionsProps {
  product: products.Product;
  selectedOptions: Record<string, string>
  setSelectedOptions: (options: Record<string, string>)=> void;
}

const ProductOptions = ({ product,selectedOptions,setSelectedOptions }: ProductOptionsProps) => {
  return (
    <div className="space-y-2.5">
      {product.productOptions?.map((option) => (
        <fieldset key={option.name} className="space-y-1.5">
          <legend>
            <Label asChild>
              <span>{option.name}</span>
            </Label>
          </legend>
          <div className="flex flex-wrap items-center gap-1.5">
            {option.choices?.map((choice) => (
              <div key={choice.description}>
                <input
                  type="radio"
                  id={choice.description}
                  name={option.name}
                  value={choice.description}
                  checked={selectedOptions[option.name || ""]=== choice.description}
                  onChange={()=>setSelectedOptions({
                    ...selectedOptions,
                    [option.name || ""]:choice.description || ""
                  })}
                  className="peer hidden"
                />
                <Label htmlFor={choice.description} className="flex items-center justify-center min-w-14 cursor-pointer gap-1.5 border rounded-md p-2 peer-checked:border-primary">
                    {
                        option.optionType === products.OptionType.color && (
                            <span 
                            className="size-4 rounded-full border"
                            style={{ backgroundColor: choice.value }}
                            />
                        )
                    }
                    <span>{choice.description}</span>
                </Label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default ProductOptions;
