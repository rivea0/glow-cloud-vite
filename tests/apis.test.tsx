import { Mock, expect, expectTypeOf, vi } from 'vitest';
import { getLocationData, getWeatherReport } from '../src/apis';
import { ILocationData, IWeatherReport, JSONValue } from '../src/types';

global.fetch = vi.fn();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createFetchResponse(_lat?:number, _lon?:number) {
  // eslint-disable-next-line no-promise-executor-return
  return { json: () => new Promise<void>((resolve) => resolve()) };
}

const randomLat = 48.8588897;
const randomLon = 2.3199997;

afterAll(() => {
  (global.fetch as Mock).mockReset();
});

describe('apis ', () => {
  beforeEach(() => {
    (global.fetch as Mock).mockReset();
  });

  it('makes a request to get location data', async () => {
    (fetch as Mock).mockResolvedValueOnce(createFetchResponse());

    const locationResult = await getLocationData();

    expect(fetch).toHaveBeenCalledWith('https://ipapi.co/json/');
    expectTypeOf(locationResult).toEqualTypeOf<ILocationData & { [k: string]: JSONValue }>();
  });

  it('makes a request to get weather data', async () => {
    (fetch as Mock).mockResolvedValueOnce(createFetchResponse(randomLat, randomLon));

    const weatherResult = await getWeatherReport(randomLat, randomLon);

    expect(fetch).toHaveBeenCalledWith(`https://api.open-meteo.com/v1/forecast?latitude=${randomLat}&longitude=${randomLon}&daily=weathercode,apparent_temperature_max,sunrise,sunset&current_weather=true&timezone=auto`);
    expectTypeOf(weatherResult).toEqualTypeOf<IWeatherReport>();
  });
});
