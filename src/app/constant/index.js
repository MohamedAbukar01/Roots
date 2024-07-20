export const navbar  =  [ 
    {id: 1, title: 'HOME', href:'/'},
    {id: 2, title: 'SHOP', href:'/store'},
    {id: 3, title: 'STORY', href:'/learnMore'},
]

import productImg1 from "../../../public/store-1.png"
import productImg2 from "../../../public/store-2.png"
import productImg3 from "../../../public/store-3.png"
import productImg4 from "../../../public/store-4.png"
import beardWax from "../../../public/BeardWax1.png"
import beardWax2 from "../../../public/BeardWax2.png"
import beardWax3 from "../../../public/BeardWax3.png"
import beardWax4 from "../../../public/BeardWax4.png"
import beardBalm from "../../../public/beardbalm1.png"
import beardBalm2 from "../../../public/beardbalm2.png"
import beardBalm3 from "../../../public/beardbalm3.png"
import beardBalm4 from "../../../public/beardbalm4.png"

export const productList = [
    {id:1, 
        title:'PureRoots Original Beard Oil',
        description:'Organic jojoba oil, argan oil, sweet almond oil, cedarwood essential oil, rosemary essential oil',
        price:'$24.99 (1 oz)',
        img:productImg1
    },
    {id:2, 
        title:'FreshField Citrus Beard Oil',
        description:' Organic grapeseed oil, coconut oil, avocado oil, orange essential oil, lemon essential oil.',
        price:'$26.99 (1 oz)',
        img:productImg2
    },
    {id:3, 
        title:'GreenFarm Herbal Beard Oil',
        description:' Organic hemp seed oil, olive oil, castor oil, lavender essential oil, eucalyptus essential oil.',
        price:'$25.99 (1 oz)',
        img:productImg3
    },
    {id:4, 
        title:'HarvestGlow Spiced Beard Oil',
        description:' Organic pumpkin seed oil, apricot kernel oil, macadamia oil, clove essential oil, cinnamon essential oil.',
        price:'$27.99 (1 oz)',
        img:productImg4
    }
]

export const footerLinks = [
    {id: 1,
        title:"Privacy Policy",
        href :'/'
    },
    {id: 2,
        title:"Terms and Conditions",
        href :'/'
    },
    {id: 3,
        title:"Cookie Policy",
        href :'/'
    }
]


export const product = {
    beardOil : [
        {id:1, 
            title:'PureRoots Original Beard Oil',
            description:'Ingredients: Organic jojoba oil, argan oil, sweet almond oil, cedarwood essential oil, rosemary essential oil',
            price:'$24.99 (1 oz)',
            img:productImg1,
            category:'Beard Oil'
        },
        {id:2, 
            title:'FreshField Citrus Beard Oil',
            description:'Ingredients: Organic grapeseed oil, coconut oil, avocado oil, orange essential oil, lemon essential oil.',
            price:'$26.99 (1 oz)',
            img:productImg2,
            category:'Beard Oil'
        },
        {id:3, 
            title:'GreenFarm Herbal Beard Oil',
            description:'Ingredients: Organic hemp seed oil, olive oil, castor oil, lavender essential oil, eucalyptus essential oil.',
            price:'$25.99 (1 oz)',
            img:productImg3,
            category:'Beard Oil'
        },
        {id:4, 
            title:'HarvestGlow Spiced Beard Oil',
            description:'Ingredients: Organic pumpkin seed oil, apricot kernel oil, macadamia oil, clove essential oil, cinnamon essential oil.',
            price:'$27.99 (1 oz)',
            img:productImg4,
            category:'Beard Oil'
        }
    ],

    beardWax : [
        {id:5, 
            title:'Mountain Man Beard Wax',
            description:'Crafted with natural beeswax, shea butter, and cedarwood pine oils for a firm hold',
            price:'$18.99 (1 oz)',
            img:beardWax,
            category:'Beard Wax'
        },
        {id:6, 
            title:'Urban Gentleman Beard Wax',
            description:'Combines organic beeswax, coconut oil, sandalwood, and bergamot for a sleek, polished look.',
            price:'$21.99 (1 oz)',
            img:beardWax2,
            category:'Beard Wax'
        },
        {id:7, 
            title:'Viking Warrior Beard Wax',
            description:'Features beeswax, jojoba oil, and musk patchouli oils for a strong hold and bold scent.',
            price:'$23.99 (1 oz)',
            img:beardWax3,
            category:'Beard Wax'
        },
        {id:8, 
            title:'Gentlemans Blend Beard Wax',
            description:'A mix of beeswax, argan oil, and hints of vanilla and mint for a refined finish.',
            price:'$20.99 (1 oz)',
            img:beardWax4,
            category:'Beard Wax'
        }
    ],
    beardBalm : [
        {id:9, 
            title:'Highland Breeze Beard Balm',
            description:'Blended with shea butter, beeswax, and eucalyptus oils for a refreshing and soothing touch.',
            price:'$18.99 (1 oz)',
            img:beardBalm,
            category:'Beard Balm'
        },
        {id:10, 
            title:'Classic Gentleman Beard Balm',
            description:'Combines shea butter, coconut oil, and sandalwood for a smooth and elegant finish.',
            price:'$19.99 (1 oz)',
            img:beardBalm2,
            category:'Beard Balm'
        },
        {id:11, 
            title:'Outdoorsman Beard Balm',
            description:'Includes beeswax, cocoa butter, and cedarwood for a natural, rugged hold.',
            price:'$25.99 (1 oz)',
            img:beardBalm3,
            category:'Beard Balm'
        },
        {id:12, 
            title:'Urban Luxe Beard Balm',
            description:'Features shea butter, jojoba oil, and bergamot for a stylish and nourishing effect.',
            price:'$21.99 (1 oz)',
            img:beardBalm4,
            category:'Beard Balm'
        }
    ]
}


import DHL from "../../../public/DHL.svg"
import Fedex from "../../../public/FEDEX.svg"



export const deliveryService = [
    {id: '2', name: 'DHL', img:DHL, price: '7.88', delivery: 'your shipment will arrive within 1-2 days'},
    {id: '1', name: 'Fedex', img:Fedex, price: '6.98', delivery: 'your shipment will arrive within 1-2 days'},

]