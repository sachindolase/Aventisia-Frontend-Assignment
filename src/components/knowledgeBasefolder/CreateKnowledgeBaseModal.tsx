import { useState } from "react";
import SlidePanel from "@/components/basefolder/SlidePanel";
import { Button } from "@/components/basefolder/Buttonfile";

interface CreateKnowledgeBaseModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateKnowledgeBaseModal = ({ open, onClose }: CreateKnowledgeBaseModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vectorStore, setVectorStore] = useState("Qdrant");
  const [embeddingModel, setEmbeddingModel] = useState("text-embedding-ada-002");

  const handleCreate = () => {
    onClose();
  };

  return (
    <SlidePanel
      open={open}
      onClose={onClose}
      title="Create New Knowledge Base"
      subtitle="Best for quick answers from documents, websites and text files."
      footer={<Button onClick={handleCreate}>Create</Button>}
    >
      {/* Name */}
      <div>
        <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5">
          Name (Cannot be edited later)*
        </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-input rounded-md px-2 md:px-3 py-2 text-xs md:text-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5">
          Description
        </label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full border border-input rounded-md px-2 md:px-3 py-2 text-xs md:text-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      {/* Vector Store */}
      <div>
        <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5">
          Vector Store*
        </label>
        <select
          value={vectorStore}
          onChange={(e) => setVectorStore(e.target.value)}
          className="w-full border border-input rounded-md px-2 md:px-3 py-2 text-xs md:text-sm bg-card text-foreground outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="Qdrant">Qdrant</option>
          <option value="Pinecone">Pinecone</option>
          <option value="Weaviate">Weaviate</option>
        </select>
      </div>

      {/* LLM Embedding Model */}
      <div>
        <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5">
          LLM Embedding Model*
        </label>
        <select
          value={embeddingModel}
          onChange={(e) => setEmbeddingModel(e.target.value)}
          className="w-full border border-input rounded-md px-2 md:px-3 py-2 text-xs md:text-sm bg-card text-foreground outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="text-embedding-ada-002">text-embedding-ada-002</option>
          <option value="text-embedding-3-small">text-embedding-3-small</option>
          <option value="text-embedding-3-large">text-embedding-3-large</option>
        </select>
      </div>
    </SlidePanel>
  );
};

export default CreateKnowledgeBaseModal;


