  "use client";
import Image from "next/image";
  import React, { useState } from "react";

  const ProductCardGrid = () => {
    const [cart, setCart] = useState<
      { product: { name: string; price: number; category: string; rating: number }; quantity: number }[]
    >([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const products = [
      {
                    name: "Track suit",
                    price: 350,
                    discountPrice: 400,
                    category: "Clothing",
                    image:
                      "https://leftoversden.com/cdn/shop/files/WhatsAppImage2024-11-19at21.41.21_7c71846b.jpg?v=1732091152&width=533",
                    rating: 4,
                  },
                  {
                    name: "Skechers ",
                    price: 240,
                    discountPrice: 300,
                    category: "Footwear",
                    image:
                      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/AIR+MAX+270.png",
                    rating: 5,
                  },
                  {
                    name: "Cosmetics",
                    price: 79,
                    discountPrice: 100,
                    category: "Products",
                    image:
                      "https://www.lifevisioncosmetics.com/public/Blogs/HFJ1BBsY2RXXB1N85BD5oA2tM0CiLkmPkmih4Y6G.jpg",
                    rating: 4,
                  },
                  {
                    name: "Skincare",
                    price: 450,
                    discountPrice: 530,
                    category: "Products",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQv3-UE30ahGuM6sR6CPdedUmLtJGt5n4GA&s",
                    rating: 5,
                  },
                  {
                    name: "Gurka pants",
                    price: 499,
                    discountPrice: 0,
                    category: "pants",
                    image:
                      "https://www.njmens.com/cdn/shop/files/Men-Metallic-Grey-Gurkha-Pant-in-Pakistan.jpg?v=1727820107&width=2048",
                    rating: 4,
                  },
                  {
                    name: "Hand bags",
                    price: 670,
                    discountPrice:700,
                    category: "Bags",
                    image: "https://m.media-amazon.com/images/I/51BN9kwbrcL._AC_SY395_.jpg",
                    rating: 4,
                  },
                  {
                    name: "Girl's outfit",
                    price: 249,
                    discountPrice:300,
                    category: "Clothing",
                    image:
                      "https://www.dressyzone.com/cdn/shop/files/p16711-embroidered-chiffon-party-dress_e81d585a-9989-4fad-ab5c-c162d3ea83a4_580x.jpg?v=1720073390",
                    rating: 5,
                  },
                  {
                    name: "Sandal",
                    price: 720,
                    discountPrice:800,
                    category: "Girls",
                    image: "https://m.media-amazon.com/images/I/41eTCch0ViL._SL500_.jpg",
                    rating: 4,
                  },
                  {
                    name: "SAMSUNG Note 10",
                    price: 2400,
                    discountPrice:3000,
                    category: "Mobiles",
                    image:
                      "https://www.mcsteve.com/wp-content/uploads/2019/09/note-10-5-1.jpg",
                    rating: 3,
                  },
                  {
                    name: "Hoddie",
                    price: 420,
                    discountPrice: 500,
                    category: "Hoddie",
                    image: "https://m.media-amazon.com/images/I/61ae0I8fE4L._AC_SX569_.jpg",
                    rating: 4,
                  },
                  {
                    name: "Shoes",
                    price: 300,
                    discountPrice: 400,
                    category: "Formal",
                    image:
                      "https://toffpark.com/wp-content/uploads/2023/01/Oxford-Style-Breathable-Leather-Formal-Shoe-Brown_3.jpg",
                    rating: 3,
                  },
                  {
                    name: "IQBAL",
                    price: 1499,
                    discountPrice: 1500,
                    category: "Perfumes",
                    image:
                      "https://scentsnstories.pk/cdn/shop/files/Iqbal.webp?v=1730373382&width=900",
                    rating: 4,
                  },
                  {
                    name: "Sun Glasses",
                    price: 249,
                    discountPrice: 300,
                    category: "Glasses",
                    image:
                      "https://shop6.pk/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-23-at-3.50.52-PM.jpeg",
                    rating: 3,
                  },
                  {
                    name: "Jewelery",
                    price: 100,
                    discountPrice: 100,
                    category: "Jewelery",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4WptwZzPJlL03i6qoHSQRuKSwCFL8Xp_qIBXAutAsXym3K2WLzfhX27AKgwn0F78whA&usqp=CAU",
                    rating: 5,
                  },
                  {
                    name: "Airpod Pro",
                    price: 900,
                    discountPrice: 1000,
                    category: "Wireless Airpod",
                    image:
                      "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg",
                    rating: 5,
                  },
                  {
                    name: "Shirt",
                    price: 80,
                    category: "Formal",
                    image: "https://sellercenter.padmazon.com.bd/assets/images/product-image/10af099b4772f3ff924936634c1cd365.jpeg",
                    rating: 4,
                    discountPrice: 100
                  },
    ];

    const renderStars = (rating: number) => {
      return "★".repeat(rating) + "☆".repeat(5 - rating);
    };

    const handleAddToCart = (product: { name: string; price: number; category: string; rating: number }) => {
      const existingProduct = cart.find((item) => item.product.name === product.name);
      if (existingProduct) {
        setCart(
          cart.map((item) =>
            item.product.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { product, quantity: 1 }]);
      }
    };

    const handleIncreaseQuantity = (productName: string) => {
      setCart(
        cart.map((item) =>
          item.product.name === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    };

    const handleDecreaseQuantity = (productName: string) => {
      setCart(
        cart.map((item) =>
          item.product.name === productName && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };

    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

    const calculateTotalPrice = () =>
      cart.reduce((total, item) => total + item.quantity * item.product.price, 0);

    return (
      <div id="products" className="relative text-center p-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://www.shutterstock.com/image-vector/shopping-seamless-pattern-line-art-260nw-1708466278.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            opacity: 0.1,
          }}
        />

        <h1 className="font-bold text-4xl mb-4 text-gray-700 z-10 relative">Products</h1>
        <h2 className="text-xl font-bold text-black z-10 relative">Hurry Up! Order Now</h2>

        <button
          onClick={toggleCart}
          className="relative top-[10px] px-10 bg-gray-700 text-white p-2 rounded-xl shadow-lg z-50 hover:bg-gray-900"
        >
          Your Cart🛒({cart.length})
        </button>
        <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-72 bg-gray-300  cursor-pointer shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
               height={400}
               width={400}
              />
              <div className="p-4 flex flex-col space-y-2 text-left">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <div className="text-yellow-500">{renderStars(product.rating)}</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-semibold text-black">${product.price}</p>
                  <del className="text-sm text-red-700 font-semibold">${product.discountPrice}</del>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Cart Icon Button */}

        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-96 p-6 rounded-lg">
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-xl font-bold">Your Cart 🛒</h2>
                <button onClick={toggleCart} className="text-red-500 font-bold">
                  ×
                </button>
              </div>
              {cart.length === 0 ? (
                <p className="mt-4 text-gray-600">Your cart is empty</p>
              ) : (
                <>
                  <ul className="mt-4 space-y-4">
                    {cart.map((item, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{item.product.name}</span>
                          <span className="text-sm text-gray-600">
                            {item.product.category}
                          </span>
                          <span className="text-yellow-500">
                            {renderStars(item.product.rating)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDecreaseQuantity(item.product.name)}
                            className="px-2 py-1 bg-gray-300 rounded"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.product.name)}
                            className="px-2 py-1 bg-gray-300 rounded"
                          >
                            +
                          </button>
                        </div>
                        <span>${item.quantity * item.product.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-right">
                    <p className="font-bold text-lg">
                      Total: ${calculateTotalPrice()}
                    </p>
                    <button
                      onClick={() => alert("Proceeding to Checkout")}
                      className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Checkout  
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  export default ProductCardGrid;
