import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import randomise from '../utils/array-helpers';
import './Board.css';

class Board extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: this.randomiseCards(),
    }
  }

  randomiseCards() {
    const defaultCard = { cardIsExpanded: false, contextMenuExpanded: false, color: '' };
    return randomise([...Array(100)].map((_, i) => ({ cardId: i, ...defaultCard }))).slice(0, 20);
  }

  toggleExpand(card) {
    this.resetCards(card);
    card.cardIsExpanded = !card.cardIsExpanded;
    this.setState({ cards: this.state.cards });
  }

  onContextMenu(card, e) {
    e.preventDefault();
    this.resetCards();
    card.contextMenuExpanded = !card.contextMenuExpanded;
    this.setState({ cards: this.state.cards });
  }

  resetAll(e) {
    if (e.target.parentElement.className === 'card' || e.target.parentElement.className === 'card') {
      return;
    }
    this.resetCards();
    this.setState({ cards: this.state.cards });
  }

  resetCards(card = {}) {
    this.state.cards.filter(c => c.cardId !== card.cardId).forEach(c => { c.cardIsExpanded = false; c.contextMenuExpanded = false; });
  }

  newGames() {
    this.state.cards = this.randomiseCards();
  }

  resetColor(card) {
    if (document.selection && document.selection.empty) {
      document.selection.empty();
    } else if (window.getSelection) {
      const sel = window.getSelection();
      sel.removeAllRanges();
    }
    card.color = '';
    this.setState({ cards: this.state.cards });
  }

  render() {
    return (
      <div className="container" onClick={e => this.resetAll(e)}>
        <div className="grid">
          {this.state.cards.map(card => (
            <Card
              key={card.cardId}
              card={card}
              resetColor={() => this.resetColor(card)}
              onClick={() => this.toggleExpand(card)}
              onContextMenu={e => this.onContextMenu(card, e)}
            />
          ))}
        </div>
        <div className="btn-wrapper">
          <div>
            <Link className="btn blue" target="_blank" to={`/spy-master/${Math.floor(Math.random() * 100)}`}>Spy Master</Link>
            <button className="btn" onClick={() => this.newGames()}>New Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;