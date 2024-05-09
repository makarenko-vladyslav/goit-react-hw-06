import { useSelector } from "react-redux";
import { getContacts, getSearchQuery } from "../../redux/selectors";

import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(getContacts);

  const searchValue = useSelector(getSearchQuery);

  const visibleContacts = contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.name.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
