import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/container";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("py-12 border-t", className)}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-accent" />
              <span className="text-xl font-medium tracking-tight">kitable</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover your next reading adventure with curated books for every taste.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Account</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/auth/login" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Kitable. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;