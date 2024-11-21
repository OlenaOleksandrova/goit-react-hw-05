import { Field, Form, Formik } from 'formik';
import React from 'react'

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
                <Form>
                    <Field name="query" placeholder="Введіть назву фільма" />
                    <button type='submit'>Search</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SearchMovie