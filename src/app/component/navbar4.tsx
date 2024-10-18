import Link from "next/link"

const Navbar4 = () => {
    return(
        <header>
            <nav className="bg-slate-400 p-4 mb-4 mt-4">
                <ul className="flex gap-32 justify-center text-white">
                    <li><Link className="hover:bg-red-400 p-2 rounded-2xl" href="/students/studentName">Student Details</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar4;