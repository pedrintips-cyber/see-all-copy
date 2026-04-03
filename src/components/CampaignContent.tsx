import { Copy } from "lucide-react";
import { toast } from "sonner";

const CampaignContent = () => {
  const copyPix = () => {
    navigator.clipboard.writeText("5797535@vakinha.com.br");
    toast.success("Chave PIX copiada!");
  };

  return (
    <div className="space-y-6">
      {/* Hero image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src="https://static.vakinha.com.br/uploads/vakinha/image/5797535/91AA4269-9F09-43BE-9A8D-E3FA062A1F43.jpg?ims=700x410"
          alt="Bebê Maitê no hospital"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Category & Location */}
      <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wide">
        <span>Saúde / Tratamentos</span>
        <span>📍 Rio de Janeiro / RJ</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
        DOENÇA RARA DEGENERATIVA (AME Tipo1), AJUDE A BEBÊ MAITÊ
      </h1>

      <p className="text-xs text-muted-foreground">ID: 5797535</p>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-border text-sm font-medium">
        <button className="pb-3 border-b-2 border-primary text-primary">Sobre</button>
        <button className="pb-3 text-muted-foreground hover:text-foreground transition-colors">Atualizações</button>
        <button className="pb-3 text-muted-foreground hover:text-foreground transition-colors">Quem ajudou</button>
      </div>

      {/* PIX */}
      <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
        <p className="text-sm text-foreground">
          Você pode ajudar via Pix usando a chave:{" "}
          <strong>5797535@vakinha.com.br</strong>
        </p>
        <button onClick={copyPix} className="text-primary hover:text-campaign-green-dark transition-colors">
          <Copy className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        <strong>Vaquinha criada em:</strong> 07/11/2025
      </p>

      {/* Story */}
      <article className="prose prose-sm max-w-none text-foreground space-y-4">
        <p className="font-bold">
          Ajude a Maitê, a vencer a AME Tipo 1: foco no tratamento e na qualidade de vida!
        </p>
        <p>
          Olá! Sou do Rio de Janeiro, a mãe da Maitê Christine, de apenas 1 ano que enfrenta um diagnóstico desafiador: Atrofia Muscular Espinhal (AME) Tipo 1.{" "}
          <strong>
            Essa condição genética compromete os movimentos, a respiração e a deglutição, sem um suporte adequado, pode ser fatal antes dos dois anos de vida.
          </strong>
        </p>
        <p>
          <strong>O que é AME?</strong> A AME é uma condição genética rara que causa a degeneração dos neurônios motores. Esses neurônios controlam funções vitais como andar, respirar e engolir. Quando morrem, não se regeneram. A ausência do gene SMN1 impede o corpo de produzir uma proteína essencial à sobrevivência dessas células. A expectativa de vida de pacientes com atrofia muscular espinhal (AME) tipo I é geralmente considerada inferior a 2 anos.
        </p>
        <p>
          Para oferecer à Maitê a melhor chance possível, estamos lutando por um tratamento contínuo e de qualidade. Embora o medicamento{" "}
          <strong>ZOLGENSMA — que pode mudar o rumo dessa história — custe cerca de 7 milhões de reais,</strong> nossa prioridade imediata é garantir todos os cuidados de suporte necessários.
        </p>

        <p className="font-bold">✨ Nosso foco agora é manter a Maitê estável e confortável:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Equipamentos respiratórios (BiPAP, insumos e acessórios)</li>
          <li>Apoio terapêutico contínuo (fisioterapia e fonoaudiologia)</li>
          <li>Insumos e cuidados especiais (colchão pneumático, cadeira adaptada)</li>
          <li>Transporte para consultas e sessões de terapia</li>
        </ul>

        <p>
          Cada dia é uma vitória nessa luta. Esses recursos são fundamentais para manter a saúde da Maitê e prepará-la para qualquer oportunidade de tratamento futuro.
        </p>

        <p className="font-bold">🚨 Por que sua ajuda é tão importante?</p>
        <p>
          O custo diário de todos esses cuidados ultrapassa o que nossa família consegue arcar sozinha. Sem esse suporte, corremos o risco de perder tempo precioso na busca pela estabilidade dela.
        </p>

        <p className="font-bold">🌟 Como você pode fazer a diferença:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Doe</strong> qualquer valor — cada contribuição faz a Maitê sorrir e respirar com mais segurança.
          </li>
          <li>
            <strong>Compartilhe</strong> esta campanha em suas redes, grupos de amigos e familiares.
          </li>
          <li>
            <strong>Conecte-nos</strong> a influenciadores, empresas ou veículos de mídia que possam amplificar nossa voz.
          </li>
        </ul>

        <p>
          Juntos, podemos oferecer à Maitê o conforto, a estabilidade e o suporte que ela merece. Conte com nosso imenso agradecimento e fique com a certeza de que seu gesto solidário faz toda a diferença.
        </p>
        <p>
          Que Deus ilumine cada coração generoso. A vida da Maitê está em nossas mãos — contamos com você! 🙏
        </p>
      </article>

      {/* Additional images */}
      <div className="grid grid-cols-3 gap-3">
        <img
          src="https://static.vakinha.com.br/uploads/descriptions/1762550232/IMG_4852.jpeg"
          alt="Maitê 1"
          className="rounded-lg w-full h-40 object-cover"
        />
        <img
          src="https://static.vakinha.com.br/uploads/descriptions/1762550233/IMG_4853.jpeg"
          alt="Maitê 2"
          className="rounded-lg w-full h-40 object-cover"
        />
        <img
          src="https://static.vakinha.com.br/uploads/descriptions/1762550234/IMG_4846.jpeg"
          alt="Maitê 3"
          className="rounded-lg w-full h-40 object-cover"
        />
      </div>

      {/* Legal */}
      <p className="text-xs text-muted-foreground border-t border-border pt-4">
        AVISO LEGAL: O texto e as imagens incluídos nessa página são de única e exclusiva responsabilidade do criador da vaquinha e não representam a opinião ou endosso da plataforma.
      </p>
    </div>
  );
};

export default CampaignContent;
