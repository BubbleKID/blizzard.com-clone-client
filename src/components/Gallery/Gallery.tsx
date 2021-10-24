import Card from '../Card/Card';
import './Gallery.css';
import diablo2Cover from '../../images/fenway-game-card.jpeg';
import overWatch2Cover from'../../images/game-card_overwatch2_enUS.jpeg';
import overWatchCover from'../../images/game-card_overwatch_enUS.jpeg';
import wowCover from '../../images/game-card_wow_enUS.jpeg';
import hsCover from '../../images/game-card_hearthstone_enUS.jpeg';
import heroesCover from '../../images/game-card_heroes_enUS.jpeg';
import war3Cover from '../../images/game-card-wc3-en-us.jpeg';
import diablo4 from '../../images/game-card_diablo4_enUS.jpeg';
import diabloimmortalCover from '../../images/game-card_diabloimmortal_enUS.jpeg';
import diablo3Cover from '../../images/game-card_diablo3_enUS.jpeg';
import sc2Cover from '../../images/game-card_starcraft2_enUS.jpeg';
import scCover from '../../images/game-card_starcraft_enUS.jpeg';
import arcadeCover from '../../images/rtro-game-card.jpeg';
import background from '../../images/background-generic-landscape-short.jpg'

export default function Gallery() {
    const cards = [
      { name: "Diablo2", background: diablo2Cover},
      { name: "Overwatch2", background: overWatch2Cover, url: '#' },  
      { name: "Overwatch", background: overWatchCover, url: '#' },
      { name: "World of Warcraft", background: wowCover, url: '#' },
      { name: "HearthStone", background: hsCover, url: '#' },
      { name: "Heroes of The Storm", background: heroesCover, url: '#' },
      { name: "Warcraft3", background: war3Cover, url: '#' },
      { name: "Diablo4", background: diablo4, url: '#' },
      { name: "Diablo Immortal", background: diabloimmortalCover, url: '#' },
      { name: "Diablo3", background: diablo3Cover, url: '#' },
      { name: "Starcraft2", background: sc2Cover, url: '#' },
      { name: "Starcraft", background: scCover, url: '#' },
      { name: "Blizzard Arcade", background: arcadeCover, url: '#' }
    ];
     
    return (
      <div className="gallery-container" style={{backgroundImage: `url(${background})`}}>
        <div className="gallery-wrapper">
          <div className='headdingContainer'>
            <h2 className="heading">Games</h2>
            <a><span>Shop All Games</span></a>
          </div>
          <div className='gallery'>
            {cards.map(card => (
                <Card key={card.name} background={card.background} name={card.name}></Card>
              ))
            }
          </div>
        </div>
      </div>
    );
}