import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={index < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'}
        />
      ))}
    </div>
  );
}
