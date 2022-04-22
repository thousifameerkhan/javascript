import logo from './speedtest_img1.png';

function speedTest() {
  return (
    <div className="SpeedTest">
      <header className="App-header">
        <img src={logo} className="speedtest-logo" alt="logo" />

        <a>
          Hello from speed test
        </a>
      </header>
    </div>
  );
}

export default speedTest;
