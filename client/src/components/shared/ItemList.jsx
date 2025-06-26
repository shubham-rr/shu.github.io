import Item from "./Item";

export default function ItemList({ items, selectedId, onSelect }) {
  return (
    <ul>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          isSelected={item.id === selectedId}
          onClick={() => onSelect(item.id)}
        />
      ))}
    </ul>
  );
}
