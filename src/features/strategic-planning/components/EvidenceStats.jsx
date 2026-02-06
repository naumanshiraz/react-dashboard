import { HugeiconsIcon } from "@hugeicons/react";
import {
  Files01Icon,
  FileSearchIcon,
  FileExportIcon,
  FileValidationIcon,
} from "@hugeicons/core-free-icons";

const iconMap = {
  file: Files01Icon,
  review: FileSearchIcon,
  progress: FileExportIcon,
  completed: FileValidationIcon,
};

export default function EvidenceStats({ evidenceStats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {evidenceStats.map((item) => {
        const iconData = iconMap[item.icon];

        return (
          <div
            key={item.label}
            className="bg-white border rounded-xl p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
              <HugeiconsIcon
                icon={iconData}
                size={20}
                strokeWidth={1.8}
                className="text-red-500"
              />
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 leading-tight">
                {item.value}
              </p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
