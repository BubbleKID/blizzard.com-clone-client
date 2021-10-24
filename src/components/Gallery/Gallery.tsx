import Card from '../Card/Card';
import './Gallery.css';
import diablo2Cover from '../../images/fenway-game-card.jpeg';
import overWatch2Cover from'../../images/game-card_overwatch2_enUS.jpeg';
import overWatchCover from'../../images/game-card_overwatch_enUS.jpeg';
import wowCover from '../../images/game-card_wow_enUS.jpeg';
import background from '../../images/background-generic-landscape-short.jpg'

export default function Gallery() {
    const cards = [{ name: "Diablo2", background: diablo2Cover},
      { name: "Overwatch2", background:overWatch2Cover },  
      { name: "Overwatch", background:overWatchCover },
      { name: "World of Warcraft", background:wowCover }
    ];
     
    return (
      <div className="gallery-container" style={{backgroundImage: `url(${background})`}}>
        <div className='headdingContainer'>
          <h2 style={{color: '#fff', width: '100%'}}>Games</h2>
          <a><span>Shop All Games</span></a>
        </div>
        <div className='gallery'>
          {cards.map(card => (
              <Card key={card.name} background={card.background} name={card.name}></Card>
            ))
          }
        </div>
      </div>
    );
}