import { useNavigate } from "react-router-dom";

const FeatureCard = (props: {
  title: string;
  desc: string;
  repoUrl: string;
}) => {
  const { title, desc, repoUrl } = props;

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(repoUrl);
  };
  return (
    <div
      className="p-6 bg-neutral-900 border rounded-3xl border-white/10"
      onClick={handleCardClick}
    >
      <div className="flex items-center justify-center ">
        <h3 className="text-4xl  font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent  mt-6">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-white/50"> {desc}</p>
    </div>
  );
};

export default FeatureCard;
