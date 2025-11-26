import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "MessageSquare",
      title: "Telegram бот",
      description: "Автоматизируйте взаимодействие с клиентами через умных ботов"
    },
    {
      icon: "Globe",
      title: "Сайт",
      description: "Современные веб-решения для вашего бизнеса"
    },
    {
      icon: "BarChart3",
      title: "Аналитика",
      description: "Глубокая аналитика данных и бизнес-инсайты"
    },
    {
      icon: "Sparkles",
      title: "ИИ",
      description: "Интеграция искусственного интеллекта в ваши процессы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-greenAccent to-primary bg-clip-text text-transparent animate-float">
              PulseUp
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Технологии будущего для вашего бизнеса
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/fbcab1dc-d62e-401c-9cda-2c054be69db6/files/cfae5d70-2780-4a70-afb8-d77abdcbe409.jpg"
              alt="Искусственный интеллект"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
              <div className="p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Будущее начинается сегодня
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Используйте возможности искусственного интеллекта для роста вашего бизнеса
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Давайте создадим что-то великое вместе
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Свяжитесь с нами, чтобы обсудить ваш проект
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Icon name="Mail" size={20} className="mr-2" />
              info@pulseup.tech
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2024 PulseUp. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
