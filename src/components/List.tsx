export default function List(props: ListProps) {
    const {ordered, items} = props;

    const itemList = items.map(item => {
        return (
            <li key={item.id} className="list-item">
                <a href={item.link}><i className={item.icon}></i> &nbsp; {item.name}</a>
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