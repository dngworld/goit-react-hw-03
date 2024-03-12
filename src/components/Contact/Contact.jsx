import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import css from './Contact.css';
const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <p>
        <FaUser />
        {name}
      </p>
      <p>
        <FaPhoneAlt />
        {number}
      </p>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
