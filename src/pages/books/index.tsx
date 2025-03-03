
import React, { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BookCard from "@/components/books/book-card";
import { getBooks, BookType } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Search, SlidersHorizontal } from "lucide-react";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const allBooks = getBooks();
  
  // Basic filtering based on search query
  const filteredBooks = allBooks.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <Container>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-4 py-1 rounded-full mb-4">
              Browse Collection
            </div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              All Books
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our full collection of books, from bestsellers to hidden gems, 
              all carefully selected to inspire and entertain.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or author"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <Separator className="mb-8" />
          
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium mb-2">No books found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-blur-in">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Books;
