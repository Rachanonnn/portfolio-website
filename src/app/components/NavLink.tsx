import {Link} from 'react-scroll';


const NavLink = ({ href, title} : {href: string, title: string}) => {
    return (
        <Link
        to={href} 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white cursor-pointer"
        >
            {title}
        </Link>
    )
}

export default NavLink;