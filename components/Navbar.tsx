export default function Navbar() {
  return (
    <nav
  className="
  sticky
  top-0
  z-50
  w-full
  px-8
  py-4
  flex
  justify-between
  items-center
  bg-black/20
  opacity-30
  hover:opacity-100
  backdrop-blur-md
  border-b
  border-gray-800
  duration-300
  "
>
      <h1 className="text-2xl font-bold">
        <a href="#home">Home</a>
      </h1>

      <ul className="flex gap-8 text-gray-300">

        <li>
          <a
            href="#profile"
            className="hover:text-white duration-300"
          >
            Profile
          </a>
        </li>
        
        <li>
          <a
            href="#about"
            className="hover:text-white duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="hover:text-white duration-300"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-white duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-white duration-300"
          >
            Contact
          </a>
        </li>

      </ul>
    </nav>
  );
}