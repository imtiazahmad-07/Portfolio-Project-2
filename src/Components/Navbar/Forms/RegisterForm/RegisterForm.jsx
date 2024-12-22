import { Visibility, VisibilityOff } from "@mui/icons-material";
import logoImg from '../Logo-new.webp';
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
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="Register">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
        {/* Logo and Title */}
        <Box sx={{ textAlign: "center" }}>
          <img src={logoImg} alt="Logo" style={{ maxWidth: "100px", marginBottom: "20px" }} />
          <Typography variant="h6">Register</Typography>
        </Box>

        {/* Name Input */}
        <Box sx={{ width: "100%" }}>
          <label htmlFor="name" className="mb-1">Name</label>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Name"
                fullWidth
                variant="outlined"
                sx={{ mt: 1 }}
              />
            )}
          />
        </Box>

        {/* Email Input */}
        <Box sx={{ width: "100%" }}>
          <label htmlFor="email" className="mb-1">Email</label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Email"
                type="email"
                fullWidth
                variant="outlined"
                sx={{ mt: 1 }}
              />
            )}
          />
        </Box>

        {/* Password Input */}
        <Box sx={{ width: "100%" }}>
          <label htmlFor="password" className="text-secondary mb-1">Password</label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                sx={{ mt: 1 }}
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
            '&:hover': {
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
