import { render} from '@testing-library/react';
import App from './App';

describe('should contain Learn React',()=>{
  const {getByText} = render(<App />);
  it('should render Learn React text correctly',()=>{

    expect(getByText("Learn React")).toBeInTheDocument();
  });
})
