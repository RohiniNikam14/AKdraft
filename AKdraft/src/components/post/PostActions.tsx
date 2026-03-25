import Button from "../common/Button";

const PostActions = ({ post }: any) => {
  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("saved") || "[]");
    saved.push(post);
    localStorage.setItem("saved", JSON.stringify(saved));
  };

  return (
    <div>
      <Button text="🔖 Save" onClick={handleSave} />
    </div>
  );
};

export default PostActions;