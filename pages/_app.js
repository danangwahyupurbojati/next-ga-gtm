import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({
            // gtmId: 'GTM-K2NKKGK' // demo gtm
            // gtmId: 'GTM-T7GC2KG' // ga 4 with ua
            gtmId: 'GTM-MLH2QRN' // ga gtm demo 3 (separate)
        });
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
