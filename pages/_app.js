import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({
            // gtmId: 'GTM-K2NKKGK'
            gtmId: 'GTM-T7GC2KG'
        });
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
