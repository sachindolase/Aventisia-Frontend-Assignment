import { MoreVertical } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  meta?: string;
  onMenuClick?: () => void;
  className?: string;
}


const InfoCard = ({ title, description, meta, onMenuClick, className }: InfoCardProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg p-3 md:p-4 flex flex-col justify-between hover:shadow-md transition-shadow h-full ${className}`}>
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground text-xs md:text-sm line-clamp-2">{title}</h3>
          <button
            onClick={onMenuClick}
            className="text-muted-foreground hover:text-foreground p-0.5"
          >
            <MoreVertical size={16} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
      {meta && (
        <p className="text-xs text-muted-foreground mt-4">{meta}</p>
      )}
    </div>
  );
};

export default InfoCard;
