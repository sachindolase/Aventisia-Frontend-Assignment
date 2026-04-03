import {
  Bot,
  Cpu,
  BookOpen,
  Send,
  Monitor,
  ListOrdered,
  Zap,
  Briefcase,
  Play,
  Lock,
  Brain,
  Key,
  Building,
  Puzzle,
} from "lucide-react";

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

interface SidebarSection {
  heading: string;
  items: SidebarItem[];
}

const sections: SidebarSection[] = [
  {
    heading: "MY PROJECTS",
    items: [
      { label: "Agents", icon: <Bot size={18} /> },
      { label: "AI Models", icon: <Cpu size={18} /> },
      { label: "Library", icon: <BookOpen size={18} /> },
    ],
  },
  {
    heading: "ORCHESTRATOR",
    items: [
      { label: "Published", icon: <Send size={18} /> },
      { label: "Machines", icon: <Monitor size={18} /> },
      { label: "Queues", icon: <ListOrdered size={18} /> },
      { label: "Triggers", icon: <Zap size={18} /> },
      { label: "Jobs", icon: <Briefcase size={18} /> },
      { label: "Executions", icon: <Play size={18} /> },
      { label: "Vault", icon: <Lock size={18} /> },
      { label: "Knowledge Base", icon: <Brain size={18} />, active: true },
      { label: "Key Store", icon: <Key size={18} /> },
    ],
  },
  {
    heading: "ADMIN",
    items: [
      { label: "Tenant", icon: <Building size={18} /> },
      { label: "Integrations", icon: <Puzzle size={18} /> },
    ],
  },
];

interface AppSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AppSidebar = ({ isOpen = true, onClose }: AppSidebarProps) => {
  // Mobile sidebar should close after clicking
  const handleItemClick = () => {
    if (onClose) onClose();
  };

  return (
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static top-14 left-0 h-[calc(100vh-56px)] md:h-[calc(100vh-56px)] w-48 md:w-[200px] border-r border-border bg-card flex flex-col pt-2 transition-transform duration-300 ease-in-out z-20`}>
      {/* Sections */}
      <nav className="flex-1 overflow-y-auto py-2">
        {sections.map((section) => (
          <div key={section.heading} className="mb-2">
            <p className="px-4 py-2 text-[11px] font-semibold tracking-wider text-muted-foreground">
              {section.heading}
            </p>
            {section.items.map((item) => (
              <div
                key={item.label}
                onClick={handleItemClick}
                className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-md text-sm cursor-pointer transition-colors ${
                  item.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium border-l-[3px] border-primary"
                    : "text-sidebar-foreground hover:bg-secondary"
                }`}
              >
                {item.icon}
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;
