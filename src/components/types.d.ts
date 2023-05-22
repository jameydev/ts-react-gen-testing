declare interface LinkProps {
    href: string;
    text: string;
}

declare interface ListItem {
    id: number;
    icon: string;
    name: string;
    link: string;
}

declare interface ListProps {
    ordered: boolean;
    items: ListItem[];
}