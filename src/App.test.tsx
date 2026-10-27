import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('project setup interface', () => {
  it('shows actionable validation errors for missing required fields', async () => {
    render(<App/>);
    fireEvent.click(screen.getByRole('button',{name:/start planning/i}));
    fireEvent.click(screen.getByRole('button',{name:/continue/i}));
    expect(await screen.findByText(/enter a project name/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a district or general location/i)).toBeInTheDocument();
  });
  it('shows the unit conversion when a plot area is entered', () => {
    render(<App/>);
    fireEvent.click(screen.getByRole('button',{name:/start planning/i}));
    fireEvent.change(screen.getByLabelText('Plot area'),{target:{value:'40'}});
    expect(screen.getByText(/43,560 sq ft of land area/i)).toBeInTheDocument();
  });
});