import PropTypes from "prop-types";

const TimelineItem = ({ year, title, duration, details, school }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 rounded-md p-2 ">
      <li className="mb-6 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 left-[-0.3rem] border border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400">
            {school}
          </div>
          <div className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  );
};

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  school: PropTypes.string,
};

export default TimelineItem;
