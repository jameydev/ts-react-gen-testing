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