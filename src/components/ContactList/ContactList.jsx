import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={styles.listItem}>
                    <Contact
                        name={name}
                        number={number}
                        onDelete={() => handleDelete(id)}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;