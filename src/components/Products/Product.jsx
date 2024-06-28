// import { useEffect, useState } from "react";
import { API } from "../../api/api";
import ProductItem from "./PorductItem";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   const getProductData = async () => {
  //     try {
  //       const res = await fetch(API);
  //       if (!res.ok) throw new Error("Products not found!");
  //       const data = await res.json();
  //       setItem(data);
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   };
  //   getProductData();
  // }, []);
  // console.log(item);

  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch(API).then((res) => res.json()),
    staleTime: 60000,
  });

  // if (isPending) return <Spinner className=" flex justify-center my-5" />;

  // if (error) return "Products not found" + error.message;

  return (
    <>
      <h1 className="text-center text-5xl my-10">Products Item</h1>
      <div className=" flex flex-wrap gap-6 justify-around  mt-10">
        <ProductItem data={data} isPending={isPending} error={error} />
      </div>
    </>
  );
};

export default Product;
