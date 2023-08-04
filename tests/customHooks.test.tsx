import { expect, vi, Mock } from 'vitest';
import { getLocationData, getWeatherReport } from '../src/apis';

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

describe('custom hooks', () => {
  beforeEach(() => {
    (global.fetch as Mock).mockReset();
  });

  it('calls location api', async () => {
    (fetch as Mock).mockResolvedValueOnce(createFetchResponse());
    await getLocationData();
    expect(fetch).toHaveBeenCalled();
  });

  it('calls weather data api', async () => {
    (fetch as Mock).mockResolvedValueOnce(createFetchResponse());
    await getWeatherReport(randomLat, randomLon);
    expect(fetch).toHaveBeenCalled();
  });
});
