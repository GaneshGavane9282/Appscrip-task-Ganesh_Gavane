import { useState, type ReactNode, type FC } from "react";
import { WishlistContext } from "./WishlistContext";

const WishlistProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // We store a Set of IDs for O(1) lookup performance
  const [wishlistIds, setWishlistIds] = useState<Set<number>>(new Set());

  const toggleWishlist = (id: number) => {
    setWishlistIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id); // Remove if already liked
      } else {
        newSet.add(id); // Add if not liked
      }
      return newSet;
    });
  };

  const isWishlisted = (id: number) => wishlistIds.has(id);

  return (
    <WishlistContext.Provider
      value={{
        wishlistCount: wishlistIds.size,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
