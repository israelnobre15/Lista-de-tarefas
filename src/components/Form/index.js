import react from "react";
import "./Form.css";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
export default function Form({ handleSubmit, inputChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="Form">
      <input onChange={inputChange} type="text" value={novaTarefa}></input>
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
