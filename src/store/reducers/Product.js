const initialState = {
  products: [
    {
      id: 1,
      name: "Sunrise Acai Bowl",
      price: 299,
      avatar: "/images/products/1.png",
      category: 'Acai bowls'
    },
    {
      id: 2,
      name: "Chocolate Bowl Chocolate Bowl Chocolate Bowl Chocolate Bowl Chocolate Bowl",
      price: 199,
      avatar: "/images/products/2.png",
      category: 'Acai bowls1'
    },
    {
      id: 3,
      name: "Sunset Acai Bowl",
      price: 399,
      avatar: "/images/products/3.png",
      category: 'Acai bowls1'
    },
    {
      id: 4,
      name: "Sunset Acai Bowl",
      price: 123,
      avatar: "/images/products/4.png",
      category: 'Acai bowls'
    },
    {
      id: 5,
      name: "Sunset Acai Bowl",
      price: 200,
      avatar: "/images/products/5.png",
      category: 'Acai bowls'
    },
  ]
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProductReducer;
