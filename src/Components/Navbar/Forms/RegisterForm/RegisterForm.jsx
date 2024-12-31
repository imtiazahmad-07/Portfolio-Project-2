import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logoImg from "../Logo-new.webp";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const RegisterForm = () => {
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="Register">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 4,
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ textAlign: "center" }}>
          <img
            src={logoImg}
            alt="Logo"
            style={{ maxWidth: "100px", marginBottom: "20px" }}
          />
          <Typography variant="h6">Register</Typography>
        </Box>

        {/* Name Input */}
        <Box sx={{ width: "100%" }}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                placeholder="Name"
                fullWidth
                variant="outlined"
              />
            )}
          />
          <Typography variant="body1" sx={{ color: "red" }}>
            {errors?.name?.message}
          </Typography>
        </Box>

        {/* Email Input */}
        <Box sx={{ width: "100%" }}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                placeholder="Email"
                type="email"
                fullWidth
                variant="outlined"
              />
            )}
          />
          <Typography variant="body1" sx={{ color: "red" }}>
            {errors?.email?.message}
          </Typography>
        </Box>

        {/* Password Input */}
        <Box sx={{ width: "100%" }}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                sx={{ mt: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Typography variant="body1" sx={{ color: "red" }}>
            {errors?.password?.message}
          </Typography>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          sx={{
            mt: 3,
            py: 1.5,
            width: "100%",
            backgroundColor: "#009F7F",
            color: "white",
            fontWeight: "bold",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#007f61",
            },
          }}
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
