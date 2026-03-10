let products=JSON.parse(localStorage.getItem("products")) || []

function addProduct(){

let name=document.getElementById("pname").value
let qty=parseInt(document.getElementById("pqty").value)
let cat=document.getElementById("pcat").value

products.push({name,qty,cat})

saveProducts()

renderProducts()

}

function renderProducts(){

let table=document.getElementById("productTable")

table.innerHTML="<tr><th>Name</th><th>Qty</th><th>Category</th></tr>"

products.forEach(p=>{

table.innerHTML+=`

<tr>

<td>${p.name}</td>
<td>${p.qty}</td>
<td>${p.cat}</td>

</tr>

`

})

}

function saveProducts(){

localStorage.setItem("products",JSON.stringify(products))

}

renderProducts()
