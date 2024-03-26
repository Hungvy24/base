import { title } from "process";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "~/api";
import { SProduct } from "~/interface/product";

type Props = {};
const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<SProduct | null>(null);
  useEffect(() => {
    const getProductTT = async () => {
      const { data } = await instance.get(`/products/${id}`);
      setProduct(data);
    };
    getProductTT();
  }, []);
  return (
    <>
      <img src={product?.thumbnail} alt={product?.title} />
      <h5>{product?.title}</h5>
      <h5>{product?.price}</h5>
      <p>{product?.description}</p>
    </>
  );
};

export default ProductDetail;
