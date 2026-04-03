
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";
import SearchInput from "@/components/basefolder/SearchInput";
import KnowledgeBaseCard from "@/components/knowledgeBasefolder/KnowledgeBaseCard";
import Pagination from "@/components/knowledgeBasefolder/Pagination";
import CreateKnowledgeBaseModal from "@/components/knowledgeBasefolder/CreateKnowledgeBaseModal";
import { Button } from "@/components/basefolder/Buttonfile";
import { useState } from "react";
import { Plus } from "lucide-react";

const sampleData = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Test",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  createdOn: "14/07/2025",
}));



const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredData = sampleData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 overflow-hidden">
        <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 p-3 md:p-6 flex flex-col overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 md:mb-6 flex-wrap">
            <h1 className="text-lg md:text-xl font-semibold text-foreground">Knowledge Base</h1>
            <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto flex-wrap">
              <SearchInput value={searchQuery} onChange={setSearchQuery} />
              <Button onClick={() => setModalOpen(true)} className="text-xs md:text-sm">
                <Plus size={16} />
                <span className="hidden sm:inline">Create New</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 flex-1 overflow-auto">
            {filteredData.map((item) => (
              <KnowledgeBaseCard
                key={item.id}
                title={item.title}
                description={item.description}
                createdOn={item.createdOn}
              />
            ))}
          </div>
           <Pagination
            totalRows={filteredData.length}
            rowsPerPage={10}
            currentPage={1}
            totalPages={1}
          />
          </main>
      </div>
       <CreateKnowledgeBaseModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />



    </div>
  );
};

export default Index;
