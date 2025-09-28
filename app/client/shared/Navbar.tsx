import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../public/logo.png";
import navbarLinks from '../data/navbar';

const Navbar = () => {
    return (
        <div className='px-4 md:px-8 lg:px-10 flex justify-between items-center'>
            {/* log */}
            <Link href={"/"}>
                <Image className='w-12' alt='Logo' src={Logo}></Image>
            </Link>
            {/* menu */}
            <div>
                <ul className='flex items-center md:gap-5 lg:gap-7'>
                    {
                        navbarLinks.map(link =>
                            <li className='text-gray-700 text-sm hover:border-b-2 border-text-color' key={link?.id}>
                                <Link href={link?.route}>{link?.path}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            {/* authentication */}
            <div>

            </div>
        </div>
    );
};

export default Navbar;