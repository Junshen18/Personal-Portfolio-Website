import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "6",
  },
  {
    metric: "Competitions",
    value: "5",
  },
  {
    metric: "Years",
    value: "2",
  },
];
const AchievementsSection = () => {
  return (
    <div className=" xl:gap-3 sm:py-3 xl:px-12 mx-5">
      <div className="border-[#636880] border-[1.5px] rounded-md py-8 px-3 lg:px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AchievementsSection;
