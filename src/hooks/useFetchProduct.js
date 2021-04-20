import { useEffect, useState } from "react";
import { GetProducts } from "../utils/getProducts";

export const useFetchProduct = () => {
  const dataEmpty = [
    {
      id: "N/A",
      marca: "Producto",
      descripcion: "No encontrado",
      valor: null,
      img: "https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
    },
  ];

  const [listProduct, setlistProduct] = useState({
    data: [],
  });

  useEffect(() => {
    GetProducts().then((products) => {
      setlistProduct({
        data: products || dataEmpty,
      });
    });
  }, []);

  return listProduct;
};
