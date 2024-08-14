import { IconContext } from "react-icons";
import { FaDiscord } from "react-icons/fa";


export function SignIn() {
  return (
    <form>
      <button
        type="submit"
        className="flex items-center gap-2 mb-6 w-full justify-center rounded-md bg-white border-[1px] border-gray-200 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-200"
      >
        <FaDiscord size={20} color="#5765F2" />
        <p className="text-sm text-gray-600 font-normal">
          Continue with Discord
        </p>
      </button>
    </form>
  );
}
