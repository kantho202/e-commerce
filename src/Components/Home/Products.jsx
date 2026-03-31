"use client"
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const Products = () => {
    const axiosSecure = useAxiosSecure()
    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get("/products")
            console.log(res.data)
            return Array.isArray(res.data) ? res.data : res.data.products ?? res.data.data ?? []
        }
    })

    if (isLoading) return <p className="text-center py-10">Loading...</p>
    if (error) return <p className="text-center py-10 text-red-500">Error: {error.message}</p>

    return (
        <section className="py-10 px-5">
            <h2 className="text-3xl font-bold text-center mb-2">Our Products</h2>
            <p className="text-center text-gray-500 mb-8">Total: {products.length} items</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {product.images?.[0]?.url && (
                            <div className="relative w-full h-52">
                                <Image
                                    src={product.images[0].url}
                                    alt={product.title || product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                                <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
