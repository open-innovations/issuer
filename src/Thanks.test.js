import { render, fireEvent } from '@testing-library/svelte';

import Thanks from './Thanks';

let fakeReset;

beforeEach(() => {
  fakeReset = jest.fn();
});

it('should show a message when completed', async () => {
  const { getByText } = render(Thanks, { reset: fakeReset });
  expect(getByText('Thank you for your feedback!')).toBeInTheDocument();
});

it('changes button text on click', async () => {
  const { getByText } = render(Thanks, { reset: fakeReset });
  const button = getByText('Reset form');

  await fireEvent.click(button);

  expect(fakeReset).toHaveBeenCalled();
});
