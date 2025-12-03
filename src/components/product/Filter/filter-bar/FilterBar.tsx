import { Icon } from "@/components/common/Icon/Icon";
import { type FC } from "react";
import "./FilterBar.css";

interface FilterBarProps {
  isFilterVisible: boolean;
  onToggle: () => void;
}

const FilterBar: FC<FilterBarProps> = ({ isFilterVisible, onToggle }) => {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <span className="item-count">3425 ITEMS</span>

        <button className="filter-toggle" onClick={onToggle}>
          <span className="arrow-icon">
            <Icon
              name="arrow"
              direction={isFilterVisible ? "right" : "left"}
              size={16}
            />
          </span>
          {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      {/* Right Side: Sort Dropdown */}
      <div className="filter-right">
        <button className="sort-dropdown">
          RECOMMENDED
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
