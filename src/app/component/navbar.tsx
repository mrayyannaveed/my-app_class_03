import Link from "next/link"

const Navbar = () => {
    return(
        <header>
            <nav className="bg-indigo-800 p-4 mb-4">
                <ul className="flex gap-32 justify-center text-white">
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/">Home</Link></li>
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/about">About</Link></li>
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/students">Students</Link></li>
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/products">Products</Link></li>
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/category">Category</Link></li>
                    {/* <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/category/crypto">Crypto</Link></li>
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/category/freelancing">Freelancing</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;