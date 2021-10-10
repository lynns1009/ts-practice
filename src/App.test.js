import { render, screen } from '@testing-library/react';
import App from './App';

describe('should contain Learn React',()=>{
  it('should render Learn React text correctly',()=>{
    const {getByText} = render(<App />);
    expect(getByText("Learn React")).toBeInTheDocument();
  });

  it('should render and save to reload text correctly',()=>{
    const {getByText} = render(<App />);
    expect(getByText("and save to reload")).toBeInTheDocument();
  });
});
