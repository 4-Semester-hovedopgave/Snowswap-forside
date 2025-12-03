import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div
                className="
                w-full
                p-6
                md:p-20
                lg:px-32
                xl:px-64
                "
            >
                {/* LOGO – MOBILE */}
                <div className="md:hidden flex flex-col items-center mb-10">
                    <img src="/logo.png" alt="SnowSwap Logo" className="w-24 mb-4" />
                </div>

                {/* MOBILE LAYOUT */}
                <div className="md:hidden flex flex-col items-center space-y-12 text-center">

                    {/* CONTACT */}
                    <div className="w-full flex flex-col items-center">
                        <h3 className="font-semibold tracking-wide mb-6">CONTACT US</h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center justify-center gap-3">
                                <FaMapMarkerAlt className="w-5 h-5 text-gray-700" />
                                <p>
                                    Refshalevej 151 <br />
                                    1432 Copenhagen, Denmark
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <FaEnvelope className="w-5 h-5 text-gray-700" />
                                <a href="mailto:info@snowswap.com" className="underline">
                                    info@snowswap.com
                                </a>
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <FaPhoneAlt className="w-5 h-5 text-gray-700" />
                                <p>+45 12 34 56 78</p>
                            </div>
                        </div>
                    </div>

                    {/* HELP */}
                    <div className="w-full flex flex-col items-center">
                        <h3 className="font-semibold tracking-wide mb-6">HELP</h3>
                        <ul className="space-y-3 text-sm">
                            <li>FAQ</li>
                            <li>Selling</li>
                            <li>Buying</li>
                            <li>Trust & safety</li>
                        </ul>
                    </div>

                    {/* DISCOVER */}
                    <div className="w-full flex flex-col items-center">
                        <h3 className="font-semibold tracking-wide mb-6">DISCOVER</h3>
                        <ul className="space-y-3 text-sm">
                            <li>About us</li>
                            <li>How it works</li>
                            <li>Equipment guide</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div className="text-center">
                        <p className="text-sm mb-4">@snowswap</p>

                        <div className="flex justify-center gap-6 text-gray-800">
                            <FaFacebookF className="w-7 h-7 p-1 bg-gray-800 text-white rounded-full" />
                            <FaTiktok className="w-7 h-7 p-1 bg-gray-800 text-white rounded-full" />
                            <FaInstagram className="w-7 h-7 p-1 bg-gray-800 text-white rounded-full" />
                        </div>
                    </div>
                </div>


                {/* DESKTOP LAYOUT */}
                <div
                    className="
                    hidden
                    md:grid 
                    grid-cols-3 gap-12 
                    text-[#1a1a1a]
                "
                >
                    {/* CONTACT */}
                    <div>
                        <h3 className="font-semibold tracking-wide mb-6">CONTACT US</h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="w-5 h-5 text-gray-700 mt-1" />
                                <p>
                                    Refshalevej 151 <br />
                                    1432 Copenhagen, Denmark
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="w-5 h-5 text-gray-700" />
                                <a href="mailto:info@snowswap.com" className="underline">
                                    info@snowswap.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="w-5 h-5 text-gray-700" />
                                <p>+45 12 34 56 78</p>
                            </div>
                        </div>
                    </div>

                    {/* LOGO + SOCIAL */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/logo.png"
                            alt="SnowSwap Logo"
                            className="w-24 mb-4"
                        />

                        <p className="text-sm text-gray-700 mb-4">@snowswap</p>

                        <div className="flex gap-6 text-gray-800">
                            <FaFacebookF className="w-6 h-6" />
                            <FaTiktok className="w-6 h-6" />
                            <FaInstagram className="w-6 h-6" />
                        </div>
                    </div>

                    {/* HELP + DISCOVER */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold tracking-wide mb-6">HELP</h3>
                            <ul className="space-y-3 text-sm">
                                <li>FAQ</li>
                                <li>Selling</li>
                                <li>Buying</li>
                                <li>Trust & safety</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold tracking-wide mb-6">DISCOVER</h3>
                            <ul className="space-y-3 text-sm">
                                <li>About us</li>
                                <li>How it works</li>
                                <li>Equipment guide</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
