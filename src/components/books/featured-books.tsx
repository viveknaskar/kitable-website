
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import BookCard from "./book-card";
import { getFeaturedBooks } from "@/lib/data";

const FeaturedBooks = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <section className="py-16 bg-secondary/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-4 py-1 rounded-full mb-4">
            Curated Selection
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Featured Books
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of must-read titles that have captured our
            imagination and won the hearts of readers around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/books">
            <Button variant="outline" size="lg">
              View All Books
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedBooks;
