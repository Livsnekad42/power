import './App.css';
import { createPow } from "@textile/powergate-client";
import React from 'react';
let fs = require('fs')

function User(props) {

  const host = "http://0.0.0.0:6002";
  const pow = createPow({ host });
  let user = '';
  async function exampleCode () {
     user  = await pow.admin.users.create() // save this token for later use!
     console.log(user);
     pow.setToken(user.user.token);
    let users = await pow.admin.users.list();
    console.log(users);
    let wallets = await pow.wallet.addresses();
    console.log(wallets);
    const buffer = fs.readFileSync(`/home/livsnekad/test.txt`);
    const cid  = await pow.data.stage(buffer);
    console.log(cid);
    pow.storageConfig.apply(cid);
  }
  
  
    
  return (
    <div>
  <h1>Привет!</h1>
  <button onClick={exampleCode}>click me</button>
  </div>
  );
}


export default User;