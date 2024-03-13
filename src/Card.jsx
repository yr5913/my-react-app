import profilePic from "./assets/profile.png";
function Card() {
  return (
    <div className="card">
      <img className="card-image" alt="profile picture" src={profilePic}></img>
      <h2 className="card-title">Yugesh Reganti</h2>
      <p className="card-text">I am a Software Engineer</p>
    </div>
  );
}

export default Card;
