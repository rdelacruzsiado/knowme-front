import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import api from "../../api";

const Register = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Campo requerido"),
      lastName: Yup.string().max(255).required("Campo requerido"),
      email: Yup.string()
        .email("Debe ser un correo válido")
        .max(255)
        .required("Campo requerido"),
      password: Yup.string().max(255).required("Campo requerido"),
    }),
    onSubmit: async (values) => {
      try {
        await api.post("/auth/signup", values);
        navigate("/sign-in");
      } catch (err) {
        setSubmitError(err.message);
      }
    },
  });

  return (
    <Box
      sx={{
        flex: "1 1 auto",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 550,
          px: 3,
          py: "100px",
          width: "100%",
        }}
      >
        <div>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">Registrarse</Typography>
            <Typography color="text.secondary" variant="body2">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/sign-in" underline="hover" variant="subtitle2">
                Iniciar sesión
              </Link>
            </Typography>
          </Stack>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                error={formik.touched.name && formik.errors.name}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Nombre(s)"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <TextField
                error={formik.touched.lastName && formik.errors.lastName}
                fullWidth
                helperText={formik.touched.lastName && formik.errors.lastName}
                label="Apellido(s)"
                name="lastName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <TextField
                error={formik.touched.email && formik.errors.email}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Correo"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
              />
              <TextField
                error={formik.touched.password && formik.errors.password}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Contraseña"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
              />
            </Stack>
            {submitError && (
              <Typography color="error" sx={{ mt: 3 }} variant="body2">
                {submitError}
              </Typography>
            )}
            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
            >
              Continuar
            </Button>
          </form>
        </div>
      </Box>
    </Box>
  );
};

export default Register;
