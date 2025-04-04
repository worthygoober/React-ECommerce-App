import { Product, Category } from "../../types/types";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Home.css';
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories } from "../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setProducts, setSelectedCategory } from '../../redux/productSlice';
import { useEffect } from "react";

const Home: React.FC = () => {
    const products = useSelector((state: RootState) => state.product.products);
    const selectedCategory = useSelector((state: RootState) => state.product.selectedCategory);
    const dispatch = useDispatch<AppDispatch>();

    const {data: productsData} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const {data: categories} = useQuery({
        queryKey: ['category'],
        queryFn: fetchCategories,
    });

    useEffect(() => {
        if (productsData) {
            dispatch(setProducts(productsData.data));
        }
    }, [dispatch, productsData])

    const getFilteredProducts = () => {
        if (!products) return [];
        if (selectedCategory) {
            return products?.filter(
                (product: Product) => product.category === selectedCategory
            );
        }
        return products;
    };

    const filteredProducts = getFilteredProducts();

    return(
        <>
        <div>
            <select onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
                value={selectedCategory || ''}
                >
                <option value="">All Categories</option>
                {categories?.data.map((category: Category) => (
                    <option value={category} key={category}>
                        {category}
                    </option>
                ))}
            </select>

            <button onClick={() => {dispatch(setSelectedCategory(''))}}>
                Reset category
            </button>

            <div className="container">
                {filteredProducts.map((product: Product) => (
                <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </div>
        </>
    )
};

export default Home;