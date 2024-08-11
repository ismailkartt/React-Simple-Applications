import React from 'react'

const IsLogin = () => {

    const isLogin = true;
    const name = "Veli";
    const surname = "Kiraz";

  return (
    <div>{isLogin ? <h2>{name} {surname} hosgeldiniz</h2> : <h2>Lutfen sisteme giris yapiniz</h2>}</div>
  ) 
}

export default IsLogin