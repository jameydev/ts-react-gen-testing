export default function Link({ href, text }: LinkProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer">{text}</a>
    );
}