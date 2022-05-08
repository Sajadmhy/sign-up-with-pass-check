import { useState } from 'react';
import './App.css';

function App() {

  let [valueUser,setValueUser] = useState();
  let [passVal,setPassVal] = useState();
  let [conPassVal,setConPassVal] = useState();

  function handleChangeUser(e) {
    setValueUser(valueUser=e.target.value);
  };

  function handleChangePass(e) {
    setPassVal(passVal = e.target.value);
  };

  function handleChangeCon(e) {
    setConPassVal(conPassVal = e.target.value)
  };

  return (
    <div className="App">
      <form>
        <h2>Sign Up</h2>
        <label id='email'>
          Phone Number or Email
        </label>
        <input type='text' name='email' value={valueUser} onChange={handleChangeUser} required/>
        <label id='pass'>
          Password
        </label>
        <input name='pass' type='pass' value={passVal} onChange={handleChangePass} required/>
        <label id='passComf'>
          Confirm Password
        </label>
        <input name='passComf' type='pass' value={conPassVal} onChange={handleChangeCon} required/>
        <div>
          Password Condition:
          <p>Password must contain English characters.</p>
          <p>Password should be at least 6 characters.</p>
          <p>Password must use letter and numbers.</p>
          <p>Password and confirm password should be the same.</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
