import { Search, ChevronDown, Menu } from "lucide-react";

interface AppHeaderProps {
  onToggleSidebar?: () => void;
}

const AppHeader = ({ onToggleSidebar }: AppHeaderProps) => {
  return (
    <header className="h-14 bg-foreground flex items-center px-3 md:px-4 gap-2 md:gap-4 sticky top-0 z-30">
      {/* Hamburger Menu */}
      <button
        onClick={onToggleSidebar}
        className="md:hidden text-primary-foreground p-1 hover:bg-primary/20 rounded"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>

      {/* Workspace Info - Hidden on small screens */}
      <div className="hidden sm:flex items-center gap-2 md:gap-3">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">W</span>
        </div>
        <span className="text-primary-foreground font-semibold text-xs md:text-sm hidden sm:inline">Workspace</span>
        <button className="hidden md:flex items-center gap-1.5 bg-primary rounded-md px-2 md:px-3 py-1 text-primary-foreground text-xs font-medium hover:bg-primary/90">
          Workspace 1
          <ChevronDown size={12} />
        </button>
      </div>

      {/* Search Bar - Responsive */}
      <div className="flex-1 flex justify-center">
        <div className="hidden sm:flex items-center gap-2 bg-foreground/80 border border-muted-foreground/30 rounded-lg px-3 py-1.5 w-full md:w-80 max-w-sm">
          <Search size={16} className="text-yellow-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-primary-foreground placeholder:text-muted-foreground text-sm outline-none w-full"
          />
          <kbd className="hidden md:block text-xs text-muted-foreground border border-muted-foreground/30 rounded px-1.5 py-0.5 flex-shrink-0">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right side - Avatar */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:bg-primary/90 cursor-pointer">
          <span className="text-primary-foreground text-xs font-semibold">GK</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
