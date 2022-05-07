import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='row row-cols-1 row-cols-md-3 m-5'>

            {
                products.map(product => <Product
                    key={product.id}
                    product={product}>

                </Product>)
            }
        </div>
    );
};

export default Products;