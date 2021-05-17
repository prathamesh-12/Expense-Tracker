import ReactDOM from "react-dom";

import Card from "../Card/Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = () => (
  <div className={classes.backdrop} ></div>
);

const Overlay = ({title, content, onModalClick}) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        <h2>{title}</h2>
      </div>
      <div className={classes.content}>{content}</div>
      <div className={classes.actions}>
        <Button type="button" onClick={onModalClick}>
          Close
        </Button>
      </div>
    </Card>
  );
}

const ErrorModal = ({ title, content, onModalClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onModalClick={onModalClick} />,
        document.querySelector("#root-backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay title={title} content={content} onModalClick={onModalClick} />,
        document.querySelector("#root-overlay")
      )}
    </>
  );
};

export default ErrorModal;
