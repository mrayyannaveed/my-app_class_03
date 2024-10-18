import Link from "next/link"

const Navbar2 = () => {
    return(
        <header>
            <nav className="bg-yellow-800 p-4 mb-4 mt-4">
                <ul className="flex gap-32 justify-center text-white">
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/category/crypto">Crypto</Link></li>
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/category/freelancing">Freelancing</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar2;