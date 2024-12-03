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
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
  {products?.map((product) => (
    <ProductItem
      key={product.id}
      product={product}
      isSignedIn={isSignedIn}
    />
  ))}
</main>
  );
}
/*
flex: Rugalmas elrendezést hoz létre.
min-h-screen: Legalább a teljes képernyőmagasságot foglalja el.
flex-col: Az elemeket oszlopba rendezi (függőlegesen helyezi el).
justify-between: A tartalmat a fő tengely mentén helyezi el úgy, hogy a kezdő és a végpont között legyen egyenletesen kitöltött tér.
p-24: 24 egységnyi belső margót ad minden oldalra.
*/