"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b border-slate-200 sticky top-0 bg-white z-50">
            <nav
                className="
          flex items-center justify-between py-4 
          px-6 md:px-20 lg:px-32 xl:px-64
        "
            >
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={80} height={80} />
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-8 text-sm font-medium">
                    <li><Link href="/" className="hover:text-orange-500">Home</Link></li>

                    <li><Link href="/shop" className="hover:text-orange-500">Shop</Link></li>


                    <li><Link href="/about" className="hover:text-orange-500">Trade-In</Link></li>
                </ul>

                {/* Mobile burger */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden bg-white border-t border-slate-200 py-4">
                    <div className="px-6 md:px-20 lg:px-32 xl:px-64">
                        <ul className="flex flex-col items-center gap-4 text-sm">
                            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                            <li><Link href="/trade-in" onClick={() => setOpen(false)}>Shop</Link></li>
                            <li><Link href="/about" onClick={() => setOpen(false)}>Trade-In</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}
