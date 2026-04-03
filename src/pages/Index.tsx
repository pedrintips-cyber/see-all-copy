import CampaignHeader from "@/components/CampaignHeader";
import CampaignContent from "@/components/CampaignContent";
import DonationSidebar from "@/components/DonationSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CampaignHeader />
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          <CampaignContent />
          <aside className="hidden lg:block">
            <DonationSidebar />
          </aside>
        </div>

        {/* Mobile sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 lg:hidden z-50">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-xs text-muted-foreground">Arrecadado</p>
              <p className="text-lg font-bold text-primary">R$ 3.777,63</p>
            </div>
            <p className="text-xs text-muted-foreground">186 apoiadores</p>
          </div>
          <button className="w-full h-12 rounded-full bg-primary text-primary-foreground font-bold text-base">
            Quero Ajudar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
