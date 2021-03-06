import React from 'react';
import './Card.scss';
import CardContextMenu from './CardContextMenu';
import useOutsideClickListener from '../hooks/useOutsideClickListener';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';
import Badge from './library/Badge';
import {CardColor, ICard, IGameContext} from '../interfaces/Game';

interface IProps {
  index: number;
  card: ICard;
}

const Card:React.FC<IProps> = ({index, card}) => {
  const {setColor, isDuetGame} = React.useContext<IGameContext>(GameContext);
  const {cardId, color} = card;
  const [enlarged, setEnlargement] = React.useState<boolean>(false);
  const [menuVisible, setMenuVisible] = React.useState<boolean>(false);
  const container = React.useRef(null);
  useOutsideClickListener(container, () => setEnlargement(false));

  const showMenu = (e:any) => {
    e.preventDefault();
    setEnlargement(false);
    setMenuVisible(true);
  };

  const setCardColor = (color:CardColor) => setColor(card, color);
  const resetColor = () => setCardColor('');

  return (
    <div
      onContextMenu={showMenu}
      className={classNames('Card', {
        'selected': !!color,
        [color]: !!color,
        'duet': isDuetGame,
      })}
      ref={container}
      onDoubleClick={resetColor}
    >
      <Badge classname="card-id">{index}</Badge>
      <button onClick={() => setEnlargement(!enlarged)} className="no-style">
        <img
          src={`/codenames-pictures/images/cards/card-${cardId}.jpg`}
          className={classNames('card-img', {'enlarged': enlarged})}
          alt={`codename card-${cardId}`}
        />
      </button>

      {menuVisible && <CardContextMenu
        hideMenu={() => setMenuVisible(false)}
        setColor={setCardColor}
      />}
    </div>
  );
};

export default Card;
