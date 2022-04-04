import React from 'react';
import { useFormik } from 'formik';
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { BootstrapButton } from '../components/Buttons/Buttons'
import { Card, Grid, Typography, Box } from "@mui/material";

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export const UserForm = () => {

    const { addDataLocalStorage } = useContext(CartContext);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            addDataLocalStorage(JSON.stringify(values, null, 2))
        },
    });
    return (
        <Grid>
            <Box sx={{ fontWeight: "bold", display: 'flex', justifyContent: 'center', paddingTop: '3rem' }}>
                <Typography variant="h2" >Main Dishes</Typography>
            </Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem' }}>
                <Grid sx={{ maxWidth: '1200px' }}>
                    <Card sx={{ padding: '2rem' }} style={{ backgroundColor: "#f5f5f5" }}>
                        <Typography variant="h3" color='secondary' sx={{ pb: '1rem', fontWeight: "bold", mb: '3rem' }}>Tus Datos</Typography>
                        <Typography variant="h6" sx={{ pb: '1rem', mb: '1rem' }}>Ingresa tus datos personales para que acordemos la forma de entrega</Typography>

                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', padding: '.5rem' }}>
                                <Grid item xs={12}>
                                    <label htmlFor="firstName" style={{ padding: '1rem', fontWeight: "bold"  }}>Nombre</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        style={{ padding: '.5rem', borderRadius: '5px', border: '1px gray solid' }}
                                    />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <Typography sx={{ p: '1rem' }} color="error">
                                            Este dato es obligatorio
                                        </Typography>
                                    ) : null}
                                </Grid>
                                <Grid item xs={12}>
                                    <label htmlFor="lastName" style={{ padding: '1rem', fontWeight: "bold"  }}>Apellido</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                        style={{ padding: '.5rem', borderRadius: '5px', border: '1px gray solid' }}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <Typography sx={{ p: '1rem' }} color="error">
                                            Este dato es obligatorio
                                        </Typography>
                                    ) : null}

                                </Grid>
                                <Grid item xs={12}>
                                    <label htmlFor="email" style={{ padding: '1rem', fontWeight: "bold" }}>Correo electrónico</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        style={{ padding: '.5rem', borderRadius: '5px', border: '1px gray solid' }}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <Typography sx={{ p: '1rem' }} color="error">
                                            Este dato es obligatorio
                                        </Typography>
                                    ) : null}
                                </Grid>
                                <Grid item xs={12}>
                                    <BootstrapButton type="submit">Confirmar compra</BootstrapButton>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Grid>


    );
};