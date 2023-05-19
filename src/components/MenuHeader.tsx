import HamburgerIcon from "./HamburgerIcon";

export default function MenuHeader() {
    return (
        <div className="menu-header" onClick={() => {
            console.log("Clearing side menu");
            const sideMenu = document.querySelector(".side-menu");
            let isOn = sideMenu?.classList.contains("no-display");
            !isOn ? sideMenu?.classList.add("no-display") : sideMenu?.classList.remove("no-display");
    }}>
            <img className="logo" src="sample-eye-logo.png" alt="YOUR LOGO/ICON" />
        </div>
    );
}