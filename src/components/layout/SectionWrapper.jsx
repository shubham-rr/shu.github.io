import { useState } from "react";
import ItemList from './../shared/ItemList';
import ItemDisplay from './../shared/ItemDisplay';

export default function SectionWrapper({ heading, items }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id);

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <section className="w-[95%] mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
      <hr className="border-[var(--primary)] mb-6" />
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Item List */}
        <div className="md:w-1/3">
          <ItemList
            items={items}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Item Display */}
        <div className="md:w-2/3">
          {selectedItem ? <ItemDisplay item={selectedItem} /> : <p>No item selected</p>}
        </div>
      </div>
    </section>
  );
}
