import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { ShoppingCart, Menu, X, BookOpen, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handling scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Closing mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        {
          "bg-white/80 shadow-subtle backdrop-blur-sm": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          >
            <BookOpen className="h-6 w-6 text-accent" />
            <span className={cn("text-xl font-medium tracking-tight", {
              "text-foreground": scrolled,
              "text-white": !scrolled
            })}>kitable</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  {
                    "text-accent": location.pathname === link.href,
                    "text-foreground/80": location.pathname !== link.href && scrolled,
                    "text-white/80": location.pathname !== link.href && !scrolled,
                  }
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className={cn("relative", {
                "text-foreground": scrolled,
                "text-white": !scrolled
              })}>
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </Button>
            </Link>
            
            <Link to="/auth/login" className="hidden md:flex">
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn("gap-2", {
                  "text-foreground hover:text-foreground/80": scrolled,
                  "text-white hover:text-white/80": !scrolled
                })}
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn("md:hidden", {
                "text-foreground": scrolled,
                "text-white": !scrolled
              })}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden animate-fade-in">
          <div className="flex flex-col p-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base font-medium transition-colors p-2",
                    {
                      "text-accent bg-accent/5 rounded-md": location.pathname === link.href,
                      "text-foreground/80 hover:text-accent hover:bg-accent/5 rounded-md": 
                        location.pathname !== link.href,
                    }
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="pt-4 border-t border-border">
              <Link to="/auth/login" className="w-full">
                <Button variant="outline" className="w-full gap-2 justify-center">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/auth/register" className="w-full mt-3">
                <Button variant="default" className="w-full gap-2 justify-center">
                  <User className="h-4 w-4" />
                  <span>Register</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
