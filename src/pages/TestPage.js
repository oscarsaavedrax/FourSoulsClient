import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import CardDropTarget from '../components/CardDropTarget'
import Card from '../components/Card'
import penny from '../assets/images/card-pictures/loot-cards/a-penny.png'
import lootCardBack from '../assets/images/card-pictures/card-drop-targets/loot-card-back.png'
import monsterCardBack from '../assets/images/card-pictures/card-drop-targets/monster-card-back.png'
import {CardTypes} from '../components/CardTypes.js';
const TestPage = props => {
    let lootCardType = CardTypes.LOOT_CARD;
    let monsterCardType = CardTypes.MONSTER_CARD;
    return(
        <div>
            <DndProvider backend={HTML5Backend}>
                <Card picture={penny} cardType={lootCardType} isTapped={false}/>
                <CardDropTarget picture={lootCardBack} cardType={lootCardType}/>
                <CardDropTarget picture={monsterCardBack} cardType={monsterCardType} />
                <Card picture={penny} cardType={lootCardType} isTapped={true}/>
            </DndProvider>
        </div>
    )
}

export default TestPage;