"use client"
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../ui/ProductCard';
import SkeletonCard from '../ui/SkeletonCard';

const Products = () => {
    const axiosSecure = useAxiosSecure()
    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get("/products")
            return Array.isArray(res.data) ? res.data : res.data.products ?? res.data.data ?? []
        }
    })

    if (error) return <p className="text-center py-10 text-red-500">Error: {error.message}</p>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
                ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
                : products.map((product) => <ProductCard key={product._id} product={product} />)
            }
        </div>
    );
};

export default Products;
