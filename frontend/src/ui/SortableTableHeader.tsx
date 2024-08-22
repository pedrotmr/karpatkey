import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

type SortableTableHeaderProps = {
  columnKey: string;
  label: string;
  sort: string;
  order: string;
  handleSort: (columnKey: string) => void;
};

const SortableTableHeader = ({
  columnKey,
  label,
  sort,
  order,
  handleSort,
}: SortableTableHeaderProps) => {
  return (
    <th
      className="cursor-pointer p-4 text-left"
      onClick={() => handleSort(columnKey)}
    >
      <div className="flex items-center gap-4">
        <span>{label}</span>
        {sort === columnKey && (
          <button>
            {order === "asc" ? (
              <ArrowUpIcon className="size-4" />
            ) : (
              <ArrowDownIcon className="size-4" />
            )}
          </button>
        )}
      </div>
    </th>
  );
};

export default SortableTableHeader;
