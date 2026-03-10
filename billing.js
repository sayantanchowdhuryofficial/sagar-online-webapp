function createBill(){

const { jsPDF } = window.jspdf

let product=document.getElementById("bproduct").value
let customer=document.getElementById("bcustomer").value
let mobile=document.getElementById("bmobile").value
let qty=document.getElementById("bqty").value
let price=document.getElementById("bprice").value

let doc=new jsPDF()

doc.text("SAGAR ONLINE",20,20)

doc.text("Product: "+product,20,40)
doc.text("Customer: "+customer,20,50)
doc.text("Mobile: "+mobile,20,60)
doc.text("Quantity: "+qty,20,70)
doc.text("Amount: "+price,20,80)

doc.save("bill.pdf")

}
