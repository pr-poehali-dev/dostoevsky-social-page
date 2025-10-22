
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
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
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="bio">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Биография
            </TabsTrigger>
            <TabsTrigger value="hobbies">
              <Icon name="Heart" className="mr-2 h-4 w-4" />
              Интересы
            </TabsTrigger>
            <TabsTrigger value="food">
              <Icon name="UtensilsCrossed" className="mr-2 h-4 w-4" />
              Кухня
            </TabsTrigger>
            <TabsTrigger value="music">
              <Icon name="Music" className="mr-2 h-4 w-4" />
              Музыка
            </TabsTrigger>
            <TabsTrigger value="sport">
              <Icon name="Dumbbell" className="mr-2 h-4 w-4" />
              Спорт
            </TabsTrigger>
            <TabsTrigger value="quotes">
              <Icon name="Quote" className="mr-2 h-4 w-4" />
              Цитаты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sport" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Физическая активность</CardTitle>
                <CardDescription>Спорт и движение в жизни писателя</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Footprints" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Пешие прогулки</h4>
                          <p className="text-foreground/80">
                            Ежедневные многочасовые прогулки по Петербургу были любимым занятием. 
                            Мог проходить до 15-20 километров за день, обдумывая сюжеты.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Waves" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Купание</h4>
                          <p className="text-foreground/80">
                            Любил купаться в реках и озерах. Во время отдыха в Старой Руссе немецкого курорта 
                            регулярно принимал водные процедуры для здоровья.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="TreePine" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Прогулки за городом</h4>
                          <p className="text-foreground/80">
                            В последние годы жизни любил гулять в Старой Руссе, исследуя окрестности и леса. 
                            Природа помогала восстановить силы и вдохновляла на творчество.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Mountain" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Горные прогулки</h4>
                          <p className="text-foreground/80">
                            Во время поездок в Швейцарию совершал прогулки в горы. Альпийские пейзажи 
                            произвели на него сильное впечатление и отразились в романе «Идиот».
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                <div className="bg-muted/50 p-6 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h5 className="font-semibold mb-2">О физической активности</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Хотя Достоевский не занимался спортом в современном понимании, он понимал важность физической 
                        активности для здоровья. Прогулки помогали ему справляться с эпилепсией, а также были 
                        неотъемлемой частью его творческого процесса. Жена Анна вспоминала, как он мог часами ходить 
                        по городу, обдумывая очередную главу романа. После каторги, где приходилось выполнять 
                        тяжелый физический труд, он стал ценить свободу движения и возможность гулять, куда захочется.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Любимая музыка</CardTitle>
                <CardDescription>Музыкальные предпочтения и влияния</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Music2" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Моцарт</h4>
                          <p className="text-foreground/80">
                            Особенно любил оперу «Дон Жуан». Музыка Моцарта олицетворяла для него гармонию 
                            и совершенство, контрастирующие с трагедией человеческого существования.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Music3" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Бетховен</h4>
                          <p className="text-foreground/80">
                            Преклонялся перед Девятой симфонией. Видел в музыке Бетховена ту же борьбу духа 
                            и страдания, которую исследовал в своих романах.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Music4" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Русские романсы</h4>
                          <p className="text-foreground/80">
                            Любил слушать народные песни и городские романсы. Они напоминали о России 
                            и русской душе, столь важных для его творчества.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Church" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Церковное пение</h4>
                          <p className="text-foreground/80">
                            Глубоко трогала литургическая музыка и православные песнопения. 
                            Посещал службы не только ради молитвы, но и ради пения.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <Icon name="Quote" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="text-foreground/90 italic leading-relaxed mb-3">
                        «Музыка — это откровение более высокое, чем мудрость и философия»
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Достоевский часто цитировал эту мысль Бетховена и был с ней полностью согласен.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h5 className="font-semibold mb-2">Музыка в жизни писателя</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Хотя Достоевский не был музыкантом, музыка играла важную роль в его жизни. 
                        Он посещал концерты и оперные постановки, особенно в Петербурге. Жена Анна вспоминала, 
                        как он мог расчувствоваться до слёз, слушая любимые произведения. В романе «Идиот» 
                        князь Мышкин упоминает арию из «Дон Жуана», что отражает личные музыкальные пристрастия автора.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="food" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Любимые блюда</CardTitle>
                <CardDescription>Гастрономические предпочтения писателя</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">🍲</div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Щи и каша</h4>
                          <p className="text-foreground/80">
                            Простая русская пища была основой рациона. Особенно любил традиционные щи 
                            и гречневую кашу — символы народной кухни.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">🫖</div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Крепкий чай</h4>
                          <p className="text-foreground/80">
                            Любил крепкий чёрный чай, который пил в больших количествах во время 
                            ночной работы над романами. Чай помогал сосредоточиться.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">🥧</div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Пироги</h4>
                          <p className="text-foreground/80">
                            С удовольствием ел традиционные русские пироги с различными начинками — 
                            капустой, мясом, рыбой. Это напоминало о детстве.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">🍞</div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Чёрный хлеб</h4>
                          <p className="text-foreground/80">
                            Ржаной хлеб был неотъемлемой частью каждой трапезы. После каторги 
                            особенно ценил простую крестьянскую еду.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">🐟</div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Рыба</h4>
                          <p className="text-foreground/80">
                            Любил блюда из рыбы, особенно в постные дни. Уха и запечённая рыба 
                            часто появлялись на столе писателя.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">☕</div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Кофе</h4>
                          <p className="text-foreground/80">
                            Крепкий кофе был постоянным спутником творчества. Пил его горячим и 
                            без сахара, особенно в периоды интенсивной работы.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 bg-muted/50 p-6 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h5 className="font-semibold mb-2">О питании писателя</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Достоевский не был гурманом и предпочитал простую пищу. После возвращения с каторги 
                        его вкусы стали ещё скромнее. Он часто работал по ночам, забывая о еде, 
                        поддерживая себя только чаем и кофе. Жена Анна Григорьевна старалась следить 
                        за его питанием и здоровьем.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

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


        </Tabs>
      </div>
    </div>
  );
};

export default Index;