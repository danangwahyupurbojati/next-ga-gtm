import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navWrapper}>
            <div>
                <Link href="/">
                    <a>
                        Demo GA/GTM
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/foods">
                    <a className={styles.navCategoryLink}>
                        Food
                    </a>
                </Link>
                <Link href="/baverages">
                    <a className={styles.navCategoryLink}>
                        Baverages
                    </a>
                </Link>
                {/* <Link href="/testingpages">
                    <a className={styles.navCategoryLink}>
                        Testing GTM Event
                    </a>
                </Link>
                <Link href="/testing-ga4">
                    <a className={styles.navCategoryLink}>
                        Testing GA4
                    </a>
                </Link> */}
            </div>
            <div>
                <Link href="/checkout">
                    <a>
                        checkout
                    </a>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;