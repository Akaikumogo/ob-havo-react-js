import { useGlobalContext } from "../context";

const Weather = () => {
  const { weatherData, isError, getBackgroundImage } = useGlobalContext();
  const data = weatherData;
  const data1 = weatherData?.list;
  const dayData = data1 ? data1[1] : null;

  return (
    <div
      className={
        "glass w-[95%] h-[350px] sm:h-[505px] sm:w-[350px] sm:m-0 sm:mx-auto   justify-between  items-center mt-[30px] m-[10px] mb-[50px] rounded-[25px] flex gap-3" +
        `${isError ? " sm:h-[505px] sm:w-[98%]" : ""}`
      }
      style={
        !isError && dayData
          ? {
              backgroundImage: `url(${getBackgroundImage(
                dayData.sys.pod,
                dayData.weather[0].main
              )})`,
              backgroundSize: "375px 505px",
              boxShadow: "49px -7px 27px 6px rgba(0, 0, 0, 0.13)",
            }
          : null
      }
    >
      <div
        className={
          "glass w-[100%] h-[350px] sm:h-[505px] sm:w-[350px] sm:m-0 sm:mx-auto  p-1 justify-between  items-center   rounded-[25px] flex gap-3" +
          `${isError ? " sm:h-[505px] sm:w-[98%]" : ""}`
        }
      >
        {isError ? (
          <div>Unday Davlat yoki shahar topilmadi</div>
        ) : (
          <div>
            <div>{data.city.name}</div>
            <div>{dayData.weather[0].main}</div>
            <h1>{Math.floor(dayData.main.temp / 10)}</h1>
            <h1>
              {dayData.dt_txt.substring(5, 7) +
                "." +
                dayData.dt_txt.substring(8, 11)}
            </h1>
            <h1>{dayData.dt_txt.substring(10, 16)}</h1>
            <h1>Wind Speed: {dayData.wind.speed}m/s</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
