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
          <div className="flex flex-col h-full">
            {product.image && (
              <div className="flex-shrink-0">
                <ImageComponent path={product.image} altText={product.name} />
              </div>
            )}
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold text-center">{product.name}</h2>
              <p className="text-sm text-gray-600 text-center">{product.description}</p>
            </div>
            <ProductItemControls id={product.id} isSignedIn={isSignedIn} />
          </div>
        );
      };
      
export default ProductItem;
