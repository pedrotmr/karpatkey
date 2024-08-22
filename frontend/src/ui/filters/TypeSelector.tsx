type TypeSelectorProps = {
  type: string;
  options: Option[];
  handleSelectType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type Option = {
  value: string;
  label: string;
};

const TypeSelector = ({
  type,
  options,
  handleSelectType,
}: TypeSelectorProps) => (
  <form>
    <label htmlFor="filter-type" className="mr-2 text-sm font-medium">
      Filter by type:
    </label>
    <select
      id="filter-type"
      value={type || ""}
      onChange={handleSelectType}
      className="cursor-pointer rounded-lg border border-mid-grey bg-off-white px-2 py-1 text-sm duration-300 hover:bg-light-grey focus:outline-none"
    >
      {options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </form>
);

export default TypeSelector;
