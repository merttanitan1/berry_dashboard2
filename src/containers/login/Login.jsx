import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Mail: ${email} Şifre: ${password}`);
        navigate('/dashboard');
    };
  return (
    <form onSubmit={handleSubmit} className="login">
        <div className='wrapper'>
            <h1>Merhaba, Tekrar Hoşgeldiniz</h1>
            <div className="underline"></div>
            <div className="input-box">
                <input type="text" placeholder="info@medtec.com.tr" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Şifre" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="remember-forgot">
                <label className='remember'><input type="checkbox"/>Beni Hatırla</label>
                <a href="/forgot-pass">Şifremi Unuttum</a>
            </div>
            <button type='submit'>Giriş Yap</button>
            <div className="underline-bottom"></div>
            <div className="register-link">
                <p>Bir Hesabın Yok Mu? <a href="/register">Kaydol!</a></p>
            </div>
        </div>
    </form>
  );
};
//value={email} onChange={e => setEmail(e.target.value)}

export default Login


/*<div className='container'>
            <div className='header'>
                <div className='welcome_text'>Merhaba, Tekrar Hoşgeldiniz.</div>
                <div className='header_text'>Devam etmek için bilgilerinizi giriniz.</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <label for="username">Email Adresi</label>
                    <input type="email" placeholder="info@medtec.com.tr" color="white" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='input'>
                    <label for="pass">Şifre</label>
                    <input type="password" placeholder="Şifre" color='white' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox"/>Beni Hatırla</label>
                <a href="#">Şifreni mi unuttun?</a>
            </div>
            <button type="submit">Giriş Yap</button>
        </div>*/