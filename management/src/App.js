import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
const customers = [
  {
    'id':1,
    'image': 'https://placeimg.com/128/128/1',
    'name':'홍길동',
    'birthday':'0918',
    'gender':'남',
    'job':'의사',
  },
  {
    'id':2,
    'image': 'https://placeimg.com/128/128/2',
    'name':'다다다',
    'birthday':'0218',
    'gender':'2남',
    'job':'의사2',
  },
  {
    'id':3,
    'image': 'https://placeimg.com/128/128/3',
    'name':'이이이',
    'birthday':'0214',
    'gender':'남3',
    'job':'의사3',
  }

]
class App extends Component {
  render(){ 
    return (
      <div>
        {
          customers.map(c =>{
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
