import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <p>
          <FaUser />
          <span className={css.value}>{name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span className={css.value}>{number}</span>
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
