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
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-24">
    {products?.map((product) => (
      <div className="h-96 flex flex-col border border-black rounded shadow-lg">
        <ProductItem
          key={product.id}
          product={product}
          isSignedIn={isSignedIn}
        />
      </div>
    ))}
  </main>
  
  );
}
