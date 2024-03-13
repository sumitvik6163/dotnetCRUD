import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import SignUp from './component/SignUp';
import LOGIN from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
      <div className='container'>
          <Card className="text-center border-primary">
            <Card.Header className='border-primary'>
              
            </Card.Header>
            <Card.Body>
      <Routes>
      <Route path='' element={<SignUp />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='/login' element={<LOGIN />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </Card.Body>
            <Card.Footer className="text-muted border-primary mb-2">
              <p className='text-primary'>This App Is Designed And Developed By : <strong>Sumit Kumar</strong></p>
            </Card.Footer>
          </Card>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
