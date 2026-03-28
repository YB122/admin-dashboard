import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  async function getProdDetails() {
    console.log(id);

    console.log("asd");
    let res = await fetch(
      `https://nti-ecommerce.vercel.app/api/v1/products/${id}`,
    );
    let data = await res.json();
    console.log(data);
    setProduct(data.Product);
  }
  useEffect(() => {
    getProdDetails();
  }, [id]);
  return (
    <section className="min-h-screen bg-neutral-secondary-soft px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-default bg-neutral-primary shadow-sm">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8 lg:p-10">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl bg-neutral-secondary-medium">
                <img
                  src={product?.imageCover}
                  alt={product?.title}
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {product?.images?.map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-default bg-neutral-secondary-medium"
                  >
                    <img
                      src={img}
                      alt={`${product?.title}-${index}`}
                      className="h-32 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <p className="mb-2 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Product Details
                </p>
                <h1 className="text-3xl font-bold text-heading md:text-4xl">
                  {product?.title}
                </h1>
              </div>

              <p className="mb-6 text-base leading-7 text-body md:text-lg">
                {product?.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-default bg-neutral-secondary-medium p-4">
                  <p className="mb-1 text-sm font-medium text-body">Price</p>
                  <p className="text-2xl font-bold text-heading">
                    ${product?.price}
                  </p>
                </div>

                <div className="rounded-2xl border border-default bg-neutral-secondary-medium p-4">
                  <p className="mb-1 text-sm font-medium text-body">Stock</p>
                  <p className="text-2xl font-bold text-heading">
                    {product?.stock}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
