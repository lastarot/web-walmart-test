// import axios from "axios";

export const GetProducts = async () => {
  // axios
  //   .get("https://app-walmart-test.herokuapp.com/search")
  //   .then((result) => {
  //     console.log("result --> ", result.data.data);
  //   })
  //   .catch(console.log);

  const resp = await fetch("https://app-walmart-test.herokuapp.com/search");
  const { data } = await resp.json();

  const products = data.map((product) => {
    return {
      id: product._id,
      marca: product.brand,
      descripcion: product.description,
      valor: product.price,
      img: "https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
    };
  });

  return products;
};
