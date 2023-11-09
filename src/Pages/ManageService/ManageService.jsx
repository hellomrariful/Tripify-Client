import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userEmail = user?.email;

  console.log(cart);

  useEffect(() => {
    if (userEmail) {
      fetch(`https://tripify-server-cyan.vercel.app/cart/${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          // Set quantity to 1 by default
          // data = data.map((product) => ({ ...product, quantity: 1 }));
          setCart(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
          setIsLoading(false);
        });
    }
  }, [userEmail]);

  const checkout = (e) => {
    e.preventDefault();
    Swal.fire(
      "Congratulation!",
      "You Successfully buy your cart Product!",
      "success"
    );
  };

  const handleDelete = (id, productName) => {
    Swal.fire({
      title: "Confirm Deletion!",
      text: `Are you sure to delete ${productName}? form cart`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tripify-server-cyan.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = cart.filter((product) => product._id !== id);
              setCart(remaining);
            }
          });
      }
    });
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) return; // Quantity can't be negative
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
  };

  return (
    <div className=" ">
      {isLoading ? ( // Check if data is still loading
        <div className="flex justify-center items-center h-screen">
          <Oval
            height={50}
            width={50}
            color="#FF444A"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#FF444A"
            strokeWidth={4}
            strokeWidthSecondary={2}
          />
        </div>
      ) : cart.length > 0 ? (
        <div className="container mx-auto md:mt-20">
          <div className="md:flex my-10">
            <div className="md:w-3/4 rounded md:px-10 px-3 py-10 ">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl font-heading">
                  Your Cart
                </h1>
                <h2 className="font-semibold text-2xl font-heading">
                  {cart.length} {cart.length === 1 ? "Item" : "Items"} Added
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Total
                </h3>
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                  <Oval
                    height={50}
                    width={50}
                    color="#FF444A"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#FF444A"
                    strokeWidth={4}
                    strokeWidthSecondary={2}
                  />
                </div>
              ) : (
                cart.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center hover-bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex md:w-2/5 w-36">
                      <div className="w-20">
                        <img className="h-24" src={product.photo} alt="" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold">{product.name}</span>
                        <span className="text-primary">
                          <Link to={`/${product.brand}`}>{product.brand}</Link>
                        </span>

                        <Link
                          className="font-bold text-2xl text-red-500 hover-text-red-500 text-red text-center"
                          onClick={() =>
                            handleDelete(product._id, product.name)
                          }
                        >
                          <AiFillDelete></AiFillDelete>
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <button
                        className="text-2xl"
                        onClick={() =>
                          handleQuantityChange(
                            product._id,
                            product.quantity + 1
                          )
                        }
                      >
                        +
                      </button>

                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={product.quantity}
                        readOnly
                      />
                      <button
                        className="text-3xl"
                        onClick={() =>
                          handleQuantityChange(
                            product._id,
                            product.quantity - 1
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${product.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${product.price * product.quantity}
                    </span>
                  </div>
                ))
              )}
            </div>
            <div id="summary" className="md:w-1/4 md:px-8 py-10 px-3">
              <h1 className="font-semibold text-2xl border-b pb-8 text-center font-heading">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span className="font-semibold text-sm">
                  $
                  {cart?.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  )}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-primaryColor rounded hover-bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>
                    $
                    {cart.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    ) + 10}
                  </span>
                </div>
                <button
                  onClick={checkout}
                  className="bg-primaryColor rounded font-semibold hover-bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid justify-center items-center place-content-center md:mx-40 md:mt-60 mt-32">
          <h1 className="text-center text-2xl font-semibold mb-1">
            Your cart is currently empty!!
          </h1>
          <p className="text-center text-lg text-descriptionColor">
            Before proceeding to checkout, you must add some cart to your cart.
            You will find a lot of interesting cart on our
            <Link to="/shop">
              {" "}
              <span className=" text-primaryColor font-bold">Shop</span>
            </Link>{" "}
            page.
          </p>
          <Link className="text-center" to={"/shop"}>
            <button className="bg-primaryColor py-4 px-6 rounded-lg mt-5 text-white ">
              Return To Shop
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
