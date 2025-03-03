import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "@/components/ui/loader";
import { toast } from "sonner";
import { BookOpen, AlertCircle } from "lucide-react";

interface AuthFormProps {
  mode: "login" | "register";
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (mode === "register") {
      if (!formData.name) {
        newErrors.name = "Name is required";
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (mode === "login") {
        toast.success("Successfully logged in!");
      } else {
        toast.success("Account created successfully!");
      }
      
    } catch (error) {
      toast.error(mode === "login" ? "Failed to login" : "Failed to register");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-blur-in">
      <Card className="w-full shadow-elevated">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="text-2xl font-medium tracking-tight">kitable</span>
            </Link>
          </div>
          <CardTitle className="text-2xl text-center">
            {mode === "login" ? "Welcome back" : "Create an account"}
          </CardTitle>
          <CardDescription className="text-center">
            {mode === "login" 
              ? "Enter your credentials to access your account" 
              : "Fill in the details below to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <div className="flex items-center text-sm text-destructive mt-1">
                  <AlertCircle className="h-3.5 w-3.5 mr-1" />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <div className="flex items-center text-sm text-destructive mt-1">
                <AlertCircle className="h-3.5 w-3.5 mr-1" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {mode === "login" && (
                <Link 
                  to="/auth/forgot-password" 
                  className="text-xs text-accent hover:underline"
                >
                  Forgot password?
                </Link>
              )}
            </div>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              className={errors.password ? "border-destructive" : ""}
            />
            {errors.password && (
              <div className="flex items-center text-sm text-destructive mt-1">
                <AlertCircle className="h-3.5 w-3.5 mr-1" />
                <span>{errors.password}</span>
              </div>
            )}
          </div>
          
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
                className={errors.confirmPassword ? "border-destructive" : ""}
              />
              {errors.confirmPassword && (
                <div className="flex items-center text-sm text-destructive mt-1">
                  <AlertCircle className="h-3.5 w-3.5 mr-1" />
                  <span>{errors.confirmPassword}</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button disabled={isLoading} className="w-full" type="submit">
            {isLoading ? <Loader size="small" className="border-primary-foreground mr-2" /> : null}
            {mode === "login" ? "Sign in" : "Create account"}
          </Button>
          
          <div className="text-center text-sm">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <Link 
              to={mode === "login" ? "/auth/register" : "/auth/login"} 
              className="font-medium text-accent hover:underline"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AuthForm;