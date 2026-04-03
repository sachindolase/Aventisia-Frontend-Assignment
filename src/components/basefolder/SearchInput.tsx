import { Search } from "lucide-react";
// import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({ value, onChange, placeholder = "Search...", className }: SearchInputProps) => {
  return (
    <div className={`flex items-center gap-2 border border-input rounded-lg px-2 md:px-3 py-1.5 w-full sm:w-40 md:w-48 ${className || ""}`}>
      <Search size={16} className="text-muted-foreground flex-shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
      />
    </div>
  );
};

export default SearchInput;
