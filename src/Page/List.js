import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function List(props) {
    let { products, setProducts } = props
    const [search, setSearch] = useState([]);
    const [listsearch, setListSearch] = useState("");
    const navigate = useNavigate()
    function handleDelete(id) {
        setProducts(products.filter(item => item.id != id))
    }
    function handlecheck(e) {
        let{name,value}=e.target;
    }
    function handleSearch(e) {
        let { value } = e.target;
        if (value != "") {
            let result = products.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
            setListSearch(value);
            setSearch(result);
        } else {
            setListSearch(value);
        }
    }
    function handleSortASC() {
        let resutl = products.sort(function (a, b) {
            return a.price - b.price
        })
        setProducts([...resutl])
    }
    function handleSortDESC() {
        let resutl = products.sort(function (a, b) {
            return b.price - a.price
        })
        setProducts([...resutl])
    }
    function handleSort(tyle) {
        let resutl = products.sort(function (a, b) {
            if (tyle == "false") {
                return"true"
            } else if (tyle == "asc") {
                return "false"
            }

        })
        setProducts([...resutl])
    }
    return (
        <div className='row'>
            <h1 class="text-center">Product List</h1>
            <label> Enter product name</label>
            <input className="form-control mt-2 mb-2" placeholder="Enter product name" onChange={handleSearch} />
            <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    In Stock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => handleSort("false")}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Out Stock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => handleSort("true")} checked/>
  <label class="form-check-label" for="flexRadioDefault1">
    All
  </label>
</div>
                        {/* <button onClick={() => handleSort("asc")} className='btn btn-warning mb-2'>Desc</button>
            <button onClick={() => handleSort("desc")} className='btn btn-info'>Asc</button> */}
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>N.O</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {(listsearch != "" ? search : products).map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.No}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.Stock?"True":"False"}</td>
                                            {/* <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button></td> */}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                    );
}

                    export default List;