import React from "react";
import ProductList from "./ProductList";
import { Link } from 'react-router-dom';
import axios from "axios";
import useAsync from "../Main/useAsync";

async function productFetch() {
    const response = await axios.get('https://port-0-elderlyback-ac2nll1a16hv.sel3.cloudtype.app/api/products/router/product/?product_name=&category=1');
    return response.data
}

const Main = () => {
    const state = useAsync(productFetch,[])
    console.log(state)
    const{loading,data,error}=state;
    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return null
    return (
        <div className="mainContainer">
            <div>
                <img className='banner' src="https://jinjiyu23.github.io/hackerton-FE//images/logo.png" alt="배너이미지1"/>
            </div>
            <div className='product'>
                <ul className="categories">
                    <li className="category">
                        <Link to='/' className="topLink">
                            전체보기
                        </Link>
                    </li>
                    <li className='category'>
                        <Link to='/cate1' className="topLink">
                            음식
                        </Link>
                    </li>
                    <li className='category'>
                        <Link to='/cate2' className="topLink">
                            리빙
                        </Link>
                    </li>
                    <li className='category'>
                        <Link to='/cate3' className="topLink">
                            교육/문화
                        </Link>
                    </li>
                </ul>
                <></>
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