import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  duration: string;
  genre: string;
  coverUrl: string;
  onPlay: () => void;
}

const BookCard = ({
  title,
  author,
  duration,
  genre,
  coverUrl,
  onPlay,
}: BookCardProps) => {
  return (
    <div className="bg-card rounded-lg p-4 hover:bg-accent/50 transition-all duration-300 hover:scale-105 group">
      <div className="aspect-square mb-4 relative overflow-hidden rounded-md">
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button onClick={onPlay} size="lg" className="rounded-full w-16 h-16">
            <Icon name="Play" size={24} />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-foreground line-clamp-2 font-montserrat">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{author}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="bg-secondary px-2 py-1 rounded">{genre}</span>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
