import React from "react";
import ProductList from "../Product/ProductList";
import './Main.css';
import axios from "axios";
import useAsync from "./useAsync";

async function productFetch() {
    const response = await axios.get('https://port-0-elderlyback-ac2nll1a16hv.sel3.cloudtype.app/api/products/router/product/');
    return response.data
}

const Main = () => {
    const state = useAsync(productFetch,[]);
    console.log("123", state);
    const{loading,data,error}=state;
    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return null
    return (
        <div className="mainContainer">
            <div>
                <img src="images/logo512.png" alt="배너이미지1"/>
            </div>
            <div className='product'>
                <h2>신상품</h2>
                <ul>
                    {data.results.map(pro =>
                        <ProductList key={pro.category}
                                     product_name={pro.product_name}
                                     product_des={pro.product_des}
                                     product_stock={pro.product_sotck}
                                     tumb_nail={pro.thumbnail}
                                     price_origin={pro.price_origin}
                                     price_sale={pro.price_sale}
                                     ingredient={pro.ingredient}
                        />)}
                </ul>
            </div>
        </div>
    );
}

export default Main;