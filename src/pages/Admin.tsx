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

const Admin = () => {
  const [activeTab, setActiveTab] = useState("upload");

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 font-montserrat">
            Админ панель
          </h1>
          <p className="text-muted-foreground">
            Управление каталогом аудиокниг
          </p>
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
              <CardTitle>Добавить новую аудиокнигу</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Название книги</Label>
                    <Input id="title" placeholder="Введите название" />
                  </div>

                  <div>
                    <Label htmlFor="author">Автор</Label>
                    <Input id="author" placeholder="Имя автора" />
                  </div>

                  <div>
                    <Label htmlFor="genre">Жанр</Label>
                    <Select>
                      <SelectTrigger>
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
                    <Label htmlFor="duration">Длительность</Label>
                    <Input id="duration" placeholder="12ч 30м" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description">Описание</Label>
                    <Textarea
                      id="description"
                      placeholder="Краткое описание книги"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cover">Обложка</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Icon
                        name="Upload"
                        size={24}
                        className="mx-auto mb-2 text-muted-foreground"
                      />
                      <p className="text-sm text-muted-foreground">
                        Перетащите изображение или нажмите для выбора
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="audio">Аудиофайл</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Icon
                    name="Music"
                    size={24}
                    className="mx-auto mb-2 text-muted-foreground"
                  />
                  <p className="text-sm text-muted-foreground">
                    Перетащите аудиофайл или нажмите для выбора
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
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
              <CardTitle>Каталог книг</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBooks.map((book) => (
                  <div
                    key={book.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {book.author}
                      </p>
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

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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
                    <p className="text-sm font-medium text-muted-foreground">
                      Всего книг
                    </p>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Пользователи
                    </p>
                    <p className="text-2xl font-bold">45,678</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Download" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Скачивания
                    </p>
                    <p className="text-2xl font-bold">123,456</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Рост
                    </p>
                    <p className="text-2xl font-bold">+12%</p>
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
