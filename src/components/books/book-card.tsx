import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookType } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface BookCardProps {
  book: BookType;
  className?: string;
}

const BookCard = ({ book, className }: BookCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`Added ${book.title} to cart`);
  };

  return (
    <Link to={`/books/${book.id}`}>
      <Card className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-float h-full",
        className
      )}>
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className={cn(
              "object-cover w-full h-full transition-all duration-500 group-hover:scale-105",
              imageLoaded ? "image-loaded" : "image-loading"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {book.isNew && (
            <div className="absolute top-2 left-2 bg-accent text-white text-xs font-medium px-2 py-1 rounded-md">
              NEW
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{book.author}</p>
            <h3 className="font-medium line-clamp-1 text-pretty">{book.title}</h3>
            <p className="font-medium text-accent">
              ${book.price.toFixed(2)}
              {book.originalPrice && (
                <span className="ml-2 text-sm text-muted-foreground line-through">
                  ${book.originalPrice.toFixed(2)}
                </span>
              )}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            variant="outline"
            size="sm"
            className="w-full gap-2 group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookCard;