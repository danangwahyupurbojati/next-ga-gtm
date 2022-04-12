import Link from 'next/link';
import TittleHead from '../../components/TittleHead';

const Baverages = () => {
    return ( 
        <div>
            <TittleHead title="Baverages Category" />
            <h1>Category baverages</h1>
            <div>
                <div>
                    <Link href="/baverages/es-campur">
                        <a>
                            es-campur
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/baverages/jus-buah">
                        <a>
                            jus buah
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Baverages;