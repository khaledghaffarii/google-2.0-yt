import HeaderOption from "./HeaderOption";
import {
  SearchIcon,
  PlayIcon,
  PhotographIcon,
  NewspaperIcon,
  MapIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
function HeaderOptions() {
  return (
    <div className="flex justify-evenly  w-full border-b-5 ">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" selected />
        <HeaderOption Icon={PlayIcon} title="Video" selected />
        <HeaderOption Icon={NewspaperIcon} title="New" selected />
        <HeaderOption Icon={MapIcon} title="Maps" selected />{" "}
        <HeaderOption Icon={DotsVerticalIcon} title="More" selected />
      </div>
      <div className=" flex space-x-4 mt-5 p-2   text-gray-500  ">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
