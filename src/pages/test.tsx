// import { useEffect, useState } from 'react';

// type Color = {
//   name: string;
//   hexCode: string;
//   imageURL: string;
// };

// type ProductAttributes = {
//   [key: string]: string[];
// };

// type Variant = {
//   id: string;
//   storage: string;
//   color: string;
//   sim_variant: string;
//   productAttributes: {
//     [key: string]: string;
//   };
//   price: number;
//   quantity: number;
//   discount: number;
// };

// type Product = {
//   name: string;
//   brand: string;
//   basePrice: number;
//   currency: string;
//   description: string;
//   discount: number;
//   productAttributes: ProductAttributes;
//   colors: Color[];
//   variants: Variant[];
// };

// const productData = {
//   product: {
//     name: 'Apple iPhone 15 Pro',
//     brand: 'Apple',
//     basePrice: 136000,
//     currency: 'BDT',
//     description:
//       'Apple iPhone 15 Pro with Apple International Warranty Claim Support.',
//     discount: 5, // Discount on the main product in percentage
//     productAttributes: {
//       storage: ['128GB', '256GB', '512GB', '1TB'],
//       variant: [
//         '1 Physical SIM + 1 eSIM UK/Canada',
//         '1 Physical SIM + 1 eSIM USA',
//       ],
//     },
//     colors: [
//       {
//         name: 'Blue Titanium',
//         hexCode: '#4A90E2',
//         imageURL: 'https://example.com/images/blue-titanium.png',
//       },
//       {
//         name: 'Black Titanium',
//         hexCode: '#000000',
//         imageURL: 'https://example.com/images/black-titanium.png',
//       },
//     ],
//     variants: [
//       // {
//       //   id: '1',
//       //   storage: '128GB',
//       //   color: 'Blue Titanium',
//       //   sim_variant: '1 Physical SIM + 1 eSIM UK/Canada',
//       //   productAttributes: {
//       //     variant: '1 Physical SIM + 1 eSIM UK/Canada',
//       //     storage: '128GB',
//       //   },
//       //   price: 126000,
//       //   quantity: 5,
//       // },
//       // {
//       //   id: '2',
//       //   storage: '256GB',
//       //   color: 'Blue Titanium',
//       //   sim_variant: '1 Physical SIM + 1 eSIM UK/Canada',
//       //   productAttributes: {
//       //     variant: '1 Physical SIM + 1 eSIM UK/Canada',
//       //     storage: '256GB',
//       //   },
//       //   price: 136000,
//       //   quantity: 10,
//       // },
//       // {
//       //   id: '3',
//       //   storage: '256GB',
//       //   color: 'Black Titanium',
//       //   sim_variant: '1 Physical SIM + 1 eSIM UK/Canada',
//       //   productAttributes: {
//       //     variant: '1 Physical SIM + 1 eSIM UK/Canada',
//       //     storage: '256GB',
//       //   },
//       //   price: 119700,
//       //   quantity: 10,
//       // },
//       {
//         id: '4',
//         color: 'Blue Titanium',
//         productAttributes: {
//           storage: '512GB',
//         },
//         price: 136000,
//         quantity: 10,
//       },
//       {
//         id: '5',
//         color: 'Blue Titanium',
//         productAttributes: {
//           storage: '512GB',
//         },
//         price: 119700,
//         quantity: 10,
//       },
//     ],
//   },
// };

// function updateProductDetails(
//   selectedColor: Color,
//   selectedProductAttributes: ProductAttributes,
//   product: Product,
// ) {
//   // Find the variant that matches both the selected color and productAttributes
//   console.log(selectedProductAttributes);
//   // selectedProductAttributes = {
//   //   storage: '128GB',
//   // };
//   // product.variants = {
//   //   id: '4',
//   //   color: 'Blue Titanium',
//   //   productAttributes: {
//   //     storage: '512GB',
//   //   },
//   //   price: 136000,
//   //   quantity: 10,
//   // }
//   console.log(product.variants);

//   const selectedVariant = product.variants.find((variant) =>
//     // variant.color === selectedColor.name &&
//     Object.keys(selectedProductAttributes).every(
//       (key) =>
//         variant.productAttributes[key] === selectedProductAttributes[key],
//     ),
//   );

//   console.log(selectedVariant);

//   // If a matching variant is found, use its details; otherwise, use the main product's base price
//   const variantPrice = selectedVariant
//     ? selectedVariant.price
//     : product.basePrice;
//   const discount = selectedVariant
//     ? selectedVariant.discount || product.discount || 0
//     : product.discount || 0;
//   const salePrice = variantPrice - variantPrice * (discount / 100);
//   const quantity = selectedVariant ? selectedVariant.quantity : 0;

//   return {
//     price: variantPrice,
//     salePrice,
//     quantity,
//     discount,
//   };
// }

// function ProductDetails() {
//   const { product } = productData as unknown as { product: Product };

//   // Initialize states
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedProductAttributes, setSelectedProductAttributes] = useState({
//     width: [product.variants[0].productAttributes.width],
//     height: [product.variants[0].productAttributes.height],
//     depth: [product.variants[0].productAttributes.depth],
//     weight: [product.variants[0].productAttributes.weight],
//   });

//   const [productDetails, setProductDetails] = useState({
//     price: product.basePrice,
//     salePrice: 0,
//     quantity: 0,
//     discount: product.discount,
//   });

//   useEffect(() => {
//     // Update product details whenever the selected color or productAttributes change
//     const updatedDetails = updateProductDetails(
//       selectedColor,
//       selectedProductAttributes,
//       product,
//     );
//     setProductDetails(updatedDetails);
//   }, [selectedColor, selectedProductAttributes]);

//   const handleColorChange = (color: Color) => {
//     setSelectedColor(color);
//   };

//   const handleDimensionChange = (
//     dimensionType: keyof ProductAttributes,
//     value: string,
//   ) => {
//     setSelectedProductAttributes((prev) => ({
//       ...prev,
//       [dimensionType]: [value],
//     }));
//   };

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>Original Price: {productDetails.price} BDT</p>
//       <p>Discount: {productDetails.discount}%</p>
//       <p>Sale Price: {productDetails.salePrice} BDT</p>
//       <p>Quantity Available: {productDetails.quantity}</p>

//       <div>
//         <h3>Select Color:</h3>
//         <div style={{ display: 'flex' }}>
//           {product.colors.map((color) => (
//             <button
//               key={color.name}
//               onClick={() => handleColorChange(color)}
//               style={{
//                 cursor: 'pointer',
//                 border:
//                   selectedColor.name === color.name
//                     ? '2px solid black'
//                     : '1px solid gray',
//                 padding: '10px',
//                 marginRight: '10px',
//                 textAlign: 'center',
//               }}
//             >
//               <div
//                 style={{
//                   backgroundColor: color.hexCode,
//                   width: '50px',
//                   height: '50px',
//                   marginBottom: '5px',
//                 }}
//               />

//               <p>{color.name}</p>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h3>Select ProductAttributes:</h3>
//         {Object.keys(product.productAttributes).map((attribute) => (
//           <div key={attribute}>
//             <h4>{attribute}</h4>
//             {product.productAttributes[attribute].map((value) => (
//               <button
//                 key={value}
//                 onClick={() =>
//                   setSelectedProductAttributes((prev) => ({
//                     ...prev,
//                     [attribute]: value,
//                   }))
//                 }
//                 style={{
//                   cursor: 'pointer',
//                   border: selectedProductAttributes[attribute]?.includes(value)
//                     ? '2px solid black'
//                     : '1px solid gray',
//                   padding: '10px',
//                   marginRight: '10px',
//                   textAlign: 'center',
//                 }}
//               >
//                 {value}
//               </button>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ProductDetails.layout = 'base';

// export default ProductDetails;

import React from 'react';

export default function Test() {
  return <div>test</div>;
}
