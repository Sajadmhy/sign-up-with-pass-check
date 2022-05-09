import { useState } from 'react';
import './App.css';

function App() {

  const [valueUser,setValueUser] = useState();
  const [passVal,setPassVal] = useState();
  const [conPassVal,setConPassVal] = useState();
  const [isDis, setIsDis] = useState(false);

  function handleChangeUser(e) {
    setValueUser(e.target.value);
  };

  function handleChangePass(e) {
    setPassVal(e.target.value);
  };

  function handleChangeCon(e) {
    setConPassVal(e.target.value)
  };

  function passCheck() {

  }

  function handleSubmit(e) {
    e.preventDefault();
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label id='email'>
          Phone Number or Email*
        </label>
        <input type='text' name='email' value={valueUser} onChange={handleChangeUser} required/>
        <label id='pass'>
          Password*
        </label>
        <input name='pass' type='password' value={passVal} onChange={handleChangePass} required/>
        <label id='passComf'>
          Confirm Password*
        </label>
        <input className='con-pass disable' id='con-pass' name='passComf'
         type='password' value={conPassVal} onChange={handleChangeCon} required disabled={!isDis}/>
        <div>
          <b>Password Condition:</b>
          <p id='condition'>Password must contain English characters.</p>
          <p id='condition'>Password should be at least 6 characters.</p>
          <p id='condition'>Password must use letter and numbers.</p>
          <p id='condition'>Password and confirm password should be the same.</p>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
