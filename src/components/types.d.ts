declare interface LinkProps {
    href: string;
    text: string;
}

declare interface ListItem {
    id: number;
    icon: string;
    name: string;
    link: LinkProps;
}

declare interface ListProps {
    ordered: boolean;
    items: ListItem[];
}

declare interface FormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}