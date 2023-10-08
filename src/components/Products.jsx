import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

export function Products({ products }) {
  const { addToCart, cart , removeFromCart} = useCart();

  const checkedProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className=" w-full">
      <h1>Estos son los prouctos</h1>
      <ul
        className="gap-10 w-2/4 m-auto"
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(200px , 1fr))",
        }}
      >
        {products.map((product) => {
          const isProductInCart = checkedProductInCart(product);
          return (
            <li
              className="border-2 border-white bg-neutral-900 flex flex-col items-center rounded-xl p-2"
              key={product.id}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-28 w-auto aspect-video object-cover mb-4"
              />
              <div className="mb-4">
                <strong>{product.title}</strong> - {" "}
                <strong>{product.price}$</strong>
              </div>
              <button
                onClick={() => isProductInCart
                  ? removeFromCart(product) 
                  :addToCart(product)}
                className={` p-1 bg-neutral-700 rounded-md ${isProductInCart ? 'bg-red-500' : 'bg-blue-500'}` }
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                {/* <AddToCartIcon className="text-white" /> */}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
