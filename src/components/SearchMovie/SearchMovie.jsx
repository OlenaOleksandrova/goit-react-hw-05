import { Field, Form, Formik } from 'formik';
import React from 'react'
import s from "./SearchMovie.module.css"

const SearchMovie = ({handleSetQuery}) => {
    const handleSubmit = (values) => {
        console.log(values);
        handleSetQuery(values.query);
    };
    const initialValues = {
        query: "",
    };
    return (
        <div>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className={s.form}>
                    <Field className={s.field} name="query"
                           placeholder="Введіть назву фільма" />
                    <button className={s.button} type='submit'>Search</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SearchMovie