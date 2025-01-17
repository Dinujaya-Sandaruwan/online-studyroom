import { z } from "zod";

// Define Zod schema for login form
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validate inputs with Zod schema
  const result = loginSchema.safeParse({ email, password });

  if (!result.success) {
    const validationErrors = result.error.format();
    setErrors({
      email: validationErrors.email?._errors[0],
      password: validationErrors.password?._errors[0],
    });
    return; // Stop form submission if validation fails
  }
  // Clear errors if validation is successful
  setErrors({});
};
