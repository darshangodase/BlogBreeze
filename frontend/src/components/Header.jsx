import { Button, Navbar, TextInput } from "flowbite-react";
import { Link ,useLocation} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
function Header() {
  const path=useLocation().pathname;
  return (
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 rounded-md text-white">
            BlogBreeze
          </span>
        </Link>

        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden text-bold lg:inline"
          />
        </form>

        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-5 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
          </Link>
          <Navbar.Toggle/>
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path==='/'}as={'div'}>
            <Link to="/" className="text-xl">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path==='/about'}as={'div'}>
            <Link to="/about"className="text-xl">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path==='/projects'}as={'div'}> 
            <Link to="/projects"className="text-xl">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      
  );
}

export default Header;
