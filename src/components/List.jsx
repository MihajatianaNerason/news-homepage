import retro from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

const List = () => {
  return (
    <div className="list">
      <ul>
        <li>
          <img src={retro} alt="Retro PC" />
          <div>
            <h3>01</h3>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </li>
        <li>
          <img src={laptop} alt="Top laptops" />
          <div>
            <h3>02</h3>
            <h4>Top 10 Laptops of 2024</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </li>
        <li>
          <img src={gaming} alt="Gaming Growth" />
          <div>
            <h3>03</h3>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
