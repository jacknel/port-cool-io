import React, { useEffect } from 'react';


function Nav() {
    return (
        <nav className="nav">
            <h1>portCOOL</h1>
            <a href='#'>about me</a>
            <a href='#'>portfolio</a>
            <a href='#'>contact</a>
            <a href='#'>resume</a>
        </nav>
    );
}

// function Nav(props) {
//     const { pages = [], setCurrentPage, currentPage} = props;

//     return (
//         <nav>
//             <ul>
//                 {pages.map((Page) => (
//                     <li className = {`${currentPage.name === Page.name && 'navActive'}`} key={Page.name}>
//                         <span onClick = {() => setCurrentPage(Page)}>
//                             {Page.name}
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }

export default Nav;