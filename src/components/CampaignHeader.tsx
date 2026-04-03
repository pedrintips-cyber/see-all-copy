import { Heart } from "lucide-react";

const CampaignHeader = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary-foreground fill-current" />
          </div>
          <span className="text-xl font-bold text-foreground">vakinha</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground transition-colors">Como ajudar</span>
          <span className="cursor-pointer hover:text-foreground transition-colors">Descubra</span>
          <span className="cursor-pointer hover:text-foreground transition-colors">Como funciona</span>
        </nav>
      </div>
    </header>
  );
};

export default CampaignHeader;
