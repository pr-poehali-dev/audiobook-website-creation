import { useState } from "react";
import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import AudioPlayer from "@/components/AudioPlayer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [selectedGenre, setSelectedGenre] = useState("Все");

  const genres = [
    "Все",
    "Детективы",
    "Фантастика",
    "Романы",
    "Бизнес",
    "Психология",
  ];

  const mockBooks = [
    {
      id: "1",
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      duration: "16ч 45м",
      genre: "Романы",
      coverUrl:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
      audioUrl: "/audio/sample.mp3",
    },
    {
      id: "2",
      title: "Думай и богатей",
      author: "Наполеон Хилл",
      duration: "12ч 30м",
      genre: "Бизнес",
      coverUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      audioUrl: "/audio/sample.mp3",
    },
    {
      id: "3",
      title: "Дюна",
      author: "Фрэнк Герберт",
      duration: "21ч 15м",
      genre: "Фантастика",
      coverUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      audioUrl: "/audio/sample.mp3",
    },
    {
      id: "4",
      title: "Убийство в Восточном экспрессе",
      author: "Агата Кристи",
      duration: "8ч 45м",
      genre: "Детективы",
      coverUrl:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      audioUrl: "/audio/sample.mp3",
    },
  ];

  const filteredBooks =
    selectedGenre === "Все"
      ? mockBooks
      : mockBooks.filter((book) => book.genre === selectedGenre);

  const handlePlay = (book: any) => {
    setSelectedBook(book);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 font-montserrat">
            Добро пожаловать в мир аудиокниг
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Тысячи книг в вашем кармане. Слушайте везде и всегда.
          </p>
          <Button size="lg" className="font-semibold">
            <Icon name="Play" size={20} className="mr-2" />
            Начать слушать
          </Button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Genre Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Жанры</h2>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                onClick={() => setSelectedGenre(genre)}
                className="rounded-full"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Books */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">
            {selectedGenre === "Все" ? "Популярные книги" : selectedGenre}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                {...book}
                onPlay={() => handlePlay(book)}
              />
            ))}
          </div>
        </div>

        {/* New Releases */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Новинки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockBooks.slice(0, 4).map((book) => (
              <BookCard
                key={`new-${book.id}`}
                {...book}
                onPlay={() => handlePlay(book)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Audio Player */}
      {selectedBook && (
        <AudioPlayer
          title={selectedBook.title}
          author={selectedBook.author}
          audioUrl={selectedBook.audioUrl}
          canDownload={true}
        />
      )}
    </div>
  );
};

export default Index;
