
import React from 'react'
import Router from "./routes";
import { BrowserRouter } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';
import ThemeProvider from './theme';


function App() {
  return (
    <BrowserRouter>
     <ThemeProvider>
     <WavyContainer />
        {/* <ScrollToTop /> */}
        <Router />
      </ThemeProvider>


    </BrowserRouter>
    
  );
}
export default App;
