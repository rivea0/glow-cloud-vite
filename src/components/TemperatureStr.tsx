export default function TemperatureStr({ temp, tempChoice }:
Record<'temp' | 'tempChoice', string>) {
  return (
    <>
      {temp}
      °
      <span style={{ fontSize: 'smaller' }}>{tempChoice}</span>
    </>
  );
}
