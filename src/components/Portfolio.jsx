import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            stack={item.stack}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
