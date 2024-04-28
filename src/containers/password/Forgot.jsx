import React, { useState } from 'react'
import './forgot.css';

const Forgot = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <form onSubmit={handleSubmit} className="login">
        <div className='wrapper'>
            <h1>Lütfen Mail Adresinizi Giriniz</h1>
            <h3>Aşağıya e-posta adresinizi girin ve size şifre sıfırlama OTP'si gönderelim.</h3>
            <div className="underline"></div>
            <div className="input-box">
                <input type="text" placeholder="info@medtec.com.tr" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button type='submit'>Bağlantı Gönder</button>
            <div className="underline-bottom"></div>
            <div className="register-link">
                <p>Zaten Bir Hesabın Var Mı? <a href="/">Giriş Yap!</a></p> 
            </div>
        </div>
    </form>
  );
};

export default Forgot