export default function EvidenceTable({ evidenceRows }) {
  return (
    <div className="bg-white rounded-xl border mb-5">
      <div className="overflow-x-auto">
        <div className="hidden md:grid grid-cols-[120px_1fr_1fr_1fr_120px_120px_120px] gap-4 px-6 py-3 bg-slate-50 text-xs font-medium text-slate-500">
          <HeaderCell>Document Number</HeaderCell>
          <HeaderCell>Document Name</HeaderCell>
          <HeaderCell>Document Lead</HeaderCell>
          <HeaderCell>Document Preparer</HeaderCell>
          <HeaderCell>Date</HeaderCell>
          <HeaderCell>Due Date</HeaderCell>
          <HeaderCell>Status</HeaderCell>
        </div>

        <div className="divide-y">
          {evidenceRows.map((row, idx) => (
            <div
              key={idx}
              className="
                grid gap-4 px-4 py-4 text-sm text-slate-700
                md:grid-cols-[120px_1fr_1fr_1fr_120px_120px_120px]
                md:px-6 md:items-center"
            >
              <Cell label="Document Number">{row.number}</Cell>
              <Cell label="Document Name">
                <a
                  href="#"
                  className="text-blue-600 text-[12px] hover:underline"
                >
                  {row.name}
                </a>
              </Cell>
              <Cell label="Document Lead">{row.lead}</Cell>
              <Cell label="Document Preparer">{row.preparer}</Cell>
              <Cell label="Date">{row.date}</Cell>
              <Cell label="Due Date">{row.dueDate}</Cell>
              <Cell label="Status">
                <StatusBadge status={row.status} />
              </Cell>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeaderCell({ children }) {
  return (
    <div className="flex items-center gap-1">
      {children}
      <span className="text-slate-400 text-[10px]">↕</span>
    </div>
  );
}

function Cell({ label, children, className = "" }) {
  return (
    <div className={`flex flex-col md:block ${className}`}>
      <span className="md:hidden text-[11px] text-slate-400 mb-1">
        {label}
      </span>
      {children}
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Approved: "bg-green-100 text-green-600",
    "Pending Review": "bg-yellow-100 text-yellow-600",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}
