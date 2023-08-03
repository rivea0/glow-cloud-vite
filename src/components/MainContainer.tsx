import { useLocationData, useWeatherData } from '../customHooks';
import NotFound from './NotFound';
import Loading from './Loading';
import WeatherMain from './WeatherMain';
import Rating from './Rating';
import TodaysNote from './TodaysNote';
import AstroDisplay from './AstroDisplay';
import Footer from './Footer';

export default function MainContainer() {
  const { locationData, locationDataError } = useLocationData();
  const { weatherData, weatherDataError, loading } = useWeatherData(locationData);

  return (
    (locationDataError ?? weatherDataError) ? (
      <>
        <NotFound />
        <Footer />
      </>
    )
      : loading ? <Loading />
        : (
          <>
            <WeatherMain weatherData={weatherData} locationData={locationData} />
            <Rating />
            <TodaysNote weathercode={weatherData.daily.weathercode[0]} />
            <AstroDisplay
              sunrise={weatherData.daily.sunrise[0]}
              sunset={weatherData.daily.sunset[0]}
              dateToday={weatherData.current_weather.time}
            />
            <Footer />
          </>
        )
  );
}
