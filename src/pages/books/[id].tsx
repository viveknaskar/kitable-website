
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import BookDetail from "@/components/books/book-detail";
import { getBookById, BookType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<BookType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const foundBook = getBookById(id);
        if (foundBook) {
          setBook(foundBook);
        }
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <Container>
          <Button 
            variant="ghost" 
            className="mb-6 gap-2 pl-0 hover:pl-1 transition-all duration-300" 
            onClick={handleBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          {!isLoading && !book ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-2">Book not found</h2>
              <p className="text-muted-foreground mb-6">
                The book you're looking for doesn't exist or has been removed.
              </p>
              <Button onClick={() => navigate("/books")}>
                Browse All Books
              </Button>
            </div>
          ) : (
            <>
              {book && <BookDetail book={book} isLoading={isLoading} />}

              {!isLoading && book && (
                <>
                  <Separator className="my-16" />
                  
                  <div className="animate-blur-in">
                    <h2 className="text-2xl font-medium mb-6">About the Author</h2>
                    <p className="text-muted-foreground mb-8">
                      {book.author} is a renowned writer known for captivating storytelling and 
                      insightful narratives. With numerous bestsellers and critical acclaim, 
                      they have established themselves as a distinctive voice in contemporary literature.
                      Their work has been translated into multiple languages and adapted for both stage and screen.
                    </p>
                    
                    <h2 className="text-2xl font-medium mb-6">Reviews</h2>
                    {/* Placeholder for reviews - would be dynamic in a real app */}
                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border rounded-lg">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-accent/20 mr-3" />
                            <div>
                              <p className="font-medium">Reader {i}</p>
                              <div className="flex">
                                {[...Array(5)].map((_, j) => (
                                  <Star
                                    key={j}
                                    className={cn(
                                      "h-3 w-3 mr-1",
                                      j < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                    )}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            A wonderful book that kept me engaged from start to finish. 
                            The characters felt real and the story was both moving and thought-provoking.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default BookDetailPage;
