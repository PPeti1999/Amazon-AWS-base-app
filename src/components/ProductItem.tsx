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
    <div className="h-64 rounded-lg border-black border my-1 p-2 grid grid-cols-2">
    {product.image && (
      <div className="aspect-w-4 aspect-h-3">
        <ImageComponent path={product.image} altText={product.price.toString()} />
      </div>
    )}
   <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <div >{product.description || "No description available."}</div>
      <ProductItemControls id={product.id} isSignedIn={isSignedIn} />
    </div>
  </div>
  );
};
/*
Egyenletes kártyamagasság: Ha az összes kártyának azonos magasságot szeretnél, adj hozzá egy fix magasságot, például: h 64
rounded-lg: A kártya sarkai lekerekítettek.
border-black border: Fekete szegélyt ad a kártyának.
my-1: A kártya körül függőleges margót ad.
p-4: Kártyán belül 4 egységnyi belső margót állít be.
flex gap-4: Rugalmas elrendezés a képek és szöveg között 4 egységnyi távolsággal.

Reszponzív képbeállítás: Ha a kép méretét is szabályozni szeretnéd:div className="w-1/3">
*/
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
