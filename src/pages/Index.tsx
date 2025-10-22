
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
<CardDescription>О моей физической активности</CardDescription>
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
                            Ежедневные многочасовые прогулки по Петербургу были моим любимым занятием. 
                            Я мог проходить до 15-20 километров за день, обдумывая сюжеты.
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
                            Я любил купаться в реках и озерах. Во время отдыха в Старой Руссе 
                            я регулярно принимал водные процедуры для здоровья.
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
                            В последние годы жизни я любил гулять в Старой Руссе, исследуя окрестности и леса. 
                            Природа помогала мне восстановить силы и вдохновляла на творчество.
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
                            Во время поездок в Швейцарию я совершал прогулки в горы. Альпийские пейзажи 
                            произвели на меня сильное впечатление и отразились в моём романе «Идиот».
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
                      <h5 className="font-semibold mb-2">О моей физической активности</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Хотя я не занимался спортом в современном понимании, я понимал важность физической 
                        активности для здоровья. Прогулки помогали мне справляться с эпилепсией, а также были 
                        неотъемлемой частью моего творческого процесса. Моя жена Анна вспоминала, как я мог часами ходить 
                        по городу, обдумывая очередную главу романа. После каторги, где мне приходилось выполнять 
                        тяжелый физический труд, я стал ценить свободу движения и возможность гулять, куда захочу.
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
                <CardDescription>Мои музыкальные предпочтения и влияния</CardDescription>
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
                            Музыка Моцарта была для меня воплощением гармонии и божественной красоты. Особенно я ценил 
                            Реквием — произведение, которое трогало до глубины души и вдохновляло на размышления о вечном.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Piano" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Бетховен</h4>
                          <p className="text-foreground/80">
                            Бетховен олицетворял для меня силу духа и борьбу. Я часто слушал его симфонии, 
                            особенно Девятую. Это была музыка страдания, преодоления и торжества человеческого духа.
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
                          <h4 className="font-semibold text-xl mb-2">Русские народные песни</h4>
                          <p className="text-foreground/80">
                            Русская народная музыка всегда была близка моему сердцу. В ней я слышал душу народа, 
                            его страдания и надежды. Эти мелодии нашли отражение в моих романах и очерках.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Globe" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Итальянская опера</h4>
                          <p className="text-foreground/80">
                            Во время поездок по Европе я посещал оперные театры. Итальянская опера, с её страстностью 
                            и драматизмом, производила на меня глубокое впечатление и обогащала мой внутренний мир.
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
                      <h5 className="font-semibold mb-2">Музыка в моей жизни</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Музыка играла важную роль в моей жизни и творчестве. Я не был профессиональным музыкантом, 
                        но глубоко чувствовал музыку и понимал её силу. Она помогала мне в трудные моменты, вдохновляла 
                        на работу и открывала новые глубины человеческой души. В моих романах музыка часто становится 
                        важным элементом — от пения Настасьи Филипповны до философских размышлений моих героев о природе искусства.
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
                <CardTitle className="text-3xl">Кулинарные предпочтения</CardTitle>
                <CardDescription>Моя любимая еда и напитки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Coffee" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Чай</h4>
                          <p className="text-foreground/80">
                            Чай был моим постоянным спутником при работе. Я предпочитал крепкий черный чай, 
                            который помогал мне сохранять ясность мысли во время ночных творческих сеансов. Часто я выпивал 
                            по несколько чашек подряд, обдумывая следующую главу.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Soup" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Щи и русские супы</h4>
                          <p className="text-foreground/80">
                            Традиционные русские супы всегда были мне по душе. Я особенно любил хорошо приготовленные щи — 
                            простое, но такое родное блюдо, которое напоминало мне о доме и детстве.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Fish" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Рыбные блюда</h4>
                          <p className="text-foreground/80">
                            Я любил рыбу в различных видах — от простого соленого сига до изысканной стерляди. 
                            Во время постов рыба становилась основой моего рациона, что соответствовало моим религиозным убеждениям.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Cookie" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Простая еда</h4>
                          <p className="text-foreground/80">
                            Я не был гурманом и предпочитал простую, незатейливую пищу. Хлеб, каша, вареные яйца — 
                            вот что меня устраивало. Роскошные обеды были мне чужды, я ценил скромность во всём.
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
                      <h5 className="font-semibold mb-2">Мое отношение к еде</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Еда никогда не была для меня предметом особого интереса. Я ел, чтобы жить, а не жил, чтобы есть. 
                        Из-за хронических денежных затруднений мне часто приходилось довольствоваться малым. После каторги 
                        я особенно ценил простую русскую пищу — она напоминала мне о свободе. Моя жена Анна пыталась следить 
                        за моим питанием, зная о моём слабом здоровье, но я часто забывал поесть, погружаясь в работу над романом.
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
                <CardTitle className="text-3xl">Мои интересы и увлечения</CardTitle>
                <CardDescription>Что наполняло мою жизнь помимо литературы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="BookOpen" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Чтение</h4>
                          <p className="text-foreground/80">
                            Я был заядлым читателем. Меня особенно привлекали произведения Пушкина, Гоголя, Шекспира и Диккенса. 
                            Европейская и русская классика формировали мой литературный вкус и философские взгляды.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Newspaper" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Публицистика</h4>
                          <p className="text-foreground/80">
                            Я издавал журналы «Время» и «Эпоха», писал публицистические статьи. Меня волновали 
                            социальные вопросы, судьба России и русского народа. Мой «Дневник писателя» был для меня способом 
                            вести диалог с читателями.
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
                          <h4 className="font-semibold text-xl mb-2">Религия и философия</h4>
                          <p className="text-foreground/80">
                            Вопросы веры, существования Бога, природы добра и зла занимали меня всю жизнь. 
                            Я много размышлял о христианстве, русской идее и нравственных основах общества. 
                            Эти темы пронизывают все мои произведения.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon name="Spade" className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2">Азартные игры</h4>
                          <p className="text-foreground/80">
                            Рулетка была моей страстью и проклятием. Во время поездок по Европе я часто проигрывал 
                            последние деньги в казино. Эта борьба со страстью стала основой для моего романа «Игрок». 
                            Только благодаря жене я смог преодолеть это пагубное влечение.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                <div className="bg-muted/50 p-6 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h5 className="font-semibold mb-2">Мои страсти и противоречия</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Моя жизнь была полна противоречий. Я проповедовал христианскую мораль, но не мог справиться 
                        с игровой зависимостью. Я писал о красоте и добре, но был знаком с темными сторонами человеческой души. 
                        Именно эти противоречия делали меня человеком и писателем. Каждое мое увлечение, будь то философия 
                        или игра в рулетку, становилось материалом для творчества, помогало мне понять человеческую природу глубже.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bio" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Моя биография</CardTitle>
                <CardDescription>Путь от детства до признания</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="space-y-4">
                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Baby" className="h-6 w-6" />
                        Ранние годы (1821-1837)
                      </h3>
                      <p className="text-foreground/90 leading-relaxed">
                        Я родился 30 октября 1821 года в Москве, в семье штабного лекаря Мариинской больницы для бедных. 
                        Мое детство прошло в стенах этой больницы — я рано познакомился со страданием и нищетой. 
                        Отец мой, Михаил Андреевич, был человеком строгим и вспыльчивым, мать же, Мария Федоровна, 
                        была добрым и мягким человеком. Она рано ушла из жизни — мне было всего 15 лет. 
                        С детства я любил читать — Пушкин, Жуковский, Карамзин были моими первыми учителями.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        <Icon name="GraduationCap" className="h-6 w-6" />
                        Образование и начало пути (1838-1845)
                      </h3>
                      <p className="text-foreground/90 leading-relaxed">
                        В 1838 году я поступил в Главное инженерное училище в Петербурге. Военная карьера меня не 
                        привлекала — моя душа стремилась к литературе. Уже тогда я понимал, что мое призвание — 
                        писать. После окончания училища я недолго прослужил инженером, а затем подал в отставку, 
                        чтобы целиком посвятить себя литературе. В 1845 году я закончил свой первый роман 
                        «Бедные люди», который принес мне первую славу. Белинский назвал меня новым Гоголем — 
                        я был на вершине счастья.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        <Icon name="AlertTriangle" className="h-6 w-6" />
                        Катастрофа и каторга (1849-1859)
                      </h3>
                      <p className="text-foreground/90 leading-relaxed">
                        В 1849 году моя жизнь резко переменилась. Меня арестовали за участие в кружке Петрашевского. 
                        22 декабря нас вывели на Семеновский плац для расстрела. Я уже простился с жизнью, когда 
                        в последний момент объявили помилование. Это была инсценировка, но пережитое потрясение 
                        изменило меня навсегда. Четыре года каторги в Омске, затем солдатская служба в Семипалатинске — 
                        эти годы стали для меня школой жизни. Я познал народ, его страдания и величие. 
                        Там же, в Сибири, я впервые испытал припадок эпилепсии — болезнь, которая мучила меня до конца дней.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Heart" className="h-6 w-6" />
                        Возвращение и зрелость (1860-1871)
                      </h3>
                      <p className="text-foreground/90 leading-relaxed">
                        В 1859 году мне разрешили вернуться в Петербург. Я вернулся другим человеком — с новыми 
                        взглядами на жизнь, на Россию, на веру. Вместе с братом Михаилом я издавал журналы «Время» 
                        и «Эпоха». В 1861 году вышли «Записки из Мертвого дома» — мой рассказ о каторге. 
                        Затем «Униженные и оскорбленные», «Записки из подполья». В 1866 году я написал 
                        «Преступление и наказание» — роман, который принес мне настоящую славу. 
                        В том же году я встретил Анну Григорьевну Сниткину, мою стенографистку, которая стала 
                        моей женой и спасением. Она вывезла меня из долговой ямы, спасла от игорной страсти, 
                        стала матерью моих детей и опорой до конца моих дней.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        <Icon name="BookText" className="h-6 w-6" />
                        Расцвет творчества (1872-1881)
                      </h3>
                      <p className="text-foreground/90 leading-relaxed">
                        Последние годы моей жизни были самыми плодотворными. Я написал «Бесов» (1872), 
                        «Подростка» (1875), начал издавать «Дневник писателя» — мою исповедь и беседу с читателями. 
                        В 1879-1880 годах я создал мое главное произведение — «Братья Карамазовы». В этом романе 
                        я вложил всю мою душу, все мои мысли о Боге, о добре и зле, о России и человеке. 
                        В 1880 году на открытии памятника Пушкину я произнес речь, которая потрясла всю Россию. 
                        Я говорил о нашей миссии, о всемирной отзывчивости русского человека. Меня признали, 
                        меня наконец услышали. Но силы мои были на исходе.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Sunset" className="h-6 w-6" />
                        Последние дни
                      </h3>
                      <p className="text-foreground/90 leading-relaxed">
                        28 января 1881 года, после очередного легочного кровотечения, я понял, что конец близок. 
                        Я попросил Анну принести Евангелие — то самое, которое мне подарили жены декабристов, 
                        когда я отправлялся на каторгу. Я открыл его наугад и прочел: «Иоанна не удерживай». 
                        Я принял это как знак. 28 января в 8 часов 38 минут вечера я скончался. Мне было 59 лет. 
                        Похоронили меня в Александро-Невской лавре. На моих похоронах собрались тысячи людей — 
                        простой народ, студенты, писатели. Россия прощалась со мной. Я прожил трудную, 
                        полную страданий жизнь, но я не жалею ни о чем. Все, что я пережил, все мои муки 
                        и радости — все это вошло в мои книги, которые, надеюсь, переживут меня.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="bg-muted/50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Icon name="BookMarked" className="h-5 w-5" />
                    Мои главные произведения
                  </h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Бедные люди (1846)</p>
                        <p className="text-sm text-muted-foreground">Мой первый роман, принесший мне известность</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Записки из Мертвого дома (1862)</p>
                        <p className="text-sm text-muted-foreground">Моя память о каторге</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Преступление и наказание (1866)</p>
                        <p className="text-sm text-muted-foreground">История Раскольникова и его нравственного воскресения</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Идиот (1868)</p>
                        <p className="text-sm text-muted-foreground">Мой роман о «положительно прекрасном человеке»</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Бесы (1872)</p>
                        <p className="text-sm text-muted-foreground">Мое пророчество о революционном безумии</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Братья Карамазовы (1880)</p>
                        <p className="text-sm text-muted-foreground">Мой итоговый роман о вере, любви и человеческой душе</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotes" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Мои мысли</CardTitle>
                <CardDescription>Избранные цитаты из моих произведений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-1">
                  {quotes.map((quote, index) => (
                    <Card key={index} className="border-l-4 border-primary hover:shadow-xl transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Icon name="Quote" className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                          <div className="space-y-3 flex-1">
                            <p className="text-xl font-serif italic text-foreground leading-relaxed">
                              "{quote.text}"
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Icon name="BookOpen" className="h-4 w-4" />
                                <span>{quote.source}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Icon name="Calendar" className="h-4 w-4" />
                                <span>{quote.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="bg-muted/50 p-6 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Icon name="Pen" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h5 className="font-semibold mb-2">О моих мыслях</h5>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        Каждая моя книга — это исповедь души, попытка разгадать тайну человека. Я писал о страдании, 
                        потому что сам много страдал. Я писал о вере, потому что без веры жизнь не имеет смысла. 
                        Я писал о России, потому что любил её всем сердцем, несмотря на все её противоречия. 
                        Мои герои — это я сам, раздробленный на множество личностей, каждая из которых несёт часть моей души. 
                        Раскольников, князь Мышкин, Иван Карамазов — все они говорят моими словами, думают моими мыслями, 
                        мучаются моими сомнениями. Я верил, что красота спасёт мир, что страдание очищает душу, 
                        что любовь сильнее смерти. И я надеюсь, что мои книги помогут людям понять эти простые, 
                        но такие важные истины.
                      </p>
                    </div>
                  </div>
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