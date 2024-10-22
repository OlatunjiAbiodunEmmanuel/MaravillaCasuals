import { Label } from "@/components/ui/label";
import { products } from "@wix/stores";
import React from "react";

interface ProductOptionsProps {
  product: products.Product;
}

const ProductOptions = ({ product }: ProductOptionsProps) => {
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
                  className="peer hidden"
                />
                <Label htmlFor={choice.description} className="flex items-center justify-center min-w-14 cursor-pointer gap-1.5 border rounded-md p-2 peer-checked:border-primary">
                    {choice.description}
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
