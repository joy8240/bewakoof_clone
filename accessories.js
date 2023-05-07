var investorsData = [
    {
      ProductImg:"https://images.bewakoof.com/t320/drinking-astronaut-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346534-1617711268.jpg",
      CompanyName:" The Original Retro Brand",
      Discription: "It's All Good In The Woods",
      Amount:"₹299",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    
    },

    {
        ProductImg: "https://images.bewakoof.com/t320/color-pile-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346532-1617711266.jpg",
        CompanyName: "Faherty",
        Discription: "Short Sleeve Knit Seasons",
        Amount:"₹299",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/black-marble-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346535-1617711270.jpg",
      CompanyName: "Nautica",
      Discription: "Navtech Plaid Short Sleeve",
      Amount:"₹229",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/cloudy-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346536-1620679354.jpg",
      CompanyName: "Tommy Hilfiger Adaptive",
      Discription: "Custom Fit Check Short Sleeve",
      Amount:"₹219",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/always-myself-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359431-1620679525.jpg",
      CompanyName: "Original Penguin",
      Discription: "Long Sleeve Dobby Plaid Woven",
      Amount:"₹239",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/kinda-sus-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359424-1620679512.jpg",
      CompanyName: "Calvin Klein",
      Discription: "Long Sleeve Pocket Check Easy",
      Amount:"₹299",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/apni-hatti-toh-sabki-fatti-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346547-1617711285.jpg",
      CompanyName: "Calvin Klein",
      Discription: "Long Sleeve Pocket Check Easy",
      Amount:"₹299",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/bad-choices-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346543-1617711280.jpg",
      CompanyName: "NATIVE YOUTH",
      Discription: "Flynn Button-Up",
      Amount:"₹299",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/dab-penguin-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346542-1620679375.jpg",
      CompanyName: "UNTUCKit",
      Discription: "Wrinkle Free Keaton",
      Amount:"₹209",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:199,
    },
    {
      ProductImg: "https://images.bewakoof.com/t320/cafe-racer-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346539-1617711275.jpg",
      CompanyName: "Polo Ralph Lauren",
      Discription: "Classic Fit Checked Oxford",
      Amount:"₹299",
      discount:"₹201",
      discounted_price:"₹500",
      Realamount:109,
    },
  ];
  var Addarr=JSON.parse(localStorage.getItem("mencart")) ||[]
  var FUllV=JSON.parse(localStorage.getItem("Fullviwe")) ||[]
   dd(investorsData)
  function dd(investorsData){
         
    investorsData.forEach(function (elem) {
   
        var box = document.createElement("div");
        var Product = document.createElement("img");
        Product.setAttribute("src", elem.ProductImg);
        var Brand = document.createElement("h6");
        Brand.innerText = elem.CompanyName;
        var Product_discription = document.createElement("p");
        Product_discription.innerText = elem.Discription;
        var Product_amount = document.createElement("p");
        Product_amount.innerText = elem.Amount;
        var Adding = document.createElement("button")
        Adding.innerText = "Add to Cart"
        Adding.setAttribute("id","shanky")
        // style.cursor="pointer"
        Adding.addEventListener("click",function(){
               AddCart(elem)
        })
    
        let ProductFull={
            p1:elem.ProductImg,
            p2:elem.CompanyName,
            p3:elem.Discription,
            p4:elem.Amount
     
        }
    
        Product.onclick=()=>{
            
           Fullview(ProductFull)
            
        }
    
        box.append(Product, Brand, Product_discription, Product_amount,Adding);
        document.querySelector("#Ho_lder").append(box);
      });
    
  }
  
  function AddCart(elem){
      Addarr.push(elem)
      alert("Your Product Added Successfully")
      localStorage.setItem("mencart",JSON.stringify(Addarr))
  }

  let Fullview=(ProductFull)=>{
    FUllV.push(ProductFull)
     localStorage.setItem("Fullviwe",JSON.stringify(FUllV))
     window.location.href="Fulldetail.html"
     
  }

  import footer from "./footer.js"

   document.getElementById("vinay-footer").innerHTML = footer();

   import navbar from "./navbar.js";

document.getElementById("navbar1").innerHTML= navbar();

document.getElementById("logo_1").addEventListener("click",func)

function func(){
     
    window.location.href="index.html"
}