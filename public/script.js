// function foo() {
//     console.log("Hello, World!");
//     // document.getElementById("tag1").innerHTML = "How are you?";
//     if(document.getElementById("tag1")) {
//         document.getElementById("tag1").innerHTML = "List of Products";
//     }
// };
// Always use ? before . operator to avoid errors if the element is not found. It is a good practice.
// For eg. document.getElementById("tag1")?.innerHTML = "How are you?";

// setTimeout(() => {
//     console.log("This is a delayed message and will be displayed after 5 sec.");
//     foo();
// }, 5000);

// setTimeout(foo, 3000);

// foo();

// function changeText() {
//     document.getElementById("data").innerHTML = "Loading....";
//     document.getElementById("data").style.fontSize = "30px";
//     document.getElementById("data").style.padding = "20px";
// }

// setTimeout(changeText, 3000);

let products = [];
function loadProduct(renderTable) {
    document.getElementById("data").innerHTML = "Loading data...";

    setTimeout(() => {
        products = productListFromServer;
        renderTable();
    }, 5000);
}
function renderTable() {
    if(!products || products.length === 0) {
        document.getElementById("data").innerHTML = "No Data Available";
        return;
    }
    let table = "<table><thead><tr><th>Sr. No.</th><th>Product Name</th><th>Price</th><th>Description</th></tr></thead><tbody>";
    table += products.map((product, index) => {
        return `<tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                </tr>`;
    }).join("");
    document.getElementById("data").innerHTML = table+ "</tbody></table>";

    // loadProduct(renderTable);
    // renderTable();
}

loadProduct(renderTable);


// function loadData(){
//     document.getElementById("data").style.fontSize = "15px";
//     document.getElementById("data").style.padding = "0px";
//     document.getElementById("data").innerHTML = 
//         `<table>
//             <thead>
//                 <tr>
//                     <th>Product Name</th>
//                     <th>Price</th>
//                     <th>Description</th>
//                 </tr>
//                 <tr>
//                     <td>Product 1</td>
//                     <td>$10</td>
//                     <td>This is a great product.</td>
//                 </tr>
//                 <tr>
//                     <td>Product 2</td>
//                     <td>$20</td>
//                     <td>This is another great product.</td>
//                 </tr>
//             </thead>
//         </table>`
// }

// function renderData() {
//     let table = "<table><thead><tr><th>Product Name</th><th>Price</th><th>Description</th></tr></thead><tbody>";
//     products.forEach(product => {
//         table += `<tr>
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td>${product.description}</td>
//                 </tr>`
//     })
//     document.getElementById("data").innerHTML = table;
// }

// setTimeout(loadData, 5000);