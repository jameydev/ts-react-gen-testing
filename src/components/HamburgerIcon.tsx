export default function HamburgerIcon() {
    return (
        <div className="burger" onClick={() => {
                console.log("Clearing side menu");
                const sideMenu = document.querySelector(".side-menu");
                let isOn = sideMenu?.classList.contains("no-display");
                !isOn ? sideMenu?.classList.add("no-display") : sideMenu?.classList.remove("no-display");
        }}>
            <i className="fa-solid fa-bars"></i>
        </div>
    );
}