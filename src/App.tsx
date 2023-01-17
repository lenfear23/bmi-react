import React, { ChangeEvent, Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State{
  magassag: number;
  suly: number;
  bmi:number;
}


class App extends Component<{}, State>{

  constructor(props: {}) {
    super(props);

    this.state = {
      magassag:0,
      suly:0,
      bmi:0,
    }
  }
    magassagValue = (e: ChangeEvent) => {
      let ujMagassag = parseInt((e.currentTarget as HTMLInputElement).value);
      this.setState({
        magassag: ujMagassag
      });
      
    }

    sulyValue = (e: ChangeEvent) => {
      let ujSuly = parseInt((e.currentTarget as HTMLInputElement).value);
      this.setState({
        suly: ujSuly
      });
    }
  
  szamolas =()=>{
    const ujSzamitas = Math.floor(this.state.suly / (this.state.magassag / 100) ** 2);
    this.setState({
      bmi: ujSzamitas
    });
    this.szinezes();
  }

  szinezes =()=>{
    let sovany =document.getElementById('sovany');
    if (!sovany) return;

      sovany.style.background= 'white';
    if(this.state.bmi < 18){
      let sovany =document.getElementById('sovany');
      if (!sovany) return;

      sovany.style.background= 'orange';

    }
    else if(this.state.bmi>18 && this.state.bmi<25) {
      let normal =document.getElementById('normal');
      
      if (!normal) return;

      normal.style.background= 'orange';
    }
     else if(this.state.bmi>25 && this.state.bmi<30) {
      let iTulsuly =document.getElementById('iTulsuly');
      
      if (!iTulsuly) return;

      iTulsuly.style.background= 'orange';
    } 
     else if(this.state.bmi>30 && this.state.bmi<35) {
      let iiTulsuly =document.getElementById('iiTulsuly');
      if (!iiTulsuly) return;

      iiTulsuly.style.background= 'orange';
    } 
    else if(this.state.bmi>35 && this.state.bmi<40) {
      let iiiTulsuly =document.getElementById('iiiTulsuly');
      if (!iiiTulsuly) return;

      iiiTulsuly.style.background= 'orange';
    }else{
      let iiiiTulsuly =document.getElementById('iiiiTulsuly');
      if (!iiiiTulsuly) return;

      iiiiTulsuly.style.background= 'orange';
    }
  }




render() {
  return (
    <div className="App">

      <div className="center">
        <div className="cont">
          <div className="inputsCont">
          <label>Írj be cm-ben számított testmagasságát (cipő nélkül mérve)</label>
      <input type="number" placeholder='Magasság' onChange={this.magassagValue}/>
      <br />
      <label>Írj be kg-ban számított testmsúlyát (cipő nélkül mérve)</label>
      <input type="number" placeholder='Testsúly' onChange={this.sulyValue}/>
<br />
      <button onClick={this.szamolas}>Számítás</button>
      </div>
      <p>Az ön BMI értéke: {this.state.bmi}</p>


      <table>
        <tr id='sovany'>
          <td>18,5 vagy kevesebb</td>
          <td>SOVÁNY</td>
        </tr>
        <tr id='normal'>
          <td>18,5 vagy 24,9</td>
          <td>NORMÁL</td>
        </tr>
        <tr id='iTulsuly'>
          <td>24,9 vagy 29,9</td>
          <td>TÚLSÚLY</td>
        </tr>
        <tr id='iiTulsuly'>
          <td>29,9 vagy 34,9</td>
          <td>I. FOKÚ ELHÍZÁS</td>
        </tr>
        <tr id='iiiTulsuly'>
          <td>34,9 vagy 39,9</td>
          <td>II. FOKÚ ELHÍZÁS</td>
        </tr>
        <tr id='iiiiTulsuly'>
          <td>40 vagy több</td>
          <td>III. FOKÚ ELHÍZÁS</td>
        </tr>
      </table>
      </div>

      </div>

    </div>


  );
}
}

export default App;