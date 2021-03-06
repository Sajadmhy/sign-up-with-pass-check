import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [valueUser,setValueUser] = useState();
  const [passVal,setPassVal] = useState("");
  const [conPassVal,setConPassVal] = useState("");
  const [cond1,setCond1] = useState(false);
  const [cond2,setCond2] = useState(false);
  const [cond3,setCond3] = useState(false);
  const [cond4,setCond4] = useState(false);
  const [cond5,setCond5] = useState(false);
  const [isDis, setIsDis] = useState(true);

  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let alphaBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numeric = "0123456789";



  function handleChangeUser(e) {
    setValueUser(e.target.value);
  };

  function handleChangePass(e) {
    setPassVal(e.target.value);
    for (let i = 0; i< numeric.length; i++) {
      if (e.target.value.indexOf(numeric.charAt(i)) !== -1) {
        setCond3(true);
        break;
      } else {
        setCond3(false);
      } 
    };

    for (let i = 0; i< alphaBet.length; i++) {
      if (e.target.value.indexOf(alphaBet.charAt(i)) !== -1) {
        setCond2(true);
        break;
      } else {
        setCond2(false);
      } 
    };

    const alphaArr = alpha.split("");
    for (let i = 0; i < alpha.length; i++) {
      const leng = e.target.value.length;
      if (alphaArr.includes(e.target.value[leng-1])) {
        setCond1(true);
        break;
      } else {
        setCond1(false);

      }
  };
};

useEffect(() => {
  if ( cond5 && cond3 && passVal.length > 5) {
    setIsDis(false);
  } else if (cond1 && cond2) {
    setCond5(true);
    setIsDis(true)
  }   else {
    setIsDis(true);
    setCond5(false);
  }
});



  function handleChangeCon(e) {
    setConPassVal(e.target.value)

    if (e.target.value === passVal) {
      setCond4(true);
    } else {
      setCond4(false);
    }


  };


  function handleSubmit(e) {
    e.preventDefault();
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>ثبت نام</h2>
        <label id='email'>
          شماره تماس یا ایمیل (الزامی)
        </label>
        <input type='text' name='email' value={valueUser} onChange={handleChangeUser} required/>
        <label id='pass'>
          رمز عبور (الزامی)
        </label>
        <input name='pass' type='password' value={passVal} onChange={handleChangePass} required/>
        <label id='passComf'>
          ورود مجدد رمز عبور (الزامی)
        </label>
        <input className={isDis ? "disable" : ""} id='con-pass' name='passComf'
         type='password' value={conPassVal} onChange={handleChangeCon} required disabled={isDis}/>
        <div>
          <b>شرایط رمز ورود</b>
          <p id='condition1' className={cond5 ? "right" : "wrong"}>رمز عبور باید با حروف انگلیسی باشد.</p>
          <p id='condition2' className={passVal.length > 5 ? "right" : "wrong"}>حداقل ۶ کاراکتر داشته باشد.</p>
          <p id='condition3' className={cond3 ? "right" : "wrong"}>شامل حروف و عدد باشد.</p>
          <p id='condition4' className={cond4 ? "right" : "wrong"}>رمز عبور و تکرار آن یکسان باشد.</p>
        </div>
        <button type='submit'>ثبت نام کنید</button>
      </form>
    </div>
  );
}

export default App;
