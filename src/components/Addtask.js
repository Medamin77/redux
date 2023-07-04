import { addTask } from "../redux/actions/taskActions";
import { useState } from "react";
import { useDispatch } from "react-redux";


const Addtask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onChange = (ev) => setText(ev.target.value);
  const onClick = () => {
    if (text !== "") {
      dispatch(
        addTask({
          id: Date.now(),
          description: text,
          isDone: false,
        })
      );
      setText("");
    } else {
      alert("please enter a text");
    }
  };
  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={text}
        onChange={onChange}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={onClick}
      >
        Button
      </button>
    </div>
  );
};
export default Addtask;