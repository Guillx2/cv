import "./SobreMi.css";
import yopic from "../../assets/images/yopic.png";

const SobreMi = () => {
  return (
    <div className="sobremi-container">
      <h1 className="sobremi-titulo">Sobre Mi</h1>
      <div className="sobremi-content">
        <div className="sobremi-left">
          <img className="sobremi-img" src={yopic} alt=""></img>
        </div>

        <div className="sobremi-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
            rhoncus mi. Integer vel ultrices diam, eu convallis diam. Aliquam ut
            viverra mi. Nullam metus sapien, dictum vel finibus at, semper id
            metus. Ut nec porta risus. Vivamus ut tellus at massa accumsan
            porttitor quis et tortor. Curabitur laoreet lacinia quam, at
            porttitor massa. Donec eget turpis cursus, malesuada tellus
            consequat, placerat purus. Nullam tincidunt lectus ligula, quis
            porttitor tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
