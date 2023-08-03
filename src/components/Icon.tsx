export default function Icon({ slug, width }: { slug: string, width: string }) {
  // Meteocons from bas.dev: https://bas.dev/work/meteocons
  return (
    <img src={`src/assets/icons/${slug}.svg`} alt={`${slug} animated icon`} width={width} className="weather-current-icon" />
  );
}
