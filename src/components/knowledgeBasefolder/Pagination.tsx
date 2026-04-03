import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
  totalRows: number;
  rowsPerPage: number;
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ totalRows, rowsPerPage, currentPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-3 md:px-4 py-3 border-t border-border text-xs md:text-sm text-muted-foreground">
      <span className="whitespace-nowrap">{totalRows} rows</span>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap hidden sm:inline">Rows per page</span>
          <select className="border border-input rounded px-2 py-1 text-xs md:text-sm bg-card text-foreground">
            <option>{rowsPerPage}</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        <span className="whitespace-nowrap">
          page {currentPage} of {totalPages}
        </span>

        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-secondary border border-input transition-colors" title="First page">
            <ChevronsLeft size={14} />
          </button>
          <button className="p-1 rounded hover:bg-secondary border border-input transition-colors" title="Previous page">
            <ChevronLeft size={14} />
          </button>
          <button className="p-1 rounded hover:bg-secondary border border-input transition-colors" title="Next page">
            <ChevronRight size={14} />
          </button>
          <button className="p-1 rounded hover:bg-secondary border border-input transition-colors" title="Last page">
            <ChevronsRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

