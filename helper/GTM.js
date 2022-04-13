import TagManager from 'react-gtm-module';

export const productImpression = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'productImpression',
            eventAction: 'Product Impression',
            eventLabel: 'impression cart',
            ecommerce: {
                currencyCode: 'IDR', 
                impressions: [
                    {
                        name: 'Bakso',
                        id: 'bakso001',
                        price: 10000,
                        category: 'foods',
                        list: '',
                        position: 1
                    },
                    {
                        name: 'Mie Ayam',
                        id: 'mayam001',
                        price: 8000,
                        category: 'foods',
                        list: '',
                        position: 2
                    }
                ]
            }
        }
    }

    TagManager.dataLayer(tagManagerArgs);

    alert(`product impression clicked ${JSON.stringify(tagManagerArgs.dataLayer)}`);
};

export const productClickTracking = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'productClick',
            eventAction: 'productClick',
            ecommerce: {
                click: {
                    actionField: {
                        list: ''
                    },
                    products: [{
                        name: 'Bakso',
                        id: 'bakso001',
                        price: 10000,
                        category: 'foods',
                        position: 1
                    }]
                }
            }
        }
    }

    TagManager.dataLayer(tagManagerArgs);

    alert(`product click tracking ${JSON.stringify(tagManagerArgs.dataLayer)}`);
}

export const addToCartTracking = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'addToCart',
            eventLabel: 'addToCart',
            ecommerce: {
                currencyCode: 'IDR',
                add: {
                    products: [{
                        name: 'Bakso',
                        id: 'bakso001',
                        price: 10000,
                        category: 'foods',
                        quantity: 1
                    }]
                }
            }
        }
    };

    TagManager.dataLayer(tagManagerArgs);

    alert(`add to cart clicked ${JSON.stringify(tagManagerArgs.dataLayer)}`);
};

export const removeToCartTracking = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'removeFromCart',
            eventLabel: 'removeFromCart',
            ecommerce: {
                currencyCode: 'IDR',
                remove: {
                    products: [{
                        name: 'Bakso',
                        id: 'bakso001',
                        price: 10000,
                        category: 'foods',
                        quantity: 1
                    }]
                }
            }
        }
    };

    TagManager.dataLayer(tagManagerArgs);

    alert(`remove from cart clicked ${JSON.stringify(tagManagerArgs.dataLayer)}`);
};

export const checkoutTracking = (
    // items,
    currency = 'IDR',
    actionField = { step: 1, option: ''}
) => {
    const tagManagerArgs = {
        dataLayer: {
            pageType: 'checkout',
            pageName: 'checkout',
            event: 'checkout',
            eventAction: 'checkout',
            eventLabel: `checkout step ${actionField.step}`,
            ecommerce: {
                currencyCode: currency,
                products: [{
                    name: 'Bakso',
                    id: 'bakso001',
                    price: 10000,
                    category: 'foods',
                    quantity: 1
                }]
            }
        }
    };

    console.log(`checkout step ${actionField.step} ${JSON.stringify(tagManagerArgs.dataLayer)}`)

    TagManager.dataLayer(tagManagerArgs);
};

export const checkoutOptionTracking = (
    currency = 'IDR',
    actionField = { step: 1, option: '', action: 'checkout_option' }
) => {
    const tagManagerArgs = {
        dataLayer: {
            pageType: 'checkout',
            pageName: 'checkout',
            event: 'checkoutOption',
            eventAction: 'checkoutOption',
            eventLabel: `checkout option step ${actionField.step}`,
            ecommerce: {
                currencyCode: currency,
                checkoutOption: {
                    actionField
                }
            }
        }
    };

    TagManager.dataLayer(tagManagerArgs);
}

export const purchaseEventTracking = () => {
    const tagManagerArgs = {
        dataLayer: {
            event: 'purchase',
            eventAction: 'purchase',
            ecommerce: {
                purchase: {
                    actionField: {
                        id: Math.floor((Math.random() * 1000) + 1).toString(),
                        revenue: 15000,
                        tax: 1000,
                        shipping: 4000
                    },
                    products: [{
                        name: 'Bakso',
                        id: 'bakso001',
                        price: 10000,
                        category: 'foods',
                        quantity: 1
                    }]
                }
            }
        }
    }

    TagManager.dataLayer(tagManagerArgs);

    alert(`purchase ${JSON.stringify(tagManagerArgs.dataLayer)}`);
}