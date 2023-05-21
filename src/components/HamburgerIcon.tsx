export default function HamburgerIcon() {
    const toggleSideMenu = () => {
        // console.log("Clearing side menu");
        const sideMenu = document.querySelector(".side-menu");
        let isOn = sideMenu?.classList.contains("no-display");
        !isOn ? sideMenu?.classList.add("no-display") : sideMenu?.classList.remove("no-display");
    }

    return (
        <div className="burger" onClick={toggleSideMenu}>
            <i className="fa-solid fa-bars"></i>
        </div>
    );
}