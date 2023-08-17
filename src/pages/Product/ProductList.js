import React from "react";
import { Link } from 'react-router-dom';

const ProductList = ( {product_name, category, product_des, ingredient,price_origin, price_sale, product_stock, tumb_nail}) => {
    return (
        <li>
            <Link to={`/detailView/${category}`}>
                <img src={tumb_nail} alt="" />
                <h3>{product_name}</h3>
                <p>재료 : {ingredient}</p>
                <p>원가 : {price_origin}원</p>
                <p>제공 가격 : {price_sale}원</p>
                <p>설명 : {product_des}</p>
            </Link>
        </li>
    );
};

export default ProductList;