import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Stack, TextField, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const validationSchema = yup.object({
  email: yup.string().required("Campo requerido"),
  password: yup.string().required("Campo requerido"),
});

const Login = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await api.post("/auth/login", values);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } catch (err) {
        setSubmitError(err.message);
      }
    },
  });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
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
              <Typography align="center" variant="h4">
                Iniciar sesión
              </Typography>
              <Typography color="text.secondary" variant="body2">
                ¿No tienes una cuenta?{" "}
                <Link href="/sign-up" underline="hover" variant="subtitle2">
                  Registrarse
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
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
                  error={!!(formik.touched.password && formik.errors.password)}
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
    </>
  );
};

export default Login;
