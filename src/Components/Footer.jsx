import React from "react";
import "../App.css";
const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white">
                <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-xl font-bold mb-3">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                        <div className="flex space-x-4 text-lg">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-bold mb-3">Subscribe</h3>
                        <div className="flex">
                            <input className="text-black px-2 py-1 rounded-l" placeholder="Enter email" />
                            <button className="bg-blue-700 px-4 rounded-r">Go</button>
                        </div>
                    </div>
                </div>


                <div className="bg-black text-center py-3 text-sm">
                    © 2026 Your Company. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;