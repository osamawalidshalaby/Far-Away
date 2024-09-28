import { useState } from "react";
import Logo from './Logo'
import Form from './Form'
import PackingList from './packing'
import Stats from "./stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "ump", quantity: 3, packed: true },
// ];


export default function App(){
    const [items , setitems] = useState([])
    
    function handleItems(item){
        setitems((items) => [...items , item])
    }

    function deleteitem(id){
        setitems(items => items.filter(item => item.id !== id))
    }

    function handlecheck (id){
        setitems(items => items.map(item => item.id === id ? {...item , packed : !item.packed} : item))
    }

    function deleteitems(){
        const confirmed = window.confirm("Are you sure to delete all item ?");

        if(confirmed) setitems([]);
    }

    return(
        <div className="app">
            <Logo/>
            <Form onadd = {handleItems}/>
            <PackingList items={items} ondelete = {deleteitem} handlecheck ={handlecheck} deleteitems ={deleteitems}/>
            <Stats items = {items}/>
        </div>
    )
};








