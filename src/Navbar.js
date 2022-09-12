import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="flex content-center max-w-[600px] p-[20px] my-0 mx-auto border-b-[1px] border-b-[#f2f2f2]">
            <h1 className="text-2xl font-semibold text-[#f1356d]">My Blog</h1>
            <div className="ml-auto">
                <Link to='/' className="ml-[16px] p-[6px] hover:text-[#f1356d]">Home</Link>
                <Link to='/create' className="ml-[16px] p-[6px] hover:text-[#f1356d]">New Blog</Link>

            </div>
        </nav>

     );
}
 
export default Navbar;