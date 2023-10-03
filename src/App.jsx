import Loading from "./Components/Loading";
import Weather from "./Components/Weather";
import WeatherChilds from "./Components/WeatherChilds";
import Search from "./Components/Search";
import { useGlobalContext } from "./context";

const App = () => {
  const { isLoading, weatherData } = useGlobalContext();
  const data1 = weatherData?.list;
  const dayData = data1 ? data1[1] : null;
  console.log(dayData, "thid is day data ");
  return (
    <div
      className={`h-[100vh] flex flex-col gap-3 w-full ${
        dayData?.sys.pod === "d"
          ? "bg-[url(./backgrounds/tDay.png)] sm:bg-[url(./backgrounds/pDay.png)]"
          : dayData.sys.pod === "n"
          ? "bg-[url(./backgrounds/tNight.png)] sm:bg-[url(./backgrounds/pNight.png)]"
          : "bg-violet-700"
      } bg-no-repeat bg-cover `}
    >
      {isLoading ? (
        <div className="w-full h-full mx-auto flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div>
          <Search />
          <div className="sm:flex sm:mx-auto sm:w-[70%] sm:h-[85vh]">
            <Weather />
            <WeatherChilds />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
