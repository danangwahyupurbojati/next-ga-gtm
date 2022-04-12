import Navbar from "../Navbar";
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </div>
    );
}
 
export default Layout;