import { useState } from "react";
import ItemList from './../shared/ItemList';
import ItemDisplay from './../shared/ItemDisplay';

export default function SectionWrapper({ heading, items }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id);

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <section className="w-[95%] mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
      <hr className="border-[var(--primary)]" />
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Item List */}
        <div className="md:w-1/3 pr-0 mb-6 md:mb-0 border-r border-[var(--primary)]">
          <ItemList
            items={items}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Item Display */}
        <div className="md:w-2/3 mt-2">
          {selectedItem ? <ItemDisplay item={selectedItem} /> : <p>No item selected</p>}
        </div>
      </div>
    </section>
  );
}
