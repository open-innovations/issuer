import { render } from '@testing-library/svelte';

import Form from './Form';

let fakeSubmit;

let titleField, bodyField;

beforeEach(() => {
  fakeSubmit = jest.fn();
});

it('should present a form', async () => {
  const { getByLabelText } = render(Form, { submit: fakeSubmit });

  titleField = getByLabelText('Short description of the problem');
  bodyField = getByLabelText('Additional details about the problem (optional)');

  expect(titleField).toBeInTheDocument();
  expect(bodyField).toBeInTheDocument();
});
