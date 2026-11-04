import { useForm } from "react-hook-form";
import signupSchema from "../validations/signupschemas.js";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
} from "@mui/material";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  // Signup form submit
  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));

    console.log("Signup Successful!");
    console.log(data);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2ff, #fdf2f8)",
        padding: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
  maxWidth: 400,
  p: 4,
  borderRadius: 3,
  backgroundColor: "#FFFFFF",
  boxShadow: "0 12px 40px rgba(0,0,0,0.07)"
        }}
      >
      <Typography
  variant="h5"
  fontWeight={700}
  textAlign="center"
  sx={{
    fontSize: "28px",
    color: "#111827",
    letterSpacing: "-0.5px",
    mb: 1
  }}
>
  Create Account
</Typography>

        <Typography
  textAlign="center"
  sx={{
    fontSize: "14px",
    color: "#6B7280",
    mb: 4
  }}
>
  Create your account to get started
</Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            label="Full Name"
            {...register("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            fullWidth
          />

          <TextField
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Create Account
          </Button>
        </Box>

        <Typography
          textAlign="center"
          color="text.secondary"
          variant="body2"
            sx={{
                mt: 3
            }}
        >
          Already have an account? Login
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;



// box is work like a div  
// box ko hamnye batadiya yeh foem hai ab yeh form render karye ga 

// onSubmit — Form submit hone par kya action perform karna hai.
// handleSubmit — React Hook Form ka function jo submission handle karega.
// onSubmit function — Valid data receive karega.

// label → Input ka naam.
// register("fullName") → Full Name input register karta hai.
// error → Validation fail hone par field red karta hai.
// helperText → Error message show karta hai.

// text field ==> input field , 
// buttton => button , 
// box = styling


// yup ko react form sia connect krta hai  