export default function RateResult({ starCount }: { starCount: number }) {
  return (
    <div>
      <p>
        You gave
        {' '}
        {starCount}
        {' '}
        stars for this weather!
      </p>
      <br />
      <p>Meanwhile, here are some questions to think about:</p>
      <br />
      <ul>
        <li>1. Are you skeptical of physical experience?</li>
        <li>2. Are there simultaneous, differing realities? </li>
        <li>3. Is this hard for you?</li>
      </ul>
    </div>
  );
}
