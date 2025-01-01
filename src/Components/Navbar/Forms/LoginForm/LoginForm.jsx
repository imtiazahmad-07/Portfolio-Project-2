import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import imgLogo from '../Logo-new.webp';
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

const LoginForm = () => {
    const schema = yup.object({
      name: yup.string().required("Name is required"),
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
    });
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

  const [showPassword, setShowPassword] = useState(false);
  
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="login">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
        {/* Logo and Title */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <img src={imgLogo} alt="Logo" style={{ maxWidth: "120px", marginBottom: "16px" }} />
          <Typography variant="h6">Login</Typography>
          <Typography variant="body1" sx={{ color: "grey" }}>
            Login with your email & password
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
                placeholder="Email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            )}
          />
          <Typography variant="body1">{errors?.email?.message}</Typography>
        </Box>

        {/* Password Input */}
        <Box sx={{ width: "100%" }}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Password"
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Typography variant="body1" sx={{color:"red"}}>{errors?.password?.message}</Typography>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          sx={{
            py: 1.5,
            width: "100%",
            backgroundColor: "#009F7F",
            color: "white",
            fontWeight: "bold",
            textTransform: "capitalize",
            '&:hover': {
              backgroundColor: "#007f61",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
