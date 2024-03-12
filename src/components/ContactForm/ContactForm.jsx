import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Not enough symbols!')
    .max(50, 'Too long!')
    .required('Required field!'),
  number: Yup.string()
    .min(9, 'Not enough symbols!')
    .max(9, 'Too long!')
    .required('Required field!'),
});
const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(7), ...values });
        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
