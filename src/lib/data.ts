
export interface BookType {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  stockCount: number;
  publisher: string;
  publicationDate: string;
  pages: number;
  isbn: string;
  language: string;
  category: string[];
}

const books: BookType[] = [
  {
    id: "1",
    title: "The Silent Echo",
    author: "Emma Rivers",
    description: "A haunting tale of mystery and redemption set in a small coastal town. When a series of unexplained events begin to unravel the fabric of the community, librarian Sarah Miller must confront her own past to understand the echoes that have silenced the town for decades.",
    price: 21.99,
    originalPrice: 28.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviewCount: 128,
    isNew: true,
    isFeatured: true,
    stockCount: 42,
    publisher: "Moonlight Press",
    publicationDate: "June 15, 2023",
    pages: 342,
    isbn: "978-3-16-148410-0",
    language: "English",
    category: ["Fiction", "Mystery", "Thriller"]
  },
  {
    id: "2",
    title: "Algorithms of Life",
    author: "Dr. Ray Kurzweil",
    description: "A profound exploration of how algorithms shape our decisions, relationships, and futures. Drawing from cutting-edge research in AI and human psychology, Dr. Kurzweil presents a compelling vision of our algorithmic present and future.",
    price: 24.99,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewCount: 96,
    isFeatured: true,
    stockCount: 23,
    publisher: "Future Horizon Publishing",
    publicationDate: "March 3, 2023",
    pages: 412,
    isbn: "978-1-56619-909-4",
    language: "English",
    category: ["Non-Fiction", "Science", "Technology"]
  },
  {
    id: "3",
    title: "Midnight in the Garden of Stars",
    author: "Celeste Ng",
    description: "A lyrical and evocative novel about family secrets, the power of memory, and the healing nature of art. When prodigal daughter Luna returns to her childhood home after her mother's death, she discovers a series of paintings that unlock the mystery of her mother's life and her own origins.",
    price: 19.99,
    originalPrice: 23.99,
    coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviewCount: 215,
    isNew: true,
    isFeatured: true,
    stockCount: 18,
    publisher: "Stellar Books",
    publicationDate: "September 12, 2023",
    pages: 368,
    isbn: "978-0-75698-767-9",
    language: "English",
    category: ["Fiction", "Literary Fiction", "Contemporary"]
  },
  {
    id: "4",
    title: "The Economics of Everyday Things",
    author: "Tim Harford",
    description: "A fascinating journey through the hidden economic systems that shape our daily lives. From the coffee shop on the corner to the algorithms determining what we see online, Harford reveals the surprising economics behind the ordinary.",
    price: 18.99,
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    rating: 4.3,
    reviewCount: 72,
    isFeatured: true,
    stockCount: 27,
    publisher: "Practical Minds Press",
    publicationDate: "January 20, 2023",
    pages: 298,
    isbn: "978-3-598-21500-1",
    language: "English",
    category: ["Non-Fiction", "Economics", "Social Sciences"]
  },
  {
    id: "5",
    title: "The Atlas of Forgotten Places",
    author: "Jenny Williams",
    description: "A sweeping historical epic that traverses continents and centuries, following the interconnected stories of objects and the people whose lives they transformed. From a jade pendant in ancient China to a meteorite fragment in modern-day Chile, Williams weaves a tapestry of human connection.",
    price: 27.99,
    originalPrice: 32.99,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewCount: 184,
    isNew: true,
    isFeatured: true,
    stockCount: 14,
    publisher: "Global Narratives",
    publicationDate: "July 8, 2023",
    pages: 486,
    isbn: "978-6-04764-277-9",
    language: "English",
    category: ["Fiction", "Historical Fiction", "Adventure"]
  },
  {
    id: "6",
    title: "Quiet Mind, Open Heart",
    author: "Dr. Maya Peterson",
    description: "A practical guide to mindfulness and emotional resilience in challenging times. Drawing from both ancient wisdom traditions and contemporary psychology, Dr. Peterson offers actionable practices for finding peace amidst chaos and cultivating authentic connection.",
    price: 16.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewCount: 136,
    isFeatured: true,
    stockCount: 31,
    publisher: "Inner Path Publications",
    publicationDate: "April 2, 2023",
    pages: 248,
    isbn: "978-8-97121-423-9",
    language: "English",
    category: ["Non-Fiction", "Self-Help", "Psychology"]
  },
  {
    id: "7",
    title: "The Quantum Garden",
    author: "Derek Künsken",
    description: "A mind-bending science fiction adventure that explores the furthest reaches of physics and human potential. When physicist Eliza Kane discovers a method for communicating across quantum realities, she inadvertently opens a door to alternate versions of herself—with devastating consequences.",
    price: 22.99,
    coverImage: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800",
    rating: 4.4,
    reviewCount: 58,
    isNew: true,
    stockCount: 19,
    publisher: "Quantum Ink Press",
    publicationDate: "October 10, 2023",
    pages: 376,
    isbn: "978-5-87942-187-7",
    language: "English",
    category: ["Fiction", "Science Fiction", "Speculative Fiction"]
  },
  {
    id: "8",
    title: "Cooking from the Earth",
    author: "Isabella Rossi",
    description: "A celebration of sustainable, seasonal cooking that honors traditional techniques while embracing modern innovations. With over 100 plant-focused recipes organized by season, Rossi encourages a return to the rhythms of nature and the joy of cooking with whole, local ingredients.",
    price: 29.99,
    originalPrice: 34.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewCount: 92,
    stockCount: 23,
    publisher: "Harvest Table Books",
    publicationDate: "May 18, 2023",
    pages: 312,
    isbn: "978-2-74010-644-3",
    language: "English",
    category: ["Non-Fiction", "Cooking", "Sustainability"]
  }
];

export const getBooks = (): BookType[] => {
  return books;
};

export const getFeaturedBooks = (): BookType[] => {
  return books.filter(book => book.isFeatured);
};

export const getNewBooks = (): BookType[] => {
  return books.filter(book => book.isNew);
};

export const getBookById = (id: string): BookType | undefined => {
  return books.find(book => book.id === id);
};
