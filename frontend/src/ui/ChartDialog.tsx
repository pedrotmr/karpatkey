import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Asset } from "../api/assets/type";
import TradingViewChart from "./TradingViewChart";

type ChartDialogProps = {
  isOpen: { open: boolean; asset: Asset };
  onClose: () => void;
};

const ChartDialog = ({ isOpen, onClose }: ChartDialogProps) => {
  const { open, asset } = isOpen;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-k-black bg-opacity-75 transition-opacity duration-300" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-[70dvw] rounded-lg bg-off-white p-12">
          <DialogTitle className="mb-4 text-2xl font-bold">
            {asset?.name}
          </DialogTitle>
          <TradingViewChart asset={asset} />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ChartDialog;
