import { useGlobalContext } from "../context";

const WeatherChilds = () => {
  const { isError, weatherData } = useGlobalContext();
  const data = !isError ? weatherData?.list : null;
  const dayData = data
    ? [data[0], data[1], data[3], data[4], data[5], data[7]]
    : [];

  console.log(dayData);

  return (
    <div
      className={
        "w-full sm:w-[50%]  sm:h-[95%] mx-auto " + `${isError ? "hidden" : ""}`
      }
    >
      {isError ? (
        ""
      ) : (
        <div className="sm:w-full w-[90%] rpunded-xl sm:h-[95%]  sm:mx-auto mx-auto  ">
          <div className="overflow-x-auto   sm:h-full h-[23vh] gap-2 sm:flex-col sm:gap-[5px]  sm:block  flex rounded-xl  justify-between w-full ">
            {dayData.map((item) => (
              <div
                className={`  w-[49%] h-full px-3 mx-auto py-2 rounded-2xl shadow-md ${
                  data[1] === item
                    ? "border nowGlass sm:w-full sm:h-[30%] sm:mb-2 w-[49%]"
                    : "glass  sm:w-[94%] sm:h-[28%] sm:mb-2 w-[40%]"
                }`}
                key={item.dt}
              >
                <div className="w-[150px]">
                  <h1>{item.weather[0].main}</h1>
                  <h1>{Math.floor(item.main.temp / 10)}</h1>
                  <h1>
                    {item.dt_txt.substring(5, 7) +
                      "." +
                      item.dt_txt.substring(8, 11)}
                  </h1>
                  <h1>{item.dt_txt.substring(10, 16)}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherChilds;
