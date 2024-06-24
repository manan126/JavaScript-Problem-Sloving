function shufflingDecks(){
    const suits = ['heart', 'spade', 'club', 'diamond'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10' , 'Ace', 'King', 'Queen', 'jack'];
    let deck= [];  
  
    for(let suit of suits){
      for(let rank of ranks){
        deck.push(`${rank} of ${suit}`);
      }
    }
    for(let i = 0; i<deck.length; i++){
        const j = Math.floor(Math.random()*deck.length);
        [deck[i], deck[j]]= [deck[j], deck[i]];
      }
      return deck;
     
    }
    let cards = shufflingDecks()
    console.log(cards)