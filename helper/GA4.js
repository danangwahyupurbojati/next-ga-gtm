import TagManager from 'react-gtm-module';

// ViewItemLists
export const ViewItemListsGA4 = (products) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'view_item_list',
            ecommerce: {
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        currency: 'IDR',
                        index: product.position
                    }
                })
            }
        }
    }

    console.log('view item list ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
}

// equal to Product Click
export const SelectItemGA4 = (products) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'select_item',
            ecommerce: {
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        currency: 'IDR',
                    }
                })
            }
        }
    }

    console.log('select item ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};

// // equal to Product Click
// export const SelectItem = () => {
//     const tagManagerArgs = {
//         dataLayer: {
//             event: 'select_item',
//             ecommerce: {
//                 items: [{
//                     item_id: 'escampur001',
//                     item_name: 'Es Campur',
//                     currency: 'IDR',
//                     price: 5000,
//                     item_category: 'baverages'
//                 }]
//             }
//         }
//     }

//     console.log('select item clicked', tagManagerArgs);
//     TagManager.dataLayer(tagManagerArgs);
// };

export const ViewItemGA4 = (products) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'view_item',
            ecommerce: {
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        currency: 'IDR',
                    }
                })
            }
        }
    }

    console.log('view item ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
}

// add to cart
export const AddToCartGA4 = (products) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'add_to_cart',
            ecommerce: {
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        quantity: 1,
                        currency: 'IDR',
                    }
                })
            }
        }
    }

    console.log('add to cart ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};

// // add to cart
// export const AddToCart = () => {
//     const tagManagerArgs = {
//         dataLayer: {
//             event: 'add_to_cart',
//             ecommerce: {
//                 items: [{
//                     item_id: 'escampur001',
//                     item_name: 'Es Campur',
//                     currency: 'IDR',
//                     price: 5000,
//                     item_category: 'baverages',
//                     quantity: 1
//                 }]
//             }
//         }
//     }

//     console.log('add to cart clicked', tagManagerArgs);
//     TagManager.dataLayer(tagManagerArgs);
// };

// checkout
export const BeginCheckoutGA4 = (products) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'begin_checkout',
            ecommerce: {
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        quantity: 1,
                        currency: 'IDR',
                    }
                })
            }
        }
    }

    console.log('begin checkout ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};

export const ShippingInfoGA4 = (products, shippingName) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'add_shipping_info',
            ecommerce: {
                currency: 'IDR',
                value: products[0].price,
                shipping_tier: shippingName,
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        quantity: 1,
                        currency: 'IDR',
                    }
                })
            }
        }
    }

    console.log('shipping info ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
}

export const PaymentInfoGA4 = (products, paymentName) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'add_payment_info',
            ecommerce: {
                currency: 'IDR',
                value: products[0].price,
                payment_type: paymentName,
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        quantity: 1,
                        currency: 'IDR',
                    }
                })
            }
        }
    }

    console.log('payment info ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
}

// export const BeginCheckout = () => {
//     const tagManagerArgs = {
//         dataLayer: {
//             event: 'begin_checkout',
//             ecommerce: {
//                 items: [{
//                     item_id: 'escampur001',
//                     item_name: 'Es Campur',
//                     currency: 'IDR',
//                     price: 5000,
//                     item_category: 'baverages',
//                     quantity: 1
//                 }]
//             }
//         }
//     }

//     console.log('begin checkout clicked', tagManagerArgs);
//     TagManager.dataLayer(tagManagerArgs);
// };


// purchase
export const PurchaseGA4 = (products, transaction_id) => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'purchase',
            ecommerce: {
                transaction_id: transaction_id,
                value: products[0].price + 1000 + 4000,
                shipping: 4000,
                tax: 1000,
                currency: 'IDR',
                items: products.map(product => {
                    return {
                        item_name: product.name,
                        item_id: product.id,
                        price: product.price,
                        item_category: product.category,
                        quantity: 1,
                        currency: 'IDR',
                    }
                })
            }
        }
    }

    console.log('purchase ga4 clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};

// export const Purchase = () => {
//     const tagManagerArgs = {
//         dataLayer: {
//             event: 'purchase',
//             ecommerce: {
//                 transaction_id: Math.floor((Math.random() * 1000) + 1).toString(),
//                 value: 8000,
//                 shipping: 2000,
//                 tax: 1000,
//                 currency: 'IDR',
//                 items: [{
//                     item_id: 'escampur001',
//                     item_name: 'Es Campur',
//                     currency: 'IDR',
//                     price: 5000,
//                     item_category: 'baverages',
//                     quantity: 1
//                 }]
//             }
//         }
//     }

//     console.log('purchase clicked', tagManagerArgs);
//     TagManager.dataLayer(tagManagerArgs);
// };