import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 font-montserrat">
            Мой аккаунт
          </h1>
          <p className="text-muted-foreground">
            Управление профилем и настройками
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" />
                <AvatarFallback>ИП</AvatarFallback>
              </Avatar>
              <CardTitle>Иван Петров</CardTitle>
              <p className="text-sm text-muted-foreground">ivan@example.com</p>
              <Badge variant="secondary" className="mt-2">
                <Icon name="Crown" size={12} className="mr-1" />
                Премиум
              </Badge>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Редактировать профиль
              </Button>
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Информация об аккаунте</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="BookOpen" size={16} />
                    <span className="font-semibold">Прослушано книг</span>
                  </div>
                  <p className="text-2xl font-bold">24</p>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={16} />
                    <span className="font-semibold">Время прослушивания</span>
                  </div>
                  <p className="text-2xl font-bold">156ч</p>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} />
                    <span className="font-semibold">Дата регистрации</span>
                  </div>
                  <p className="text-lg">15 января 2024</p>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Star" size={16} />
                    <span className="font-semibold">Любимый жанр</span>
                  </div>
                  <p className="text-lg">Детективы</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Настройки</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Bell" size={16} className="mr-2" />
                    Уведомления
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Download" size={16} className="mr-2" />
                    Загрузки
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Shield" size={16} className="mr-2" />
                    Приватность
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button variant="destructive" className="w-full">
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выйти из аккаунта
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Account;
