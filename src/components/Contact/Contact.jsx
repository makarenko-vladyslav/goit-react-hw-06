import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>

        <p className={css.text}>
          <IoCall />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
