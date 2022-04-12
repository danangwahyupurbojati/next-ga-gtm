import Head from 'next/head'

const TittleHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
}
 
export default TittleHead;