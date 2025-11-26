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
      <section className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-greenAccent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-greenAccent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary/70 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-greenAccent/70 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          
          <svg className="absolute top-1/4 right-10 w-24 h-24 text-primary/20 animate-float" style={{ animationDelay: '0.3s' }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
          <svg className="absolute bottom-1/3 left-20 w-32 h-32 text-greenAccent/20 animate-float" style={{ animationDelay: '0.8s' }} viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" transform="rotate(45 50 50)" />
          </svg>
        </div>

        <div className="text-center space-y-6 max-w-4xl mx-auto relative z-10">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-greenAccent via-primary to-greenAccent bg-clip-text text-transparent animate-float bg-[length:200%_auto] animate-[float_3s_ease-in-out_infinite,gradient_3s_ease_infinite]">
              PulseUp
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Технологии будущего для вашего бизнеса
          </p>
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
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