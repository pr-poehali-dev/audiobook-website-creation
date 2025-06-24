import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/contexts/AuthContext";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, isAdmin, adminLogin } = useAuth();

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    const success = await adminLogin(username, password);
    if (!success) {
      setLoginError("Неверный логин или пароль");
    }

    setLoading(false);
  };

  const mockBooks = [
    {
      id: "1",
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      genre: "Романы",
      status: "Опубликовано",
      downloads: 1250,
      rating: 4.8,
    },
    {
      id: "2",
      title: "Думай и богатей",
      author: "Наполеон Хилл",
      genre: "Бизнес",
      status: "На модерации",
      downloads: 0,
      rating: 0,
    },
  ];

  const tabs = [
    { id: "upload", label: "Загрузить книгу", icon: "Upload" },
    { id: "catalog", label: "Каталог", icon: "Library" },
    { id: "stats", label: "Статистика", icon: "BarChart" },
  ];

  // Если не админ - показываем форму входа
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="max-w-md mx-auto px-4 py-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-center">
                <Icon name="Shield" size={24} className="mx-auto mb-2" />
                Админ-панель
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <Label htmlFor="username" className="text-white">
                    Логин
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Введите логин"
                    required
                    className="text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-white">
                    Пароль
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                    required
                    className="text-white"
                  />
                </div>

                {loginError && (
                  <p className="text-red-400 text-sm">{loginError}</p>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <Icon
                      name="Loader2"
                      size={16}
                      className="mr-2 animate-spin"
                    />
                  ) : (
                    <Icon name="LogIn" size={16} className="mr-2" />
                  )}
                  Войти в админ-панель
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 font-montserrat text-white">
            Админ панель
          </h1>
          <p className="text-white/80">Управление каталогом аудиокниг</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Upload Tab */}
        {activeTab === "upload" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-white">
                Добавить новую аудиокнигу
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-white">
                      Название книги
                    </Label>
                    <Input
                      id="title"
                      placeholder="Введите название"
                      className="text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="author" className="text-white">
                      Автор
                    </Label>
                    <Input
                      id="author"
                      placeholder="Имя автора"
                      className="text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="genre" className="text-white">
                      Жанр
                    </Label>
                    <Select>
                      <SelectTrigger className="text-white">
                        <SelectValue placeholder="Выберите жанр" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="detective">Детективы</SelectItem>
                        <SelectItem value="fiction">Фантастика</SelectItem>
                        <SelectItem value="romance">Романы</SelectItem>
                        <SelectItem value="business">Бизнес</SelectItem>
                        <SelectItem value="psychology">Психология</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="duration" className="text-white">
                      Длительность
                    </Label>
                    <Input
                      id="duration"
                      placeholder="12ч 30м"
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description" className="text-white">
                      Описание
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Краткое описание книги"
                      rows={4}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cover" className="text-white">
                      Обложка
                    </Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Icon
                        name="Upload"
                        size={24}
                        className="mx-auto mb-2 text-white/60"
                      />
                      <p className="text-sm text-white/60">
                        Перетащите изображение или нажмите для выбора
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="audio" className="text-white">
                  Аудиофайл
                </Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Icon
                    name="Music"
                    size={24}
                    className="mx-auto mb-2 text-white/60"
                  />
                  <p className="text-sm text-white/60">
                    Перетащите аудиофайл или нажмите для выбора
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    Поддерживаемые форматы: MP3, M4A, WAV
                  </p>
                </div>
              </div>

              <Button className="w-full">
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить книгу
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Catalog Tab */}
        {activeTab === "catalog" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-white">Каталог книг</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBooks.map((book) => (
                  <div
                    key={book.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{book.title}</h3>
                      <p className="text-sm text-white/60">{book.author}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary">{book.genre}</Badge>
                        <Badge
                          variant={
                            book.status === "Опубликовано"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {book.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <div className="text-center">
                        <Icon
                          name="Download"
                          size={16}
                          className="mx-auto mb-1"
                        />
                        <p>{book.downloads}</p>
                      </div>
                      <div className="text-center">
                        <Icon name="Star" size={16} className="mx-auto mb-1" />
                        <p>{book.rating || "N/A"}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Tab */}
        {activeTab === "stats" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white/60">
                      Всего книг
                    </p>
                    <p className="text-2xl font-bold text-white">1,234</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white/60">
                      Пользователи
                    </p>
                    <p className="text-2xl font-bold text-white">45,678</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Download" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white/60">
                      Скачивания
                    </p>
                    <p className="text-2xl font-bold text-white">123,456</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white/60">Рост</p>
                    <p className="text-2xl font-bold text-white">+12%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
