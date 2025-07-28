import ResCard from "./ResCard";
import resList from "../utills/mockdata";
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="card-container">
        {resList.map((resCard, index) => {
          return <ResCard key={index} resObj={resCard}></ResCard>;
        })}
      </div>
    </div>
  );
};
export default Body;
