import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type PaginatorProps = {
  page: number;
  from: number;
  to: number;
  total: number;
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
};

const Paginator = ({
  page,
  from,
  to,
  total,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: PaginatorProps) => (
  <div className="my-6 flex items-center justify-between text-sm">
    <span>
      Showing <span className="font-semibold">{from}</span> to{" "}
      <span className="font-semibold">{to}</span> of{" "}
      <span className="font-semibold">{total}</span> results
    </span>

    <div className="flex gap-2">
      {page > 1 && (
        <button
          onClick={handlePreviousPage}
          className="flex items-center gap-2 rounded-lg border border-mid-grey px-4 py-2 font-semibold duration-300 hover:bg-light-grey"
        >
          <ArrowLeftIcon strokeWidth={2} className="size-3" />
          <span>Previous</span>
        </button>
      )}

      {page < totalPages && (
        <button
          onClick={handleNextPage}
          className="flex items-center gap-2 rounded-lg border border-mid-grey px-4 py-2 font-semibold duration-300 hover:bg-light-grey"
        >
          <span>Next</span>
          <ArrowRightIcon strokeWidth={2} className="size-3" />
        </button>
      )}
    </div>
  </div>
);

export default Paginator;
