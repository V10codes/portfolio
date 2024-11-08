import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12 ">
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            school={item.school}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

// { year, title, duration, details }
