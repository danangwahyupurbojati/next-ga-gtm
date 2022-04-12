import Link from 'next/link';
import TittleHead from '../../components/TittleHead';

const Food = () => {
    return ( 
        <div>
            <TittleHead title="Foods Category" />
            <h1>Category food</h1>
            <div>
                <div>
                    <Link href="/foods/bakso">
                        <a>
                            bakso
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/foods/mie-ayam">
                        <a>
                            mie ayam
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Food;