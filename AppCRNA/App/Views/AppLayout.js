import React from 'react';
import logo from '../static/logo.svg';
import { Boxes, Button, PaperTabs } from '../components';

const AppLayout = () => {

  return (
    <>
      <header className="App-header">
        <h3>Header</h3>
      </header>
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <Boxes.Box>
          <Button>
            <p>Click</p>
          </Button>
        </Boxes.Box>
      </main>
      <footer className="App-footer">
        <PaperTabs></PaperTabs>
      </footer>
    </>
  )
}

export default AppLayout;
