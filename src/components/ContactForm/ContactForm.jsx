import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ setSomeContacts }) => {
  const [contactData, setContactData] = useState({
    id: '',
    name: '',
    number: '',
  });

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Invalid phone number format (should be 111-22-33)'
      )
      .required('Required'),
  });
  const nameFieldID = useId();
  const numberFieldID = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    setSomeContacts(prevContacts => [...prevContacts, newContact]);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={contactData}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldID}>Name</label>
        <Field
          className={css.inputFields}
          id={nameFieldID}
          type="text"
          name="name"
        ></Field>
        <ErrorMessage name="name" as="span" />

        <label htmlFor={numberFieldID}>Number</label>
        <Field
          className={css.inputFields}
          id={numberFieldID}
          type="tel"
          name="number"
        ></Field>
        <ErrorMessage className={css.error} name="number" as="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
