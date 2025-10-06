import { CheckCircle2, Circle, Clock } from "lucide-react";

const Timeline = () => {
  const phases = [
    { 
      phase: "Phase 1", 
      status: "completed", 
      title: "Foundation Launch", 
      description: "Basic website with books and stationery section." 
    },
    { 
      phase: "Phase 2", 
      status: "ongoing", 
      title: "Interactive Learning", 
      description: "Adding interactive courses, quizzes, and student dashboards." 
    },
    { 
      phase: "Phase 3", 
      status: "upcoming", 
      title: "AI Integration", 
      description: "AI-powered personalized learning recommendations." 
    },
    { 
      phase: "Phase 4", 
      status: "future", 
      title: "Mobile App", 
      description: "Native Android & iOS app with offline access." 
    },
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-6 w-6 text-secondary" />;
      case "ongoing":
        return <Clock className="h-6 w-6 text-primary animate-pulse" />;
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Product{" "}
            <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future of education, one step at a time
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {phases.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 group"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border-2 border-border group-hover:border-primary transition-colors">
                  {getIcon(item.status)}
                </div>
                {index < phases.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="bg-card p-6 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{item.phase}: {item.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      item.status === 'completed' ? 'bg-secondary/20 text-secondary' :
                      item.status === 'ongoing' ? 'bg-primary/20 text-primary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
