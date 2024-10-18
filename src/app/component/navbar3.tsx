import Link from "next/link"

const Navbar3 = () => {
    
    return(
        <header>
            <nav className="bg-slate-400 p-4 mb-4 mt-4">
                <ul className="flex gap-32 justify-center text-white">
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/products/laptop">Laptop</Link></li>
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/products/mobile">Mobile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar3;