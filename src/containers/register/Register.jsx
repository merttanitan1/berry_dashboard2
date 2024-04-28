import React, { useState } from 'react'
import './register.css';
import { Strength } from '../../components';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <form onSubmit={handleSubmit} className="login">
        <div className='wrapper'>
            <h1>Bir Hesap Oluşturun</h1>
            <div className="underline"></div>
            <div className="name-surname-container">
                <div className="input-box" >
                    <input type="text" placeholder="İsim" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Soyisim" value={surname} onChange={e => setSurname(e.target.value)} />
                </div>
            </div>
            <div className="input-box">
                <input type="text" placeholder="info@medtec.com.tr" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="text" placeholder="info@medtec.com.tr" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Şifre" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <Strength/>
            <button type='submit'>Kayıt Ol</button>
            <div className="underline-bottom"></div>
            <div className="login-link">
                <p>Zaten Bir Hesabın Var Mı? <a href="/">Giriş Yap!</a></p>
            </div>
        </div>
    </form>
  );
};

export default Register