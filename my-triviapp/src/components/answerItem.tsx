import React, { SyntheticEvent } from "react";

interface IProps {
  cname: string;
  answer: string;
  checked: boolean;
  onSelectAnswer: (answer: string) => void;
}

const AnswerItem: React.FC<IProps> = ({
  answer,
  checked,
  onSelectAnswer,
  cname,
}) => {
  const handleChange = () => {
    onSelectAnswer(answer);
  };

  const className = "AnswerItem " + cname;
  return (
    <div className={className} onClick={handleChange}>
      <input checked={checked} type="radio" onChange={handleChange} />
      <span>{answer}</span>
    </div>
  );
};

export default AnswerItem;
