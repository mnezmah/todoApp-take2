import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory  from 'react-bootstrap-table2-paginator';

class App extends Component {
 state = {
    todos : [
      {   id: 1,
          imeZadatka: 'This is my first todo',
          opisZadatka: 'Tako i tako',
          kreiran: 'moment'
      },
      {   id: 2,
          imeZadatka: 'This is my second todo',
          opisZadatka: 'opis comes here',
          kreiran: 'moment2'
      },
      {   id: 3,
          imeZadatka: 'This is my third todo',
          opisZadatka: 'nekako sam raspoložen',
          kreiran: 'moment3'
      },    
    ]
  }

  render() {
    const products = [
      {   id: 1,
        imeZadatka: 'Poljubi nebo',
        opisZadatka: 'Tako i tako',
        kreiran: 'moment'
    },
    {   id: 2,
        imeZadatka: 'Kupi špeceraj',
        opisZadatka: 'opis comes here',
        kreiran: 'moment2'
    },
    {   id: 3,
        imeZadatka: 'vrati se sretno doma',
        opisZadatka: 'nekako sam raspoložen',
        kreiran: 'moment3'
    },    
    {   id: 4,
      imeZadatka: 'još jedan u nizu',
      opisZadatka: 'nekako sam raspoložen',
      kreiran: 'moment3'
  },    
  {   id: 5,
      imeZadatka: 'vprije tamo nego anmo',
      opisZadatka: 'nekako sam raspoložen',
      kreiran: 'moment3'
},    
{   id: 6,
  imeZadatka: 'Kosovo i prishtiona',
  opisZadatka: 'nekako sam raspoložen',
  kreiran: 'moment3'
},    
    ]
    const columns = [{
      dataField: 'id',
      text: 'ID',
      sort: true,
      filter: textFilter()
    } , {
      dataField: 'imeZadatka',
      text: 'Ime Zadatka',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'opisZadatka',
      text: 'Opis Zadatka',
      sort: true,
      filter: textFilter()
    },  {
      dataField: 'kreiran',
      text: 'Vijeme Kreiranja', 
      sort: true,
      filter: textFilter()
    }]
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Welcome to my Todo App</h1>
        <div className="container">
          {/*<table className="table table-striped">
            <thead>
              <tr>
                <th>ID </th>
                <th>IME ZADATKA</th>
                <th>OPIS ZADATKA</th>
                <th>ZAPIS KREIRAN</th>
              </tr>
            </thead>
            {todos.map(todo => (
              <Todo todo={todo}/>
            ))}
          </table>
            <hr/> */}
          <BootstrapTable 
            keyField = 'id' 
            data={ products } 
            columns= { columns } 
            filter={ filterFactory() }
            pagination={ paginationFactory() }
          />
        </div>
      </div>
    );
  }
}

export default App;