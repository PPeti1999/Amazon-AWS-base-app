import { type Schema } from "@/../amplify/data/resource";
import ProductItemControls from "@/components/ProductItemControls";
import ImageComponent from "@/components/Image";

type Product = Schema["Product"]["type"];
interface ProductItemProps {
  product: Product;
  isSignedIn: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, isSignedIn }) => {
  return (
    <div className="rounded-lg border border-black flex flex-col justify-between p-4 h-full">
    
      {product.image && (
         <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
          <ImageComponent path={product.image} altText={product.name} />
        </div>
      )}
       
        
       <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <div className="text-gray-600">{product.description || "No description available."}</div>
        <ProductItemControls id={product.id} isSignedIn={isSignedIn} />
      
    </div>
  );
};
/*
const ProductItem: React.FC<ProductItemProps> = ({ product, isSignedIn }) => {
  return (
    <div className="border-black border flex flex-col h-full">
      {product.image && (
         <div className="flex-shrink-0">
          <ImageComponent path={product.image} altText={product.name} />
        </div>
      )}
       <div className="p-4 flex-grow">
        
       <h2 className="text-xl font-bold text-center">{product.name}</h2>
        <div >{product.description || "No description available."}</div>
        <ProductItemControls id={product.id} isSignedIn={isSignedIn} />
      </div>
    </div>
  );
};*/
export default ProductItem;
