const name  = 'Josh Perez';
const element = <h1>Hello, {name}</h1>


ReactDOM.render(
    element,
    document.getElementById('root')
);


function formatName(use) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstNam: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello,{formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello , Stranger.</h1>;
}

// pode usar chaves para incorporar uma expressão JavaScript em um atributo:
const element = <img src= {user.avatarUrl}></img>;

// Obs: Não envolva chaves com aspas quando estiver incorporando uma expressão JavaScript em um atributo. 
//Você deveria ou usar aspas (para valores em string) ou chaves (para expressões), mas não ambos no mesmo atributo.


// Tags JSX podem conter elementos filhos:

const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
  

 // Para renderizar um elemento React em um nó raiz, passe ambos para ReactDOM.render():
 const element = <h1>Hello, world</h1>;
 ReactDOM.render(element,
    document.getElementById('root'));

// Na prática, a maioria dos aplicativos React usam o ReactDOM.render() apenas uma única vez. 
//Nas seções seguintes, aprenderemos como esse código pode ser encapsulado em componentes com estado.












