type PerPageSelectorProps = {
  limit: number;
  handleSelectLimit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const PerPageSelector = ({
  limit,
  handleSelectLimit,
}: PerPageSelectorProps) => (
  <form>
    <label htmlFor="items-per-page" className="mr-2 text-sm font-medium">
      Items per page:
    </label>
    <select
      id="items-per-page"
      value={limit || ""}
      onChange={handleSelectLimit}
      className="cursor-pointer rounded-lg border border-mid-grey bg-off-white px-2 py-1 text-sm duration-300 hover:bg-light-grey focus:outline-none"
    >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
    </select>
  </form>
);

export default PerPageSelector;
