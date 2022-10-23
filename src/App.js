import './App.css';
import axios from 'axios'
import FileViewer from 'react-file-viewer';

function App() {
    //start function 
    const start = () => {
        axios //backend api call using axios 
            .get(`http://localhost:5000/api/`)
            .then((res) => {
                console.log(res)
            });
    }

    const stop = () => {
        axios
            .get(`http://localhost:5000/api/stop`)
            .then((res) => {
                console.log(res)
            });
    }

    //open file
    const file = '..\\..\\keyspier-backend\\keylogger.xml'
    const type = 'xml'
    const openh = () => (
        <FileViewer
            fileType={type}
            filePath={file}
        />
       
    )
    return (
      //render component
        <div className="App">
            <div style={{padding:20} }><button onClick={() => start()} >Start</button> </div>
            <div><button onClick={() => stop()}>Stop</button></div>
            <div><button onClick={(<FileViewer
                fileType={type}
                filePath={file}
            />)}>open</button></div>
          
    </div>
  );
}

export default App;
