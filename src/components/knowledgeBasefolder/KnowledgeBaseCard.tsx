import InfoCard from "@/components/basefolder/InfoCard";

interface KnowledgeBaseCardProps {
  title: string;
  description: string;
  createdOn: string;
}

const KnowledgeBaseCard = ({ title, description, createdOn }: KnowledgeBaseCardProps) => {
  return (
    <InfoCard
      title={title}
      description={description}
      meta={`Created On: ${createdOn}`}
    />
  );
};

export default KnowledgeBaseCard;


