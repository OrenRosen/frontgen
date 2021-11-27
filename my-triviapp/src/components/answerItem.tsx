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

  console.log("-999---", cname);
  const className = "AnswerItem " + cname;
  return (
    <div className={className} onClick={handleChange}>
      {answer}
    </div>
  );
};

export default AnswerItem;
