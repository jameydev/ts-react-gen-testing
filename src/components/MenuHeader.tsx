export default function MenuHeader() {
    const toggleSideMenu = () => {
        // console.log("Clearing side menu");
        const sideMenu = document.querySelector(".side-menu");
        let isOn = sideMenu?.classList.contains("no-display");
        !isOn ? sideMenu?.classList.add("no-display") : sideMenu?.classList.remove("no-display");
    }

    return (
        <div className="menu-header" onClick={toggleSideMenu}>
            <img className="logo" src="sample-eye-logo.png" alt="YOUR LOGO/ICON" />
        </div>
    );
}