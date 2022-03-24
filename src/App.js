import logo from './logo.svg';
import './App.css';
import SearchField from 'react-search-field';

function SampleDivRepeat (props) {
  let { item, index, array } = props;
  setInterval(()=> {
    index = index < array.length - 1 ? index + 1 : 0 ;
  }, 5000)
  return (
    <>
      <div className="row" key={item} style={{backgroundColor: "red", width: '50%', padding: '10px', margin: 'auto'}}>
        <h1>{array[index]}</h1>
      </div>
      <br/>
    </>
  )
}

function App() {
  let sampleValues = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <div>
        <SearchField 
          placeholder='Search item'
          onChange={()=> { console.log('triggered') }}
        />
      </div>
      <br/>
      {
        sampleValues.map((item, index) => <SampleDivRepeat item={item} array={sampleValues} index={index}/>)
      }
      
    </div>
  );
}

export default App;
