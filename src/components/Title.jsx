import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white">
      {title}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
