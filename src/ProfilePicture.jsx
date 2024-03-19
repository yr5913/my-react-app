function ProfilePicture() {
  const imageUrl = "./src/assets/profile.png";

  const handleClick = (e) => {
    console.log(e);
    e.target.style.display = "none";
  };

  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}

export default ProfilePicture;
