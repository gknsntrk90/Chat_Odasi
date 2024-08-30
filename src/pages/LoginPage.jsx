import React from 'react'
import { signInWithPopup }  from "firebase/auth";
import { auth, provider } from '../firebase/index';


const LoginPage = ({setIsAuth}) => {
    //* BUTONA TIKLANINCA ÇALIŞIR
    const handleClick = () => {};
    signInWithPopup(auth, provider)
    .then((data) => {
        //*state'i güncelleme
        setIsAuth(data.user.refreshToken);
        
        //* localStorage'ı da güncelle
        localStorage.setItem("token", data.user.refreshToken);
    })
    .catch((err) => console.log(err));


  return (
    <div className='container'>
        <div className='login'>
            <h1>Chat Room</h1>


            <p>Devam Etmek İçin Giriş Yapınız</p>


            <button onClick={handleClick}>
                <img src="g-logo.png" alt="google" />
                <span>Google ile Gir</span>
                </button>
        </div>
    </div>
  )
}

export default LoginPage