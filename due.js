let dues=JSON.parse(localStorage.getItem("dues")) || []

function addDue(){

let name=document.getElementById("dname").value
let date=document.getElementById("ddate").value
let amount=document.getElementById("damount").value

dues.push({name,date,amount})

localStorage.setItem("dues",JSON.stringify(dues))

renderDue()

}

function renderDue(){

let table=document.getElementById("dueTable")

table.innerHTML=""

dues.forEach(d=>{

table.innerHTML+=`

<tr>

<td>${d.name}</td>
<td>${d.date}</td>
<td>${d.amount}</td>

</tr>

`

})

}

renderDue()
