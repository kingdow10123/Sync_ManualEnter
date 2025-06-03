import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    leg: '',
    weight: '',
    dia: '',
    sys: '',
    bpm: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('輸入資料：', formData);
    alert('資料已送出！');
  };

  return (
    <div className="container">
      <h1>測量數據輸入</h1>
      <div className="input-group">
        <input type="number" placeholder="請輸入腿圍(公分cm)" id="leg" value={formData.leg} onChange={handleChange} />
        <input type="number" placeholder="請輸入體重(公斤kg)" id="weight" value={formData.weight} onChange={handleChange} />
        <input type="number" placeholder="請輸入舒張壓(mmHg)" id="dia" value={formData.dia} onChange={handleChange} />
        <input type="number" placeholder="請輸入收縮壓(mmHg)" id="sys" value={formData.sys} onChange={handleChange} />
        <input type="number" placeholder="請輸入心跳(BPM)" id="bpm" value={formData.bpm} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>確認</button>
    </div>
  );
}

export default App;
