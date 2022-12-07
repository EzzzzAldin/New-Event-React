import classes from "./AccordionList.module.css";
import Accordion from "./Accordion";

const DUMMY_QUESTIONS = [
  {
    id: "q1",
    question: "What is Responsive Design ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro exercitationem magnam dolorum impedit consequuntur necessitatibus at et praesentium, ab dolores accusantium nobis neque rerum, vel adipisci asperiores similique ducimus. Adipisci?",
  },
  {
    id: "q2",
    question: "What are latest UX Development ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro exercitationem magnam dolorum impedit consequuntur necessitatibus at et praesentium, ab dolores accusantium nobis neque rerum, vel adipisci asperiores similique ducimus. Adipisci?",
  },
  {
    id: "q3",
    question: "What things about Social Media will be discussed ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro exercitationem magnam dolorum impedit consequuntur necessitatibus at et praesentium, ab dolores accusantium nobis neque rerum, vel adipisci asperiores similique ducimus. Adipisci?",
  },
];

const AccordionList = () => {
  const questions = DUMMY_QUESTIONS.map((question) => (
    <Accordion
      key={question.id}
      question={question.question}
      answer={question.answer}
    />
  ));

  return (
    <section className={classes.accordion}>
      <h3>
        Do You Have <span>Question</span> ?
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      {questions}
    </section>
  );
};

export default AccordionList;
