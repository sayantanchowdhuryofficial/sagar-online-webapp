
let products=JSON.parse(localStorage.getItem("products")) || [];

function addProduct(){

let name=prompt("Product Name");
let qty=prompt("Quantity");
let cat=prompt("Category");

products.push({
name:name,
qty:parseInt(qty),
cat:cat,
low:5
});

saveProducts();
render();

}

function render(){

let table=document.getElementById("productTable");

table.innerHTML=`
<tr>
<th>Product</th>
<th>Quantity</th>
<th>Category</th>
<th>Action</th>
<th>Low Alert</th>
</tr>
`;

products.forEach((p,i)=>{

let alert=p.qty<=p.low?"style='background:red;color:white'":"";

table.innerHTML+=`

<tr ${alert}>

<td>${p.name}</td>
<td>${p.qty}</td>
<td>${p.cat}</td>

<td>

<button onclick="add(${i})">+</button>
<button onclick="minus(${i})">-</button>

</td>

<td>${p.low}</td>

</tr>

`;

});

}

function add(i){
products[i].qty++;
saveProducts();
render();
}

function minus(i){
products[i].qty--;
saveProducts();
render();
}

function saveProducts(){
localStorage.setItem("products",JSON.stringify(products));
}

render()
