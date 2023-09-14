import PropTypes from "prop-types";

const Card = ({ player,handleSelectedPlayer}) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-64"
            src={player.img_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body  mx-auto">
                  <h2 className="card-title text-center">Name: {player.name}</h2>
                  <h2 className="card-title ">Age: {player.age}</h2>
                  <h2 className="card-title">Country: {player.country}</h2>
                  <h2 className="card-title">Salary: {player.salary} $</h2>
         
          <div className="card-actions justify-center">
            <button onClick={()=>handleSelectedPlayer(player)} className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  player: PropTypes.array,
  handleSelectedPlayer:PropTypes.func
};

export default Card;
