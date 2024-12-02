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
    <main className="flex min-h-screen flex-wrap gap-4 justify-center p-24">
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
