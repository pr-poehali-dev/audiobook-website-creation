import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Library = () => {
  const userBooks = [
    {
      id: "1",
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      duration: "16ч 45м",
      genre: "Романы",
      coverUrl:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
      progress: 65,
      lastPlayed: "2 дня назад",
    },
    {
      id: "2",
      title: "Думай и богатей",
      author: "Наполеон Хилл",
      duration: "12ч 30м",
      genre: "Бизнес",
      coverUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      progress: 100,
      lastPlayed: "1 неделю назад",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 font-montserrat">
            Моя библиотека
          </h1>
          <p className="text-muted-foreground">
            Ваши аудиокниги и прогресс чтения
          </p>
        </div>

        {/* Reading Progress */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Сейчас читаю</h2>
          <div className="space-y-4">
            {userBooks
              .filter((book) => book.progress < 100)
              .map((book) => (
                <div key={book.id} className="bg-card p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {book.author}
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Прогресс: {book.progress}%</span>
                          <span>{book.lastPlayed}</span>
                        </div>
                        <Progress value={book.progress} className="h-2" />
                      </div>
                    </div>
                    <Button>
                      <Icon name="Play" size={16} className="mr-2" />
                      Продолжить
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Books */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Все книги</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {userBooks.map((book) => (
              <div key={book.id} className="relative">
                <BookCard
                  {...book}
                  onPlay={() => console.log("Play", book.id)}
                />
                {book.progress === 100 && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                    <Icon name="Check" size={12} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bookmarks */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Закладки</h2>
          <div className="space-y-2">
            <div className="bg-card p-3 rounded-lg flex items-center justify-between">
              <div>
                <p className="font-medium">Мастер и Маргарита</p>
                <p className="text-sm text-muted-foreground">Глава 5 - 12:34</p>
              </div>
              <Button variant="ghost" size="sm">
                <Icon name="Play" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
