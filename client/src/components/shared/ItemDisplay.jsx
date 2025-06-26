export default function ItemDisplay({ item }) {
  return (
    <div>
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p className="text-sm italic text-[var(--muted)] mb-2">{item.company} — {item.duration}</p>
      <p className="text-[var(--body-text)] whitespace-pre-line">{item.description}</p>
    </div>
  );
}
