import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Subscription = () => {
  const plans = [
    {
      name: "Базовый",
      price: "0₽",
      period: "бесплатно",
      features: [
        "Доступ к 100 книгам",
        "Реклама между главами",
        "Качество 128 kbps",
        "Без скачивания",
      ],
      current: false,
    },
    {
      name: "Премиум",
      price: "299₽",
      period: "в месяц",
      features: [
        "Доступ ко всем книгам",
        "Без рекламы",
        "Качество 320 kbps",
        "Скачивание для офлайн",
        "Приоритетная поддержка",
      ],
      current: true,
    },
    {
      name: "Семейный",
      price: "499₽",
      period: "в месяц",
      features: [
        "До 6 аккаунтов",
        "Все возможности Премиум",
        "Детские профили",
        "Родительский контроль",
      ],
      current: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 font-montserrat">Подписка</h1>
          <p className="text-muted-foreground">Выберите подходящий план</p>
        </div>

        {/* Current Subscription */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Текущая подписка</span>
              <Badge variant="secondary">
                <Icon name="Crown" size={12} className="mr-1" />
                Активна
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Премиум</h3>
                <p className="text-muted-foreground">
                  Продлевается 15 февраля 2024
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">299₽</p>
                <p className="text-sm text-muted-foreground">в месяц</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-secondary/20 p-3 rounded-lg text-center">
                <Icon name="Download" size={24} className="mx-auto mb-1" />
                <p className="text-sm font-medium">Скачано</p>
                <p className="text-lg font-bold">12 книг</p>
              </div>
              <div className="bg-secondary/20 p-3 rounded-lg text-center">
                <Icon name="BookOpen" size={24} className="mx-auto mb-1" />
                <p className="text-sm font-medium">Доступно</p>
                <p className="text-lg font-bold">5000+</p>
              </div>
              <div className="bg-secondary/20 p-3 rounded-lg text-center">
                <Icon name="Clock" size={24} className="mx-auto mb-1" />
                <p className="text-sm font-medium">Этот месяц</p>
                <p className="text-lg font-bold">45ч</p>
              </div>
              <div className="bg-secondary/20 p-3 rounded-lg text-center">
                <Icon name="Headphones" size={24} className="mx-auto mb-1" />
                <p className="text-sm font-medium">Качество</p>
                <p className="text-lg font-bold">320 kbps</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.current ? "ring-2 ring-primary" : ""}`}
            >
              {plan.current && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  Текущий план
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.current ? "outline" : "default"}
                  disabled={plan.current}
                >
                  {plan.current ? "Активный план" : "Выбрать план"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Manage Subscription */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Управление подпиской</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Изменить способ оплаты
              </Button>
              <Button variant="outline">
                <Icon name="Receipt" size={16} className="mr-2" />
                История платежей
              </Button>
              <Button variant="outline">
                <Icon name="Gift" size={16} className="mr-2" />
                Подарить подписку
              </Button>
              <Button variant="destructive">
                <Icon name="X" size={16} className="mr-2" />
                Отменить подписку
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Subscription;
