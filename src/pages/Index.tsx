import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const quotes = [
    {
      text: 'Красота спасет мир',
      source: 'Идиот',
      year: 1869
    },
    {
      text: 'Страдание и боль всегда обязательны для широкого сознания и глубокого сердца',
      source: 'Преступление и наказание',
      year: 1866
    },
    {
      text: 'Человек есть тайна. Ее надо разгадать, и ежели будешь ее разгадывать всю жизнь, то не говори, что потерял время',
      source: 'Письмо брату',
      year: 1839
    }
  ];

  const works = [
    {
      title: 'Преступление и наказание',
      year: 1866,
      genre: 'Роман',
      description: 'История Родиона Раскольникова и его внутренней борьбы'
    },
    {
      title: 'Идиот',
      year: 1869,
      genre: 'Роман',
      description: 'Повествование о князе Мышкине, воплощении христианской морали'
    },
    {
      title: 'Братья Карамазовы',
      year: 1880,
      genre: 'Роман',
      description: 'Философский роман о семье Карамазовых и извечных вопросах бытия'
    },
    {
      title: 'Бесы',
      year: 1872,
      genre: 'Роман',
      description: 'Политический роман о революционных идеях и их последствиях'
    }
  ];

  const locations = [
    {
      id: 'sennaya',
      name: 'Сенная площадь',
      work: 'Преступление и наказание',
      description: 'Место, где Раскольников наблюдал за жизнью простого народа',
      x: 45,
      y: 60
    },
    {
      id: 'nevsky',
      name: 'Невский проспект',
      work: 'Идиот',
      description: 'Главная улица Петербурга, где происходили ключевые встречи',
      x: 50,
      y: 40
    },
    {
      id: 'kanal',
      name: 'Канал Грибоедова',
      work: 'Преступление и наказание',
      description: 'Район, где жил Раскольников',
      x: 55,
      y: 55
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Avatar className="w-32 h-32 border-4 border-primary">
              <AvatarImage src="https://cdn.poehali.dev/projects/6e5e50f3-1716-4b4a-9a9e-56f5a3f3d433/files/f908b149-c0e2-4648-81a1-a716bf03e7fe.jpg" />
              <AvatarFallback className="text-4xl">ФД</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Фёдор Михайлович Достоевский
          </h1>
          <p className="text-xl text-muted-foreground mb-2">1821 — 1881</p>
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="secondary">Писатель</Badge>
            <Badge variant="secondary">Философ</Badge>
            <Badge variant="secondary">Публицист</Badge>
          </div>
        </header>

        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="bio">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Биография
            </TabsTrigger>
            <TabsTrigger value="hobbies">
              <Icon name="Heart" className="mr-2 h-4 w-4" />
              Интересы
            </TabsTrigger>
            <TabsTrigger value="quotes">
              <Icon name="Quote" className="mr-2 h-4 w-4" />
              Цитаты
            </TabsTrigger>
            <TabsTrigger value="works">
              <Icon name="BookOpen" className="mr-2 h-4 w-4" />
              Произведения
            </TabsTrigger>
            <TabsTrigger value="map">
              <Icon name="Map" className="mr-2 h-4 w-4" />
              Карта мест
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hobbies" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Интересы и увлечения</CardTitle>
                <CardDescription>Любимые занятия и страсти Достоевского</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="Gamepad2" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Рулетка</h4>
                          <p className="text-foreground/80">
                            Страсть к азартным играм преследовала писателя всю жизнь. 
                            Эта зависимость вдохновила его на создание романа «Игрок».
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="BookOpen" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Чтение</h4>
                          <p className="text-foreground/80">
                            Обожал произведения Пушкина, Гоголя, Шекспира и Шиллера. 
                            Литература была его главной духовной пищей с детства.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="Newspaper" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Публицистика</h4>
                          <p className="text-foreground/80">
                            Издавал журналы «Время» и «Эпоха», писал статьи на социальные 
                            и политические темы, вел «Дневник писателя».
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="Footprints" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Прогулки</h4>
                          <p className="text-foreground/80">
                            Любил долгие прогулки по Петербургу, наблюдая за людьми и 
                            впитывая атмосферу города, которая потом оживала в его романах.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="Church" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Православие</h4>
                          <p className="text-foreground/80">
                            Глубокая религиозность и поиск духовных истин пронизывают 
                            всё его творчество. Вера была опорой в трудные времена.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="Coffee" className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Кофе и чай</h4>
                          <p className="text-foreground/80">
                            Работал по ночам за чашкой крепкого чая или кофе. 
                            Ночь была его самым продуктивным временем для творчества.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bio" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">О писателе</CardTitle>
                <CardDescription>Жизнь и творчество великого русского классика</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Ранние годы</h3>
                  <p className="text-foreground/90">
                    Фёдор Михайлович Достоевский родился 30 октября 1821 года в Москве. 
                    С детства он погрузился в мир литературы, что предопределило его будущее призвание. 
                    Образование получил в Главном инженерном училище в Санкт-Петербурге.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Каторга и возрождение</h3>
                  <p className="text-foreground/90">
                    В 1849 году Достоевский был арестован за участие в кружке Петрашевского. 
                    Четыре года на каторге в Омске стали переломным моментом в его жизни и мировоззрении, 
                    что позже нашло отражение в «Записках из Мёртвого дома».
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Великие романы</h3>
                  <p className="text-foreground/90">
                    1860-1880-е годы — период создания величайших произведений мировой литературы: 
                    «Преступление и наказание», «Идиот», «Бесы», «Подросток» и «Братья Карамазовы». 
                    В них Достоевский исследовал глубины человеческой души, философские и нравственные вопросы.
                  </p>
                </div>

                <Separator />

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <p className="text-foreground/80 italic">
                    «Достоевский — это величайший реалист, измеривший бездны человеческого страдания, 
                    безумия и порока, но наряду с тем и величайший поэт евангельской любви.»
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Дмитрий Мережковский</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotes" className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              {quotes.map((quote, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Quote" className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div className="space-y-3">
                        <p className="text-lg italic text-foreground leading-relaxed">
                          «{quote.text}»
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="BookMarked" className="h-4 w-4" />
                          <span className="font-semibold">{quote.source}</span>
                          <span>•</span>
                          <span>{quote.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="works" className="animate-fade-in">
            <div className="grid gap-6">
              {works.map((work, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{work.title}</CardTitle>
                        <CardDescription className="text-base">
                          {work.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-base px-3 py-1">
                        {work.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="BookType" className="h-4 w-4" />
                      <span>{work.genre}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Литературный Петербург</CardTitle>
                <CardDescription>
                  Места действия романов Достоевского. Нажмите на точку, чтобы узнать подробнее
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-secondary/30 rounded-lg overflow-hidden border-2 border-border">
                  <div className="aspect-[16/10] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-accent/20">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-20">
                        🏛️
                      </div>
                      
                      {locations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => setSelectedLocation(location.id)}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                          style={{ left: `${location.x}%`, top: `${location.y}%` }}
                        >
                          <div className={`relative ${
                            selectedLocation === location.id ? 'scale-125' : ''
                          } transition-transform`}>
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                            <Icon 
                              name="MapPin" 
                              className={`h-8 w-8 relative z-10 ${
                                selectedLocation === location.id 
                                  ? 'text-primary fill-primary' 
                                  : 'text-accent fill-accent'
                              }`}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedLocation === location.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon 
                          name="MapPin" 
                          className={`h-5 w-5 mt-1 flex-shrink-0 ${
                            selectedLocation === location.id ? 'text-primary' : 'text-accent'
                          }`}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{location.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <Icon name="Book" className="inline h-3 w-3 mr-1" />
                            {location.work}
                          </p>
                          <p className="text-foreground/80">{location.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;