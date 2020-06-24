import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from './types';

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return({
        type: SET_SHOP_CATEGORIES,
            payload: [
            {
                _id: 0,
                title: 'All',
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            }, 
            {
                _id: 6,
                title: 'Ruby'
            } 
        ]
        
    })
}

export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript In the Browser',
                description: 'While some species of sharks do need to swim constantly, this is not true for all sharks. Some sharks such as the nurse shark have spiracles that force water across their gills allowing for stationary rest. Sharks do not sleep like humans do, but instead have active and restful periods',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'While some species of sharks do need to swim constantly, this is not true for all sharks. Some sharks such as the nurse shark have spiracles that force water across their gills allowing for stationary rest. Sharks do not sleep like humans do, but instead have active and restful periods',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'While some species of sharks do need to swim constantly, this is not true for all sharks. Some sharks such as the nurse shark have spiracles that force water across their gills allowing for stationary rest. Sharks do not sleep like humans do, but instead have active and restful periods',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'While some species of sharks do need to swim constantly, this is not true for all sharks. Some sharks such as the nurse shark have spiracles that force water across their gills allowing for stationary rest. Sharks do not sleep like humans do, but instead have active and restful periods',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'While some species of sharks do need to swim constantly, this is not true for all sharks. Some sharks such as the nurse shark have spiracles that force water across their gills allowing for stationary rest. Sharks do not sleep like humans do, but instead have active and restful periods',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'While some species of sharks do need to swim constantly, this is not true for all sharks. Some sharks such as the nurse shark have spiracles that force water across their gills allowing for stationary rest. Sharks do not sleep like humans do, but instead have active and restful periods',
                price: 1.99,
                belongsTo: [0, 2]
            }, 
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'While some species of sharks do need to swim constantly, this is not true for all sharks. Some sharks such as the nurse shark have spiracles that force water across their gills allowing for stationary rest. Sharks do not sleep like humans do, but instead have active and restful periods',
                price: 1.99,
                belongsTo: [0, 6]
            } 
        ]
    })
}