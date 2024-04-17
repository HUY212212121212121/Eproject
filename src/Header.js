import React from 'react';

function Header(props) {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/create">Add new Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/edit">About US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/list">Product List</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;