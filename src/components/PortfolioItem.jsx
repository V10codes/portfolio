import PropTypes from "prop-types";
const PortfolioItem = ({ title, imageUrl, stack, link }) => {
  return (
    <div className="flex flex-col border-2 border-black dark:border-white rounded-md overflow-hidden">
      <img
        src={imageUrl}
        alt="portfolio"
        className="h-36 md:h-48 object-cover cursor-pointer"
      ></img>
      <div className="w-full p-2">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 ">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              className="inline-block px-1 py-0.5 border border-slate-800 dark:border-white rounded-md"
              key={index}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioItem;
