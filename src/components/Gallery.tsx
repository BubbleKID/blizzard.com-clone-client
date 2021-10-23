import Card from './Card';
import diablo2Cover from '../images/fenway-game-card.jpeg';
import overWatch2Cover from'../images/game-card_overwatch2_enUS.jpeg';
import overWatchCover from'../images/game-card_overwatch_enUS.jpeg';
import wowCover from '../images/game-card_wow_enUS.jpeg';

export default function Gallery() {
    const cards: string[] = [diablo2Cover, overWatch2Cover, overWatchCover, wowCover];
     
    return (
      <section>
        <h1>Games</h1>
        {cards.map(card => (
            <Card background={card}></Card>
          ))
        }
      </section>
    );
}