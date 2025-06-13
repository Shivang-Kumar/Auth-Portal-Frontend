import GoogleLogo from "../assets/google.svg"
import Applelogo from "../assets/apple.svg"
import Emaillogo from "../assets/gmail.svg"
import search from '../assets/search.svg';
const Footer=()=>{
return(
    <div className="bg-amber-50   h-100 mt-20">
        <div className="h-80 flex justify-between">
            <ul className="ml-7 mt-7 space-y-4">
                <li className="font-bold">Support</li>
                <li>Health Centre</li>
                <li>Air cover</li>
                <li>Disability support</li>
                <li>Cancelation Option</li>
            </ul>
            <ul className=" mt-7 space-y-4">
                <li className="font-bold">Hosting</li>
                <li>Airbnb your home</li>
                <li>AirCover for Hosts</li>
                <li>Hosting resources</li>
                <li>Community forum</li>
                <li>Hosting responsibly</li>
                <li>Join a free Hosting class</li>
            </ul>
            <ul className=" mt-7 space-y-4 mr-25">
                <li className="font-bold">Airbnb</li>
                <li>2025 Summer Release</li>
                <li>Newsroom</li>
                <li>New features</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Airbnb.org emergency stays</li>
            </ul>
        </div>
        <div class="h-px bg-gray-300 ml-15 mr-15"></div>
            <div className="flex justify-between items-center h-20">
                <div className="flex  ml-5 gap-2">            
                <span>© 2025 Airbnb, Inc.</span>
                <span>. Privacy</span>
                <span>. Terms</span>
                <span>. Sitemap</span>
                <span>. Company details</span>
                </div>
                <div className="flex gap-6 justify-center mr-15">
                    <a href="" className="flex items-center gap-1"><img src={search} alt="search"  className="h-5"/>English(IN)</a>
                     <a href=""><img src={GoogleLogo} alt="google" className="h-5"/></a>
                      <a href=""><img src={Emaillogo} alt="email"  className="h-5"/></a>
                           <a href=""><img src={Applelogo} alt="email"  className="h-5"/></a>
                </div>
            </div>
    </div>
);
}

export default Footer;