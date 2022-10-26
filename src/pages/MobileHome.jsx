import ChatsMobile from "../components/ChatsMobile";
import NavbarMobile from "../components/NavbarMobile";
import SearchMobile from "../components/SearchMobile"

const MobileHome = () => {

  return (
    <div className="w-screen h-screen bg-slate-600">
        <NavbarMobile />
        <SearchMobile />
        <ChatsMobile />
    </div>
)};

export default MobileHome;
