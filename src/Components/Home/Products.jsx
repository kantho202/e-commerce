"use client"
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Products = () => {
    const axiosSecure = useAxiosSecure()
    const { data: products = [] } = useQuery({
        // queryKey: ['products'],
        // queryFn: async () => {
        //     const res = await axiosSecure.get("/products")
        //     res.data;
        // }
        queryFn: () =>
      fetch('http://localhost:5000/api/v1/products').then((res) =>
        res.json(),
      ),
    })
    return (
        <div>
            <h1>Our Products <span>{products.length}</span> </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae reiciendis
                similique delectus inventore aut aliquam accusantium numquam consequuntur maxime
                necessitatibus optio, quaerat usamus quis ab et unde?</p>
        </div>
    );
};

export default Products;