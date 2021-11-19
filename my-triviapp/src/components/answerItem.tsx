import React, { SyntheticEvent } from "react";

interface IProps {
  answer: string;
  checked: boolean;
  onChange: (e: SyntheticEvent) => void;
}

const AnswerItem: React.FC<IProps> = ({ answer, checked, onChange }) => (
  <div>
    <input checked={checked} type="radio" onChange={onChange} />
    <span>{answer}</span>
  </div>
);

export default AnswerItem;
