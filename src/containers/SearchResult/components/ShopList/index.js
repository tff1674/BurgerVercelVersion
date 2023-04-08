import React, { Component } from 'react'
import ShopItem from '../ShopItem'
import './style.css'

const dataSource = [
    {
        id: 's-1',
        pic:
            'https://img.meituan.net/msmerchant/fd1c444778ad80fb823a6d35f5cd3819391040.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20',
        shop: 'Burger1',
        star: 45,
        price: 106,
        commentQuantity: 20305,
        region: 'new Town',
        category: 'Burger'
    },
    {
        id: 's-2',
        pic:
            'https://img.meituan.net/msmerchant/4d572c74044624a05af25ef3e3fcdef5934234.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20',
        shop: 'Burger2',
        star: 50,
        price: 92,
        quantity: 6715,
        region: 'A Street',
        category: 'Burger'
    },
    {
        id: 's-3',
        pic:
            'https://img.meituan.net/msmerchant/18e8565c5128f990283c84fda52c66c0348452.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20',
        shop: 'Burger3',
        star: 50,
        price: 104,
        quantity: 200,
        region: 'B Street',
        category: 'Burger'
    },
    {
        id: 's-4',
        pic:
            'https://p0.meituan.net/mogu/775f92acf78ae7888a822ff5e46b47af30012.png.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20',
        shop: 'Burger 4',
        star: 50,
        price: 114,
        quantity: 4025,
        region: 'C Street',
        category: 'Burger'
    },
    {
        id: 's-5',
        pic:
            'https://img.meituan.net/msmerchant/4d572c74044624a05af25ef3e3fcdef5934234.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20',
        shop: 'Burger 5',
        star: 50,
        price: 92,
        quantity: 6715,
        region: 'D Street',
        category: 'Burger'
    }
]

class ShopList extends Component {
    render() {
        return (
            <div className="shopList">
                <div className="shopList__list">
                    {dataSource.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <ShopItem data={item} />
                                {index < dataSource.length - 1 ? (
                                    <div className="shopList__divider" />
                                ) : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ShopList
