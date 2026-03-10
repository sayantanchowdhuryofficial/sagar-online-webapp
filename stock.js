let products=JSON.parse(localStorage.getItem("products")) || []

function addProduct(){

let name=document.getElementById("pname").value
let qty=parseInt(document.getElementById("pqty").value)
let cat=document.getElementById("pcat").value
let low=parseInt(document.getElementById("plow").value)

products.push({name,qty,cat,low})

saveProducts()
renderProducts()

}

function renderProducts(){

let table=document.getElementById("productTable")

table.innerHTML="<tr><th>Name</th><th>Qty</th><th>Category</th><th>Low Alert</th></tr>"

let lowCount=0

products.forEach(p=>{

let alert=p.qty<=p.low?"style='background:red'":""

if(p.qty<=p.low) lowCount++

table.innerHTML+=`

<tr ${alert}>

<td>${p.name}</td>
<td>${p.qty}</td>
<td>${p.cat}</td>
<td>${p.low}</td>

</tr>

`

})

document.getElementById("totalProducts").innerText=products.length
document.getElementById("lowStock").innerText=lowCount

}

function saveProducts(){

localStorage.setItem("products",JSON.stringify(products))

}

renderProducts()
