import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 py-8 px-10 text-gray-800 justify-around flex">
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
          <div>
            <h3 className="font-bold text-black-400 mb-4 text-xl">
              Course Course
            </h3>
            <ul className="space-y-2 text-lg">
              <li>Programming Fundamentals</li>
              <li>Web2 Using NextJS</li>
              <li>Earn as You Learn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black-400 mb-4 text-xl">
              Advanced Courses
            </h3>
            <ul className="space-y-2 text-lg">
              <li>Web 3 and Metaverse</li>
              <li>Cloud-Native Computing</li>
              <li>Artificial Intelligence (AI) and Deep Learning</li>
              <li>Ambient Computing and IoT</li>
              <li>Genomics and Bioinformatics </li>
              <li>Network Programmability and Automation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black-400 mb-4 text-xl">
              Social Link
            </h3>
            <div className="flex space-x-4 mb-4 cursor-pointer">
              <Link
                href="https://www.facebook.com/TeamKTessori"
                target="_blank"
              >
                <FaFacebookF className="text-white w-6 h-6 rounded-full bg-facebookBlue pt-1 pb-1" />
              </Link>
              <Link
                href="https://www.youtube.com/@KamranTessorikk"
                target="_blank"
              >
                <FaYoutube className="text-white w-6 h-6 rounded-full bg-youTube pt-1 pb-1" />
              </Link>

              <Link href="https://twitter.com/KamranTessoriPk" target="_blank">
                <FaTwitter className="text-white w-6 h-6 rounded-full bg-twitter pt-1 pb-1" />
              </Link>
              <Link
                href="https://www.instagram.com/KamranTessoriPk"
                target="_blank"
              >
                <FaInstagram className="text-white w-6 h-6 rounded-full bg-instagram-gradient pt-1 pb-1" />
              </Link>
              <Link
                href="https://www.tiktok.com/@KamranTessoriPk"
                target="_blank"
              >
                <FaTiktok className="text-white w-6 h-6 rounded-full bg-tikTok pt-1 pb-1" />
              </Link>
            </div>
            <div className="flex flex-wrap space-x-4 mb-4">
              <Link
                href="mailto:education@governorsindh.com"
                className="flex-grow flex gap-4  text-[#38729B] items-center underline"
              >
                <AiOutlineMail className="text-[#4178A1] size-7" />
                education@governorsindh.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
