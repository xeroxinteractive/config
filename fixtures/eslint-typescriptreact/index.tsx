import { useState } from 'react';

/**
 * Hello World.
 *
 * @returns The Hello World component.
 */
export default function helloWorld(): JSX.Element {
  const [state, setState] = useState('Hello World!');
  return <button onClick={() => setState('Goodbye World!')}>{state}</button>;
}
