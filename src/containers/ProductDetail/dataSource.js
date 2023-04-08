const dataSource = [
    {
        id: 'p-1',
        shopId: 's-1',
        shop: 'Five Guys',
        tag: 'walk-in',
        picture:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F2872639756%2FTB26fTjgP3z9KJjy0FmXXXiwXXa_%21%212872639756-0-daren.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682960745&t=286d78abea749064b9fd9cfa2e29bef4',
        product: 'Burger with different tastes',
        saleDesc: 'sold 6034',
        score: 4.3,
        comment: 'it tastes good',
        distance: '886m',
        businessHour: '10:00am - 17:00pm',
        location: '1 Infinite Loop Cupertino CA 95014',
        averagePrice: '$20',
        phoneNumber: '67-38999876',
        specialty: 'traditional Burger',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    },
    {
        id: 'p-2',
        shopId: 's-2',
        shop: 'The Habit Burger Grill',
        tag: 'walk-in',
        picture:
            'https://img1.baidu.com/it/u=995758655,2295239896&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=647',
        product: 'Burger with different tastes',
        saleDesc: 'sold 15500',
        score: 4.6,
        comment: 'i like it',
        distance: '2.0km',
        businessHour: '7:00am - 9:00pm',
        location: '1101 S Main St APT 203 Milpitas CA 95035',
        averagePrice: '$25',
        phoneNumber: '67-3822901',
        specialty: 'different tastes',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    },
    {
        id: 'p-3',
        shopId: 's-3',
        shop: 'S~Shake',
        tag: 'walk-in',
        picture:
            'https://img0.baidu.com/it/u=1307352708,887741224&fm=253&fmt=auto&app=138&f=JPEG?w=556&h=500',
        product: 'Burger with different tastes',
        saleDesc: 'sold 88719',
        score: 4.9,
        comment: 'i always bring my family to this restaurant',
        distance: '1.8km',
        businessHour: '9:00am - 16:00pm',
        location: '2654 valley view Ln ste#189 farmers branch, tx 77893',
        averagePrice: '$29',
        phoneNumber: '67-83390202',
        specialty: 'traditional Burger',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    },
    {
        id: 'p-4',
        shopId: 's-4',
        shop: 'Burger Boom',
        tag: 'walk-in',
        picture:
            'https://img0.baidu.com/it/u=1916726840,1277486005&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        product: 'Burger with different tastes',
        saleDesc: 'sold 53548',
        score: 5.0,
        comment: 'the burger is fresh',
        distance: '2.4km',
        businessHour: '8:00am - 19:00pm',
        location: '521 60th Street 2nd Floor Brooklyn, N.Y. 100',
        averagePrice: '$20',
        phoneNumber: '67-92001102',
        specialty: 'service is perfect',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    },
    {
        id: 'p-5',
        shopId: 's-5',
        shop: 'MacDonald',
        tag: 'walk-in',
        picture:
            'https://p1.meituan.net/deal/a5d9800b5879d596100bfa40ca631396114262.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0',
        product: 'Burger with different tastes',
        saleDesc: 'sold 23976',
        score: 4.6,
        comment: 'i like it',
        distance: '60m',
        businessHour: '8:00am - 17:00pm',
        location: 'No.1 Zhongyi Rd,Yuhua district, ChangshaCity,Hunan Prov,China',
        averagePrice: '$20',
        phoneNumber: '67-38999876',
        specialty: 'cheap but delicious',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    },
    {
        id: 'p-6',
        shopId: 's-6',
        shop: 'KFC',
        tag: 'walk-in',
        picture:
            'https://i2.chuimg.com/9866f27fa2614f199836a4457b8beff7_1920w_2880h.jpg?imageView2/2/w/660/interlace/1/q/90',
        product: 'Burger with different tastes',
        saleDesc: 'sold 3976',
        score: 4.6,
        comment: 'the burger is cheap but delicious',
        distance: '800m',
        averagePrice: '$20',
        phoneNumber: '67-2329290',
        specialty: 'traditional Burger',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    },
    {
        id: 'p-7',
        shopId: 's-7',
        shop: 'Burger Cheers',
        tag: 'walk-in',
        picture:
            'https://pic.5tu.cn/uploads/allimg/1508/151043353110.jpg',
        product: 'Burger with different tastes',
        saleDesc: 'sold 89007',
        score: 4.9,
        comment: 'the service is good',
        distance: '100m',
        averagePrice: '$20',
        phoneNumber: '67-38999876',
        specialty: 'free for drink',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    },
    {
        id: 'p-8',
        shopId: 's-8',
        shop: 'Burger Cheers',
        tag: 'walk-in',
        picture:
            'https://img.cc0.cn/pixabay/201910211929315861.jpg!860.jpg',
        product: 'Burger with different tastes',
        saleDesc: 'sold 76660',
        score: 4.9,
        comment: 'i like it',
        distance: '1.6km',
        averagePrice: '$20',
        phoneNumber: '67-38999876',
        specialty: 'traditional Burger',
        comment: [
            {name: 'zZoe', 
            avatar: 'https://p0.meituan.net/userheadpicbackend/7ad7e0f6952ff6927939150b872d82e1165920.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0', 
            content: 'Everyone, come and check in this hamburger restaurant. The taste is really good and delicious! Everyone, come and clock in!'},
            {
                name: 'pcyyyy',
                avatar: 'https://p0.meituan.net/userheadpicbackend/430244550d0638e43938d6d05ae27bfc633632.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Today, I went out with friends and found a delicious hamburger restaurant! This hamburger restaurant is really full of ingredients, it is really good!'
            },
            {
                name: 'joycefor',
                avatar: 'https://p1.meituan.net/userheadpicbackend/51567ab307fde061e141e61870e4d2a733980.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'Fresh and tender beef with honey sauce, eating it in one bite is full of satisfaction.'
            },
            {
                name: 'toni',
                avatar: 'https://p0.meituan.net/userheadpicbackend/9e1833b3555f5aa16f2a96ed143d5c86403513.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'I have not eaten hamburgers for a long time. Today, I found a new restaurant that is quite delicious!'
            },
            {
                name: 'Amelia',
                avatar: 'https://p0.meituan.net/userheadpicbackend/b1fd8ec87bb1fec014baa2e2498b727252201.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
                content: 'The most important thing to buy a hamburger is, of course, the taste. The taste of this hamburger is absolutely first-class, as the saying goes, the aroma of wine is not afraid of the depth of the alley. After eating it this time, I still want to eat it again.'
            }
        ]
    }
]
export default dataSource
