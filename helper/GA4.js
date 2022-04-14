import TagManager from 'react-gtm-module';

// equal to Product Click
export const SelectItem = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'select_item',
            ecommerce: {
                items: [{
                    item_id: 'escampur001',
                    item_name: 'Es Campur',
                    currency: 'IDR',
                    price: 5000,
                    item_category: 'baverages'
                }]
            }
        }
    }

    console.log('select item clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};

// add to cart
export const AddToCart = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'add_to_cart',
            ecommerce: {
                items: [{
                    item_id: 'escampur001',
                    item_name: 'Es Campur',
                    currency: 'IDR',
                    price: 5000,
                    item_category: 'baverages',
                    quantity: 1
                }]
            }
        }
    }

    console.log('add to cart clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};

// checkout
export const BeginCheckout = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'begin_checkout',
            ecommerce: {
                items: [{
                    item_id: 'escampur001',
                    item_name: 'Es Campur',
                    currency: 'IDR',
                    price: 5000,
                    item_category: 'baverages',
                    quantity: 1
                }]
            }
        }
    }

    console.log('begin checkout clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};


// checkout
export const Purchase = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'purchase',
            ecommerce: {
                transaction_id: Math.floor((Math.random() * 1000) + 1).toString(),
                value: 8000,
                shipping: 2000,
                tax: 1000,
                currency: 'IDR',
                items: [{
                    item_id: 'escampur001',
                    item_name: 'Es Campur',
                    currency: 'IDR',
                    price: 5000,
                    item_category: 'baverages',
                    quantity: 1
                }]
            }
        }
    }

    console.log('purchase clicked', tagManagerArgs);
    TagManager.dataLayer(tagManagerArgs);
};