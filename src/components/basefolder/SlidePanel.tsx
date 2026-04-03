import { X } from "lucide-react";

interface SlidePanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const SlidePanel = ({ open, onClose, title, subtitle, children, footer, className }: SlidePanelProps) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 md:w-[480px] bg-card z-50 shadow-2xl flex flex-col animate-slide-in ${className}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 md:p-6 pb-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-4 md:space-y-5">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="p-4 md:p-6 pt-4 border-t border-border flex justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </>
  );
};

export default SlidePanel;
