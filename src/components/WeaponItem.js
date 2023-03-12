import "./styles.css";

const WeaponItem = ({name, image}) => {

    return <div className="weapondisplayframe">
        <h2 className="weapontitle">{name}</h2>
        <img className="weaponimage" src={image}></img>
    </div>
}

export default WeaponItem;