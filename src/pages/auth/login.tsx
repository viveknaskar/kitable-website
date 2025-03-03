
import React from "react";
import AuthForm from "@/components/auth/auth-form";
import Container from "@/components/ui/container";

const Login = () => {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-4 bg-secondary/30">
      <Container size="small">
        <AuthForm mode="login" />
      </Container>
    </main>
  );
};

export default Login;
