import Link from './Link';
export default function List(props: ListProps) {
    const {ordered, items} = props;

    const itemList = items.map(item => {
        return (
            <li key={item.id} className="list-item">
                <i className={item.icon}></i>
                &nbsp;
                <Link href={item.link.href} text={item.link.text} />
            </li>
        );
    });

    return ordered ? (
        <div className="list">
            <ol>
                {itemList}
            </ol>
        </div>
    ) : (
        <div className="list">
            <ul>
                {itemList}
            </ul>
        </div>
    );
}