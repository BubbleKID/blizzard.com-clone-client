import Card from './Card';
import diablo2Cover from '../images/fenway-game-card.jpeg';
import overWatch2Cover from'../images/game-card_overwatch2_enUS.jpeg';
import overWatchCover from'../images/game-card_overwatch_enUS.jpeg';
import wowCover from '../images/game-card_wow_enUS.jpeg';

export default function Gallery() {
    const cards = [{ name: "Diablo2", background: diablo2Cover},
      { name: "Overwatch2", background:overWatch2Cover },  
      { name: "Overwatch", background:overWatchCover },
      { name: "World of Warcraft", background:wowCover }
    ];
     
    return (
      <section>
        <h1>Games</h1>
        {cards.map(card => (
            <Card key={card.name} background={card.background} name={card.name}></Card>
          ))
        }
      </section>
    );
}