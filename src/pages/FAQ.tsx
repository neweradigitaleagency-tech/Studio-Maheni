import { SectionTitle, FAQItem } from '../components/Shared';

export const FAQ = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* --- FAQ Section --- */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle eyebrow="Questions Fréquentes" title="Tout ce qu'il faut savoir" centered />
          
          <div className="mt-12">
            <FAQItem 
              question="Faut-il être sportive pour commencer la Pole Dance ?" 
              answer="Pas du tout ! La force et la souplesse se développent au fil des séances. Nos cours débutants sont conçus pour vous accompagner pas à pas, quel que soit votre point de départ." 
            />
            <FAQItem 
              question="Quelle tenue porter pour le premier cours ?" 
              answer="Pour la Pole Dance, un short court (pour l'adhérence de la peau sur la barre) et une brassière ou un débardeur. Pour le Kompa et la Kizomba, une tenue confortable dans laquelle vous pouvez bouger librement." 
            />
            <FAQItem 
              question="Où se situe le studio ?" 
              answer="Nous sommes situés au New Gym, à Abidjan. Vous pouvez nous trouver facilement via Google Maps pour nous rejoindre." 
            />
            <FAQItem 
              question="Proposez-vous des cours d'essai ?" 
              answer="Oui, nous proposons des séances découverte à tarif préférentiel pour vous permettre de tester l'ambiance et la discipline avant de vous engager." 
            />
            <FAQItem 
              question="Y a-t-il un âge minimum pour pratiquer la Pole Dance ?" 
              answer="Nos cours adultes sont ouverts à partir de 16 ans. Nous accueillons tous les profils, peu importe l'âge — de nombreuses élèves commencent après 30 ou 40 ans et progressent très rapidement." 
            />
            <FAQItem 
              question="Est-ce que la Pole Dance est dangereuse ?" 
              answer="Pratiquée dans un cadre encadré, la Pole Dance est une activité sûre. Nos coaches diplômées veillent à votre sécurité à chaque séance et les mouvements sont appris progressivement, sans jamais brûler les étapes." 
            />
            <FAQItem 
              question="Combien de temps avant de voir des résultats ?" 
              answer="Dès les premières séances, vous sentirez un travail musculaire réel. En 4 à 6 semaines de pratique régulière, les changements physiques et la confiance en soi deviennent visibles." 
            />
            <FAQItem 
              question="Peut-on pratiquer pendant ses règles ?" 
              answer="Oui, il n'y a aucune contre-indication. Écoutez simplement votre corps — si vous ressentez de l'inconfort, adaptez l'intensité avec votre coach." 
            />
            <FAQItem 
              question="Faut-il avoir de la souplesse pour le Kompa et la Kizomba ?" 
              answer="Non, ces danses reposent avant tout sur le ressenti, la connexion et le rythme. La souplesse n'est pas un prérequis — c'est l'écoute musicale et le plaisir qui priment." 
            />
            <FAQItem 
              question="Les cours se font-ils en groupe ou en individuel ?" 
              answer="Nous proposons les deux formats. Les cours collectifs favorisent l'échange et la bonne ambiance. Les cours particuliers permettent une progression plus rapide et personnalisée." 
            />
            <FAQItem 
              question="Comment réserver une séance ?" 
              answer="La réservation se fait directement via notre site en quelques clics. Vous recevez une confirmation immédiate par email avec tous les détails de votre séance." 
            />
            <FAQItem 
              question="Dois-je apporter mon propre équipement ?" 
              answer="Non, tout le matériel est mis à disposition au studio. Vous n'avez besoin que de votre tenue et de votre motivation." 
            />
            <FAQItem 
              question="Les cours sont-ils mixtes ?" 
              answer="Nos cours sont principalement féminins, dans un espace bienveillant et sans jugement. Certains créneaux Kompa/Kizomba sont ouverts aux couples — renseignez-vous auprès du studio." 
            />
            <FAQItem 
              question="Puis-je reprendre après une longue pause ou une blessure ?" 
              answer="Absolument. Signalez simplement votre situation à votre coach en début de séance. Nous adaptons le programme pour que vous repreniez en douceur, sans risque." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};
