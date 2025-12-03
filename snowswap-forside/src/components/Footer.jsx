export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto py-10">

                <ul className="flex justify-center flex-wrap text-sm text-slate-600">
                    <li className="mx-2">
                        <a href="/" className="inline-block hover:text-slate-900 hover:underline py-2 px-3">
                            Home
                        </a>
                    </li>

                    <li className="mx-2">
                        <a href="#" className="inline-block hover:text-slate-900 hover:underline py-2 px-3">
                            About
                        </a>
                    </li>

                    <li className="mx-2">
                        <a href="#" className="inline-block hover:text-slate-900 hover:underline py-2 px-3">
                            Contact
                        </a>
                    </li>
                </ul>

                <hr className="my-4" />

                <p className="text-center text-sm text-slate-700">
                    &copy; {new Date().getFullYear()} Footer. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
