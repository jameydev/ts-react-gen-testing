import MenuHeader from "./MenuHeader";
import List from "./List";
import listItems from "../data/items";
import Button from "./Button";
import SideBar from "./SideBar";

export default function SideMenu() {
    return (
        <div className="side-menu">
            <div className="side-menu-wrapper">
                <MenuHeader />
                <List ordered={false} items={listItems} />
            </div>
        </div>
    );
}