import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAssets } from "../api/assets/get-assets";
import AssetList from "../ui/AssetList";
import Paginator from "../ui/Paginator";
import SortableTableHeader from "../ui/SortableTableHeader";
import PerPageSelector from "../ui/filters/PerPageSelector";
import TypeSelector from "../ui/filters/TypeSelector";

const queryTypeOptions = [
  { value: "", label: "All" },
  { value: "cryptocurrency", label: "Cryptocurrency" },
  { value: "stocks", label: "Stocks" },
  { value: "bonds", label: "Bonds" },
  { value: "commodity", label: "Commodity" },
  { value: "currency", label: "Currency" },
];

const Assets = () => {
  const [type, setSelectedType] = useState<string>(queryTypeOptions[0].value);
  const [sort, setSortValue] = useState<string>("name");
  const [order, setOrderOption] = useState<string>("asc");
  const [page, setCurrentPage] = useState<number>(1);
  const [limit, setItemsPerPage] = useState<number>(10);

  const { data, isLoading, error } = useQuery({
    queryKey: ["assets", type, sort, order, page, limit],
    queryFn: () => getAssets({ type, sort, order, page, limit }),
  });

  const { pages } = data ?? {};

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading assets</div>;

  const handleSelectLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (column: string) => {
    if (sort === column) {
      setOrderOption(order === "asc" ? "desc" : "asc");
    } else {
      setSortValue(column);
      setOrderOption("asc");
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Assets</h1>

      <div className="mb-6 flex items-center gap-8">
        <TypeSelector
          type={type}
          options={queryTypeOptions}
          handleSelectType={handleSelectType}
        />
        <PerPageSelector limit={limit} handleSelectLimit={handleSelectLimit} />
      </div>

      <div className="overflow-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <SortableTableHeader
                columnKey="name"
                label="Name"
                sort={sort}
                order={order}
                handleSort={handleSort}
              />
              <SortableTableHeader
                columnKey="value"
                label="Value"
                sort={sort}
                order={order}
                handleSort={handleSort}
              />
              <SortableTableHeader
                columnKey="type"
                label="Type"
                sort={sort}
                order={order}
                handleSort={handleSort}
              />
              <SortableTableHeader
                columnKey="apr"
                label="APR"
                sort={sort}
                order={order}
                handleSort={handleSort}
              />
              <SortableTableHeader
                columnKey="performance"
                label="Performance"
                sort={sort}
                order={order}
                handleSort={handleSort}
              />
            </tr>
          </thead>
          <tbody>
            <AssetList data={data} />
          </tbody>
        </table>
      </div>

      {pages && (
        <Paginator
          page={page}
          from={pages.from}
          to={pages.to}
          total={pages.total}
          totalPages={pages.totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      )}
    </>
  );
};

export default Assets;
