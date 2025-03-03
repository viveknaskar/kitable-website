
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import FeaturedBooks from "@/components/books/featured-books";
import { getNewBooks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { BookOpen, ShoppingCart } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const newBooks = getNewBooks();

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-secondary/30">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000)",
            transform: `translateY(${scrollY * 0.3}px)`,
            filter: "brightness(0.8)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        <Container className="relative z-10">
          <div className="max-w-2xl animate-blur-in">
            <div className="inline-block bg-accent/10 backdrop-blur-sm text-accent text-sm font-medium px-4 py-1 rounded-full mb-8">
              Discover Your Next Read
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
              Find stories that speak to your heart
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Kitable offers a curated selection of books for every taste. 
              From bestsellers to hidden gems, dive into worlds of imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/books">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Browse Collection
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button variant="outline" size="lg" className="gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <ShoppingCart className="h-5 w-5" />
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Books Section */}
      <FeaturedBooks />
      
      {/* New Arrivals Section */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-4 py-1 rounded-full mb-4">
              Just In
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              New Arrivals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The latest additions to our collection, featuring debut authors 
              and new releases from established names.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-blur-in">
            {newBooks.slice(0, 2).map((book, index) => (
              <div key={book.id} className="flex flex-col md:flex-row gap-6">
                <Link 
                  to={`/books/${book.id}`} 
                  className="w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-lg shadow-elevated"
                >
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                <div className="w-full md:w-2/3 space-y-4">
                  <div>
                    <p className="text-muted-foreground">{book.author}</p>
                    <h3 className="text-xl font-medium mt-1">{book.title}</h3>
                  </div>
                  <p className="text-muted-foreground line-clamp-3">
                    {book.description}
                  </p>
                  <div className="pt-2">
                    <Link to={`/books/${book.id}`}>
                      <Button variant="outline" className="gap-2">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-kitable-800 text-white">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto animate-blur-in">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Join Our Reading Community
            </h2>
            <p className="text-white/70 mb-8">
              Sign up for personalized recommendations, exclusive discounts, and early access to new releases.
            </p>
            <Link to="/auth/register">
              <Button 
                size="lg" 
                className="bg-white text-kitable-800 hover:bg-white/90"
              >
                Create an Account
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
