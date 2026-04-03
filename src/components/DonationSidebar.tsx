import { Button } from "@/components/ui/button";
import { Heart, Shield } from "lucide-react";

const DonationSidebar = () => {
  const raised = 3777.63;
  const goal = 7000000;
  const percentage = (raised / goal) * 100;

  return (
    <div className="bg-card rounded-xl border border-border p-6 sticky top-24 space-y-5">
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${Math.max(percentage, 1)}%` }}
        />
      </div>

      <div>
        <p className="text-sm text-muted-foreground">Arrecadado</p>
        <p className="text-3xl font-bold text-primary">R$ 3.777,63</p>
        <p className="text-sm text-muted-foreground">de R$ 7.000.000,00</p>
      </div>

      <div className="flex justify-between text-sm border-t border-border pt-4">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Corações Recebidos</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </div>
        <span className="font-semibold text-foreground">47</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Apoiadores</span>
        <span className="font-semibold text-foreground">186</span>
      </div>

      <Button className="w-full h-12 text-base font-bold rounded-full bg-primary hover:bg-campaign-green-dark text-primary-foreground">
        Quero Ajudar
      </Button>
      <Button variant="outline" className="w-full h-12 text-base font-bold rounded-full border-foreground text-foreground hover:bg-muted">
        Compartilhar
      </Button>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>DOAÇÃO PROTEGIDA</span>
      </div>

      {/* Creator */}
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <img
          src="https://static.vakinha.com.br/uploads/user/avatar/21949960/69635CB5-FAD4-43BB-A0C2-CFC9B7C15262.jpg?ims=45x45"
          alt="Vó da Maitê"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm text-foreground">Vó da Maitê</p>
          <p className="text-xs text-muted-foreground">Ativo(a) desde outubro/2025</p>
        </div>
      </div>
    </div>
  );
};

export default DonationSidebar;
