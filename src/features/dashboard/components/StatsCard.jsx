import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartBarLineIcon,
  FileSecurityIcon,
  FileUploadIcon,
  FileVerifiedIcon,
  Folder01Icon,
  FolderCheckIcon,
} from "@hugeicons/core-free-icons";

export default function StatsCard({ id, value, label }) {
  const iconMap = {
    progress: ChartBarLineIcon,
    criteria: Folder01Icon,
    completed: FolderCheckIcon,
    docs: FileSecurityIcon,
    evidenceCompleted: FileVerifiedIcon,
    uploaded: FileUploadIcon,
  };

  const iconData = iconMap[id];

  return (
    <div className="card w-full sm:w-auto p-3 sm:p-4 min-w-0 sm:min-w-[176px] relative border shadow-none mb-3 sm:mb-0">
      <div className="text-lg sm:text-xl font-bold text-tahwulBlue">
        {value}
      </div>
      <div className="text-xs sm:text-sm muted mt-1 sm:mt-2">
        {label}
      </div>
      <HugeiconsIcon
        icon={iconData}
        size={20}
        strokeWidth={1.8}
        className="text-red-500 absolute top-3 right-3 sm:top-4 sm:right-4"
      />
    </div>
  );
}
