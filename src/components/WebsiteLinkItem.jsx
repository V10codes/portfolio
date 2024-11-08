import PropTypes from "prop-types";

const WebsiteLinkItem = ({ name, url }) => {
  return (
    <button className="text-400 dark:text-white font-semibold hover:underline border p-3 rounded-md shadow-sm bg-white dark:bg-stone-900 ml-1 mr-1">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </button>
  );
};

WebsiteLinkItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default WebsiteLinkItem;
