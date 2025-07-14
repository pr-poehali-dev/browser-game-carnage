import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('lobby');
  const [character] = useState({
    name: 'Воин Тьмы',
    level: 25,
    hp: 850,
    maxHp: 1000,
    experience: 7500,
    maxExp: 10000,
    strength: 45,
    defense: 38,
    agility: 29,
    intelligence: 22
  });

  const gameStats = {
    onlinePlayers: 1247,
    totalBattles: 3582,
    guilds: 156,
    activeTournaments: 3
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-roboto">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-orbitron font-bold text-primary">CARNAGE ARENA</h1>
              <Badge variant="secondary" className="animate-pulse">
                <Icon name="Users" size={16} className="mr-1" />
                {gameStats.onlinePlayers} онлайн
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Icon name="Coins" size={16} className="text-primary" />
                <span>12,450 золота</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Icon name="Gem" size={16} className="text-accent" />
                <span>89 кристаллов</span>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'lobby', label: 'Лобби', icon: 'Home' },
              { id: 'character', label: 'Персонаж', icon: 'User' },
              { id: 'battle', label: 'Арена', icon: 'Swords' },
              { id: 'inventory', label: 'Инвентарь', icon: 'Package' },
              { id: 'guild', label: 'Гильдия', icon: 'Shield' },
              { id: 'shop', label: 'Магазин', icon: 'ShoppingCart' },
              { id: 'dungeon', label: 'Подземелья', icon: 'Castle' },
              { id: 'chat', label: 'Чат', icon: 'MessageCircle' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center space-x-2 transition-all hover:scale-105"
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Character Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6 bg-gradient-to-br from-card to-card/80 border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="font-orbitron text-lg">{character.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Уровень {character.level}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Здоровье</span>
                    <span>{character.hp}/{character.maxHp}</span>
                  </div>
                  <Progress value={(character.hp / character.maxHp) * 100} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Опыт</span>
                    <span>{character.experience}/{character.maxExp}</span>
                  </div>
                  <Progress value={(character.experience / character.maxExp) * 100} className="h-2 bg-muted" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Sword" size={14} className="text-accent" />
                    <span>Сила: {character.strength}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={14} className="text-primary" />
                    <span>Защита: {character.defense}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={14} className="text-yellow-400" />
                    <span>Ловкость: {character.agility}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Brain" size={14} className="text-blue-400" />
                    <span>Интеллект: {character.intelligence}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle className="text-sm font-orbitron">Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Swords" size={16} className="mr-2" />
                  Быстрый бой
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Trophy" size={16} className="mr-2" />
                  Турнир
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Users" size={16} className="mr-2" />
                  Поиск гильдии
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Game Area */}
          <div className="lg:col-span-2">
            {activeSection === 'lobby' && (
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-xl">Добро пожаловать в арену!</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="w-full h-48 rounded-lg bg-cover bg-center mb-4"
                      style={{ backgroundImage: 'url(/img/0af685fa-4837-400f-8af8-45cac7300f3f.jpg)' }}
                    />
                    <p className="text-muted-foreground mb-4">
                      Сражайтесь с игроками со всего мира, развивайте своего персонажа, 
                      собирайте легендарную экипировку и станьте величайшим воином арены!
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{gameStats.onlinePlayers}</div>
                        <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{gameStats.totalBattles}</div>
                        <div className="text-sm text-muted-foreground">Боев сегодня</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{gameStats.guilds}</div>
                        <div className="text-sm text-muted-foreground">Активных гильдий</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{gameStats.activeTournaments}</div>
                        <div className="text-sm text-muted-foreground">Турниров</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Trophy" size={20} className="text-yellow-400" />
                        <span>Рейтинг</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { name: 'Драконобой', rating: 2847, pos: 1 },
                          { name: 'Темный_Лорд', rating: 2756, pos: 2 },
                          { name: 'Молния', rating: 2698, pos: 3 },
                          { name: character.name, rating: 1847, pos: 47 }
                        ].map((player, i) => (
                          <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/30">
                            <div className="flex items-center space-x-2">
                              <Badge variant={player.pos <= 3 ? 'default' : 'secondary'}>
                                #{player.pos}
                              </Badge>
                              <span className={player.name === character.name ? 'text-primary font-bold' : ''}>
                                {player.name}
                              </span>
                            </div>
                            <span className="font-mono">{player.rating}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Calendar" size={20} className="text-primary" />
                        <span>События</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 rounded border border-primary/30 bg-primary/5">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold">Турнир Гладиаторов</span>
                            <Badge variant="default">Активен</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Заканчивается через 2ч 45м</p>
                        </div>
                        
                        <div className="p-3 rounded border border-accent/30 bg-accent/5">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold">Двойной опыт</span>
                            <Badge variant="outline">Скоро</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Начнется через 4ч 12м</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeSection === 'battle' && (
              <Card className="bg-gradient-to-br from-accent/10 to-destructive/10">
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl flex items-center space-x-2">
                    <Icon name="Swords" size={24} className="text-accent" />
                    <span>Боевая арена</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="w-full h-64 rounded-lg bg-cover bg-center mb-6"
                    style={{ backgroundImage: 'url(/img/54269c18-d885-4ffa-89b1-ba03202a082a.jpg)' }}
                  />
                  
                  <Tabs defaultValue="pvp" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="pvp">PvP Бои</TabsTrigger>
                      <TabsTrigger value="tournament">Турниры</TabsTrigger>
                      <TabsTrigger value="training">Тренировки</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="pvp" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button size="lg" className="h-20 flex-col space-y-2">
                          <Icon name="Zap" size={24} />
                          <span>Быстрый бой</span>
                        </Button>
                        <Button size="lg" variant="outline" className="h-20 flex-col space-y-2">
                          <Icon name="Target" size={24} />
                          <span>Выбрать противника</span>
                        </Button>
                      </div>
                      
                      <div className="p-4 rounded border bg-muted/20">
                        <h4 className="font-semibold mb-2">Доступные противники:</h4>
                        <div className="space-y-2">
                          {[
                            { name: 'Берсерк_77', level: 24, rating: 1823 },
                            { name: 'Архимаг', level: 26, rating: 1891 },
                            { name: 'Паладин_Света', level: 25, rating: 1856 }
                          ].map((opponent, i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded bg-card">
                              <div>
                                <span className="font-medium">{opponent.name}</span>
                                <span className="text-sm text-muted-foreground ml-2">
                                  Ур. {opponent.level} | {opponent.rating} рейтинг
                                </span>
                              </div>
                              <Button size="sm">Вызвать</Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tournament">
                      <div className="text-center py-8">
                        <Icon name="Trophy" size={48} className="mx-auto mb-4 text-yellow-400" />
                        <h3 className="text-xl font-orbitron mb-2">Турнир Гладиаторов</h3>
                        <p className="text-muted-foreground mb-4">Участников: 64/64</p>
                        <Button>Просмотреть турнирную сетку</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {(activeSection !== 'lobby' && activeSection !== 'battle') && (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Construction" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-orbitron mb-2">В разработке</h3>
                  <p className="text-muted-foreground">Раздел "{activeSection}" скоро будет доступен!</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Chat Footer */}
        <div className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Общий чат</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-3 h-24 overflow-y-auto text-sm">
                <div><span className="text-primary font-semibold">Драконобой:</span> кто хочет в гильдию?</div>
                <div><span className="text-accent font-semibold">Маг_Огня:</span> продаю меч +5!</div>
                <div><span className="text-muted-foreground font-semibold">Система:</span> Турнир начнется через 10 минут</div>
              </div>
              <div className="flex space-x-2">
                <Input placeholder="Написать сообщение..." className="flex-1" />
                <Button size="sm">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;