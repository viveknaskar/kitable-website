
import React from "react";
import AuthForm from "@/components/auth/auth-form";
import Container from "@/components/ui/container";

const Register = () => {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-4 bg-secondary/30">
      <Container size="small">
        <AuthForm mode="register" />
      </Container>
    </main>
  );
};

export default Register;
