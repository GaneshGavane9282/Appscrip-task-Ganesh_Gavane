import { useState, type FC } from "react";
import "./FilterSidebar.css";
import { FILTERS } from "@/constants/constants";
import { Icon } from "@/components/common/Icon/Icon";

interface FilterSidebarProps {
  isVisible: boolean;
}

const FilterSidebar: FC<FilterSidebarProps> = ({ isVisible }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    ideal: false,
    occasion: false,
  });

  // FIX 2: Explicitly type 'id' as a string
  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isVisible) return null;

  return (
    <aside className="filter-sidebar">
      {/* Top Checkbox */}
      <label className="customizable-option">
        <input type="checkbox" />
        CUSTOMIZABLE
      </label>

      {/* Filter Categories */}
      {FILTERS.map((filter) => (
        <div key={filter.id} className="filter-item">
          <div
            className="filter-header"
            onClick={() => toggleSection(filter.id)}
          >
            <div>
              <div className="filter-title">{filter.name}</div>
              <div className="filter-subtitle">All</div>
            </div>
            {/* Now TypeScript knows openSections accepts any string key */}
            <div className={`arrow ${openSections[filter.id] ? "open" : ""}`}>
              <Icon name="arrow" size={16} />
            </div>
          </div>

          {openSections[filter.id] && (
            <div className="filter-content">
              {filter.options.map((opt) => (
                <label key={opt} className="filter-option">
                  <input type="checkbox" />
                  {opt}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
