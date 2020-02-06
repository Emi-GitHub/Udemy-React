//HOOKS- omogucava da funkcija moze raditi ono sto i klasa
import React, { useState } from 'react' //ukljucujemo useState kada koristimo Hooks
import ResourceList from './ResourceList';

function App() {
    //resource=posts
    const [resource, setResource] = useState('posts'); //umjesto konstruktora, this.state
    return (
        <div>
            <div>
                <button onClick={()=> setResource('posts')}>Posts</button> {/* umjesto setState */}
                <button onClick={()=> setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource}/> 
        </div>
    )
}

export default App
