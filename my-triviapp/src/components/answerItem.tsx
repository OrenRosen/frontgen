interface IProps {
  cname: string;
  answer: string;
  onSelectAnswer: (answer: string) => void;
}

const AnswerItem: React.FC<IProps> = ({ answer, onSelectAnswer, cname }) => {
  const handleChange = (e: any) => {
    onSelectAnswer(e);
  };

  const className = "AnswerItem " + cname;
  return (
    <div className={className} onClick={handleChange}>
      {answer}
    </div>
  );
};

export default AnswerItem;
