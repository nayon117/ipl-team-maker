 
import PropTypes from 'prop-types';

const Cart = ({ selectedPlayer,remaining,totalCost }) => {
    console.log(selectedPlayer);
    return (
        <div className='text-black font-bold space-y-3'>
            <h1 className='text-xl'>Player Selected:{selectedPlayer.length}</h1>
            <h1 className='border-2 text-primary p-2 rounded'>Total Balance: 8000</h1>
            <h1 className='border-2 text-primary p-2 rounded'>Total Cost: { totalCost}</h1>
            <h1 className='border-2 text-primary p-2 rounded'>Remaining Balance: {remaining}</h1>
            {
                selectedPlayer.map(player => <li key={player.id}>{player.name }</li>)
            }
        </div>
    );
};

Cart.propTypes = {
    selectedPlayer: PropTypes.array,
    remaining: PropTypes.number,
    totalCost:PropTypes.number
};

export default Cart;