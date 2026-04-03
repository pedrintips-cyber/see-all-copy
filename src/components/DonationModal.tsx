import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Heart, QrCode } from "lucide-react";
import { toast } from "sonner";

const PIX_KEY = "5797535@vakinha.com.br";

const donationValues = [10, 25, 50, 100, 200, 500];

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationModal = ({ open, onOpenChange }: DonationModalProps) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(50);
  const [customValue, setCustomValue] = useState("");
  const [step, setStep] = useState<"value" | "pix">("value");

  const handleCopyPix = () => {
    navigator.clipboard.writeText(PIX_KEY);
    toast.success("Chave PIX copiada!");
  };

  const handleNext = () => {
    setStep("pix");
  };

  const handleClose = () => {
    setStep("value");
    setSelectedValue(50);
    setCustomValue("");
    onOpenChange(false);
  };

  const displayValue = selectedValue ?? (customValue ? Number(customValue) : 0);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md mx-auto rounded-2xl p-0 overflow-hidden border-none">
        {/* Header verde */}
        <div className="bg-primary px-6 pt-6 pb-8 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="text-primary-foreground flex items-center gap-2 text-lg font-heading">
              <Heart className="w-5 h-5 fill-current" />
              Faça sua doação
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm opacity-90 mt-1">Ajude a bebê Maitê a vencer a AME Tipo 1</p>
        </div>

        {step === "value" ? (
          <div className="px-6 pb-6 pt-4 space-y-5">
            <p className="text-sm font-medium text-foreground">Escolha um valor:</p>

            <div className="grid grid-cols-3 gap-3">
              {donationValues.map((value) => (
                <button
                  key={value}
                  onClick={() => {
                    setSelectedValue(value);
                    setCustomValue("");
                  }}
                  className={`h-12 rounded-xl text-sm font-bold transition-all border-2 ${
                    selectedValue === value
                      ? "border-primary bg-accent text-accent-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  R$ {value}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
                R$
              </span>
              <input
                type="number"
                placeholder="Outro valor"
                value={customValue}
                onChange={(e) => {
                  setCustomValue(e.target.value);
                  setSelectedValue(null);
                }}
                className="w-full h-12 pl-10 pr-4 rounded-xl border-2 border-border bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <Button
              onClick={handleNext}
              disabled={displayValue <= 0}
              className="w-full h-12 rounded-full bg-primary hover:bg-campaign-green-dark text-primary-foreground font-bold text-base"
            >
              Doar R$ {displayValue > 0 ? displayValue.toFixed(2).replace(".", ",") : "0,00"}
            </Button>
          </div>
        ) : (
          <div className="px-6 pb-6 pt-4 space-y-5">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Valor da doação</p>
              <p className="text-3xl font-bold text-primary">
                R$ {displayValue.toFixed(2).replace(".", ",")}
              </p>
            </div>

            {/* QR Code placeholder */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center space-y-2">
                  <QrCode className="w-16 h-16 text-muted-foreground mx-auto" />
                  <p className="text-xs text-muted-foreground">QR Code PIX</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Escaneie o QR Code com o app do seu banco
              </p>
            </div>

            {/* Chave PIX */}
            <div className="bg-muted rounded-xl p-4 space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Ou copie a chave PIX:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm font-bold text-foreground bg-card px-3 py-2 rounded-lg border border-border truncate">
                  {PIX_KEY}
                </code>
                <button
                  onClick={handleCopyPix}
                  className="shrink-0 h-9 w-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-campaign-green-dark transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep("value")}
                className="flex-1 h-11 rounded-full border-border text-foreground"
              >
                Voltar
              </Button>
              <Button
                onClick={handleClose}
                className="flex-1 h-11 rounded-full bg-primary hover:bg-campaign-green-dark text-primary-foreground font-bold"
              >
                Concluído
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
