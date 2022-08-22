
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Product from './Product';
import ProductsMenu from './ProductsMenu';

function Products(){
    const [productsArr, setProductsArr] = useState([]);
    const [productsFilter, setProductsFilter] = useState([]);
    useEffect(()=>{
        setProductsArr([
            {
                brand: 'Persil',
                model: 'washing powder',
                imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/242978958.jpg',
                price: 499,
                description: 'Стиральный порошок Persil автомат Колор 8.1 кг'
            },
            {
                brand: 'Gartner',
                model: 'ELM-1232 BL',
                imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/175413440.jpg',
                price: 3465,
                description: 'Газонокосарка Gartner ELM-1232 BL'
            },
            {
                brand: 'KATA',
                model: 'КЕ 504',
                imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/185830611.jpg',
                price: 462000,
                description: 'Трактор KATA КЕ 504'
            },
            {
                brand: 'Vitan',
                model: 'Garden swing',
                imgSrc: 'https://content.rozetka.com.ua/goods/images/big/166185237.jpg',
                price: 12058,
                description: 'Гойдалка садова Vitan Графиня Кольорова дрібна карта'
            },
            {
                brand: 'NeoLight NeoKit',
                model: 'FHD PRO Graphite',
                imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/230833782.jpg',
                price: 8165,
                 description:'Комплект відеодомофона NeoLight NeoKit FHD PRO Graphite'
            },
            {
                brand: 'Apple iPhone',
                model: '11',
                imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/37399329.jpg',
                price: 24999,
                 description:'Мобільний телефон Apple iPhone 11 128 GB White Slim Box (MHDJ3) Офіційна гарантія'
            },
            {
                brand: 'Samsung',
                model: 'UE43AU7100UXUA',
                imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/281372973.jpg',
                price: 17899,
                description: 'Телевізор Samsung UE43AU7100UXUA'
            },
            {
                brand: 'Roadstone',
                model: 'NFera RU5 SUV 215/65 R16 102H XL',
                imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/171596723.jpg',
                price: 2862,
                description: 'Roadstone NFera RU5 SUV 215/65 R16 102H XL - Шини Vw Transporter T5, T6 2003'
            },
            {
                brand: 'Segway',
                model: 'Ninebot E45E Black',
                imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/178038064.jpg',
                price: 25999,
                description: 'Електросамокат Segway Ninebot E45E Black (AA.00.0002.22)'
            },
            {
                brand: 'TRINX123',
                model: '1.0 700C 50 см 2021',
                imgSrc: 'https://content.rozetka.com.ua/goods/images/big/184597340.jpg',
                price: 12540,
                description:'Велосипед TRINX Tempo 1.0 700C 50 см 2021 Grey-Blue-White (Tempo1.0(50)GBW)'
            },
            {
                brand: 'Puluz',
                model: 'PU3045',
                imgSrc: 'https://content.rozetka.com.ua/goods/images/big/165616356.jpg',
                price: 444,
                description:'Мікрофон петличка Puluz PU3045 3м (3.5 mm)'
            },
            {
                brand: 'Captain Morgan',
                model: 'Spiced Black',
                imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/22575565.jpg',
                price: 735,
                description:'Ромовий напій Captain Morgan Spiced Black 1 л 40% '
            }
        ])
    }, []);

    function select(event){
        let value = event.currentTarget.value;
        console.log(value);
        setProductsFilter(productsArr.filter(prod => prod.brand === value))
    }

    return <>
        <ProductsMenu select={select} productsArr={productsArr}/>
        <Row xs={1} md={3} className="g-4 py-4 justify-content-center">
            {productsFilter.length ? productsFilter.map(product => <Product key={product.brand} product={product}/>) : productsArr.map(product => <Product key={product.brand} product={product}/>)}
        </Row>
    </>
}

export default Products;