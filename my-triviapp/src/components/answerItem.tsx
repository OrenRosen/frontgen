import React, { SyntheticEvent } from "react";

interface IProps {
  cname: string;
  answer: string;
  checked: boolean;
  onChange: (e: SyntheticEvent) => void;
}

const AnswerItem: React.FC<IProps> = ({ answer, checked, onChange, cname }) => {
  const className = "AnswerItem " + cname;
  return (
    <div className={className}>
      <input checked={checked} type="radio" onChange={onChange} />
      <span>{answer}</span>
    </div>
  );
};

export default AnswerItem;
