import { cookieBasedClient } from "@/utils/amplify-utils";
import { checkIsAuthenticated } from "@/utils/amplify-utils";
import ProductItem from "@/components/ProductItem";

export default async function Home() {
  const isSignedIn = await checkIsAuthenticated();
  const { data: products, errors } =
    await cookieBasedClient.models.Product.list({
      authMode: isSignedIn ? "userPool" : "iam",
    });

  // console.log("products", products);

  return (
    <main className="container">
      <div className="row">
      {products?.map((product) => (
     <div className="col-12 col-sm-6 col-lg-4 mb-4">
       <ProductItem
     key={product.id}
     product={product}
     isSignedIn={isSignedIn}
   />
</div>
    
   
   
 ))}
      </div>
  
</main>
  );
}
