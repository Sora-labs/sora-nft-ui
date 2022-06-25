import { Link } from "react-router-dom"
import Logo from "../Logo"

const Footer = () => {
    
    return (
        <div className="w-full p-8 bg-black text-white">
            <div className="flex mb-4">
                <Logo></Logo>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                    <h3 className="text-dark-gray-50 text-sm font-semibold">Learn</h3>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link to="/sell">Create</Link>
                        </li>
                        <li>
                            <Link to="/explore">Explore</Link>
                        </li>
                        <li>
                            <Link to="/sell">Sell</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="text-dark-gray-50 text-sm font-semibold">Company</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="">
                            <Link to="#">Careers</Link>
                        </li>
                        <li>
                            <Link to="#">Help Center</Link>
                        </li>
                        <li>
                            <Link to="#">Subscribe</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="text-dark-gray-50 text-sm font-semibold">Connect</h3>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="https://twitter.com/akashicpy">Twitter</a>
                        </li>
                        <li>
                            <Link to="#">Discord</Link>
                        </li>
                        <li>
                            <Link to="#">Mirror</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <Link to="/privacy-and-privacy" className="text-xs text-dark-gray-50 tracking-tight">Privacy and Privacy</Link>
                    <Link to="/terms-of-service" className="text-xs text-dark-gray-50">Terms of Service</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer