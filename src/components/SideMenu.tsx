import MenuHeader from "./MenuHeader";
import List from "./List";
import listItems from "../data/items";
import { ReactNode, useRef, useState } from "react";

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