
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <Container>
          <div className="flex flex-col items-center justify-center py-16 animate-blur-in">
            <BookOpen className="h-16 w-16 text-accent/50 mb-6" />
            <h1 className="text-6xl font-semibold mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
              Oops! We couldn't find the page you're looking for.
            </p>
            <Link to="/">
              <Button size="lg">Return to Home</Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
