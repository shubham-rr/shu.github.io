export default function Item({ item, isSelected, onClick }) {
  return (
    <div>
    <li
      onClick={onClick}
      className={`
        cursor-pointer p-3 rounded mb-2 font-semibold
        ${isSelected
          ? "text-[var(--body-text)]"
          : "text-[var(--muted)] hover:text-[var(--body-text)] hover:bg-[var(--body-text)/10]"
        }
      `}
    >
      {item.title} @ {item.company}
    </li>
    <hr className="border-[var(--primary)]" />
    </div>
  );
}
