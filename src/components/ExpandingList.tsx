import React from "react";
import "./ExpandingList.css";
import { useNavigate } from "react-router-dom";
interface ExpandingListProps {
  title: string;
  description: string;
  id: string;
}

const ExpandingList: React.FC<ExpandingListProps> = ({
  title,
  description,
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = (id: any) => {
    console.log("ddd");

    navigate("/sublesson/" + id); // Navigates to the Lesson page
  };
  return (
    <div className="expand-list">
      <div
        className="expand-title"
        onClick={() => {
          handleClick(id);
        }}
      >
        {title}
      </div>

      <div className="expand-description">{description}</div>
    </div>
  );
};
export default ExpandingList;
