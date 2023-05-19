import HamburgerIcon from "./HamburgerIcon";

export default function MenuHeader() {
    return (
        <div className="menu-header">
            <HamburgerIcon />
            &nbsp;
            <img className="logo" src="sample-eye-logo.png" alt="YOUR LOGO/ICON" />
        </div>
    );
}