
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import Cart from './Cart';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
         fetch('./data.json')
         .then(res=>res.json())
         .then(data=>setPlayers(data))
    }, [])
    
    const handleSelectedPlayer = (player) => {
        const isExist = selectedPlayer.find(item => item.id === player.id)
        let count = player.salary;
        if (isExist) {
            return alert("already sold")
        }
        else {
            selectedPlayer.forEach(item => {
                 count = count + item.salary
            })
            const totalRemaining = 8000 - count
            if (count > 8000) {
                return alert("not enought balance")
            } else {
                setTotalCost(count)
                setRemaining(totalRemaining)
                setSelectedPlayer([...selectedPlayer,player])
            }
        }
    }

    return (
        <div className='flex  flex-col md:flex-row gap-2'>
            <div className='flex gap-5 flex-wrap w-[700px]'>
                {
                    players.map(player => <Card
                        key={player.id}
                        player={player}
                        handleSelectedPlayer={handleSelectedPlayer}
                    ></Card>)
               }
            </div>

            {/* cart functinality */}

            <div>
                <Cart
                    selectedPlayer={selectedPlayer}
                    remaining={remaining}
                    totalCost={totalCost}
                ></Cart>
            </div>
        </div>
    );
};

Home.propTypes = {
    Home:PropTypes.func
};

export default Home;