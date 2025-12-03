import { createContext } from "react";

interface WishlistContextType {
  wishlistCount: number;
  toggleWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);
