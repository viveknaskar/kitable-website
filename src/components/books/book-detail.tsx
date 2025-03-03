import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { toast } from "sonner";
import { BookType } from "@/lib/data";
import Loader from "@/components/ui/loader";
import { cn } from "@/lib/utils";

interface BookDetailProps {
  book: BookType;
  isLoading: boolean;
}

const BookDetail = ({ book, isLoading }: BookDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${quantity === 1 ? 'copy' : 'copies'} of ${book.title} to cart`);
  };

  const handleAddToWishlist = () => {
    toast.success(`Added ${book.title} to wishlist`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-blur-in">
      <div className="aspect-[3/4] relative overflow-hidden rounded-lg border border-border shadow-elevated">
        <img
          src={book.coverImage}
          alt={book.title}
          className={cn(
            "w-full h-full object-cover",
            imageLoaded ? "image-loaded" : "image-loading"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        {book.isNew && (
          <div className="absolute top-4 left-4 bg-accent text-white text-sm font-medium px-2 py-1 rounded-md">
            NEW
          </div>
        )}
      </div>
      
      <div className="space-y-6">
        <div>
          <p className="text-lg text-muted-foreground">{book.author}</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-1">
            {book.title}
          </h1>
          
          <div className="flex items-center mt-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4 mr-1",
                    i < book.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              {book.reviewCount} reviews
            </span>
          </div>
        </div>
        
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-accent">
            ${book.price.toFixed(2)}
          </p>
          {book.originalPrice && (
            <p className="ml-3 text-muted-foreground line-through">
              ${book.originalPrice.toFixed(2)}
            </p>
          )}
          {book.originalPrice && (
            <p className="ml-3 text-sm bg-accent/10 text-accent px-2 py-1 rounded">
              Save ${(book.originalPrice - book.price).toFixed(2)}
            </p>
          )}
        </div>
        
        <div className="prose prose-gray max-w-none">
          <p>{book.description}</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium">Details:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><span className="font-medium">Publisher:</span> {book.publisher}</li>
            <li><span className="font-medium">Publication Date:</span> {book.publicationDate}</li>
            <li><span className="font-medium">Pages:</span> {book.pages}</li>
            <li><span className="font-medium">ISBN:</span> {book.isbn}</li>
            <li><span className="font-medium">Language:</span> {book.language}</li>
          </ul>
        </div>
        
        <div className="pt-4 border-t border-border">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                className="px-3 py-2 text-lg border-r hover:bg-secondary transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 text-center w-12">{quantity}</span>
              <button
                className="px-3 py-2 text-lg border-l hover:bg-secondary transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              {book.stockCount > 10 
                ? "In Stock" 
                : book.stockCount > 0 
                  ? `Only ${book.stockCount} left in stock` 
                  : "Out of Stock"}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="flex-1 gap-2"
              onClick={handleAddToCart}
              disabled={book.stockCount === 0}
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 gap-2"
              onClick={handleAddToWishlist}
            >
              <Heart className="h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
