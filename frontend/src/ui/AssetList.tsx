import { useState } from "react";
import { Asset, AssetRespose } from "../api/assets/type";
import ChartDialog from "./ChartDialog";

const AssetList = ({ data }: { data: AssetRespose | undefined }) => {
  const [isOpen, setIsOpen] = useState<{ open: boolean; asset: Asset | null }>({
    open: false,
    asset: null,
  });

  const handleClickRow = (asset: Asset) => {
    setIsOpen({ open: true, asset: asset });
  };

  return (
    <>
      {data?.data.map((asset: any, index: number) => (
        <tr
          key={index}
          className="cursor-pointer border-b duration-300 hover:bg-light-grey"
          onClick={() => handleClickRow(asset)}
        >
          <td className="w-1/3 p-4">{asset.name}</td>
          <td className="p-4">{asset.value.toLocaleString()}</td>
          <td className="p-4">{asset.type}</td>
          <td className="p-4">{asset.apr.toLocaleString()}%</td>
          <td className="p-4">{asset.performance.toLocaleString()}%</td>
        </tr>
      ))}

      {isOpen.open && isOpen.asset && (
        <ChartDialog
          isOpen={{ open: isOpen.open, asset: isOpen.asset }}
          onClose={() => setIsOpen({ open: false, asset: null })}
        />
      )}
    </>
  );
};

export default AssetList;
