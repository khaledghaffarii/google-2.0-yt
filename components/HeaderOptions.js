import HeaderOption from "./HeaderOption";
import {
  SearchIcon,
  PlayIcon,
  PhotographIcon,
  NewspaperIcon,
  MailIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
function HeaderOptions() {
  return (
    <div>
      <div className="flex space-x-6">
        <HeaderOption />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
