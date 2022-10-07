const desertInfo = [
    {
      photo: "img/sweets-1.jpeg",
      name: "Sweet Item",
      price: 5,
      tagName: "sweets",
    },
    {
      photo: "img/cupcake-1.jpeg",
      name: "Cake Item",
      price: 15,
      tagName: "cupcakes",
    },
    {
      photo: "img/cake-1.jpeg",
      name: "Cake Item",
      price: 10,
      tagName: "cakes",
    },
    {
      photo: "img/doughnut-1.jpeg",
      name: "Doughnut Item",
      price: 50,
      tagName: "doughnuts",
    },
    {
      photo: "img/sweets-2.jpeg",
      name: "Sweet Item",
      price: 55,
      tagName: "sweets",
    },
    {
      photo: "img/cupcake-2.jpeg",
      name: "Cake Item",
      price: 25,
      tagName: "cupcakes",
    },
    {
      photo: "img/cake-2.jpeg",
      name: "Cake Item",
      price: 35,
      tagName: "cakes",
    },
    {
      photo: "img/doughnut-2.jpeg",
      name: "Doughtnut Item",
      price: 40,
      tagName: "doughnuts",
    },
    {
      photo: "img/sweets-3.jpeg",
      name: "Sweet Item",
      price: 25,
      tagName: "sweets",
    },
    {
      photo: "img/cupcake-3.jpeg",
      name: "Cake Item",
      price: 5,
      tagName: "cupcakes",
    },
    {
      photo: "img/cake-3.jpeg",
      name: "Cake Item",
      price: 15,
      tagName: "cakes",
    },
    {
      photo: "img/doughnut-3.jpeg",
      name: "Doughnut-Item",
      price: 10,
      tagName: "doughnuts",
    },
  ];

  let fullDesert = desertInfo.map((d)=>{
      return ` <div class="total-desert">
                <img src="${d.photo}" class="js-img" alt="---">
                <div class="price-cont">
                    <p>${d.name}</p>
                    <p>${d.price}$</p>
                </div>
            </div>`
  })

  const forSearch = document.querySelector(".deserts-cont")
  const buttons = document.querySelectorAll(".btn-action")
  const input = document.querySelector(".inp")

  forSearch.innerHTML = fullDesert.join(" ")

  input.addEventListener("keyup",(i)=>{
      let inputValue = input.value.toLowerCase()
           
        if (!inputValue) {
            forSearch.innerHTML = fullDesert.join(" ")
        }
        else{          
          let filteredDeserts = desertInfo.filter((dFiltered)=>{
            if (dFiltered.tagName.includes(inputValue)) {
              return dFiltered
            }
            else{
                 inputValue == dFiltered.tagName
               }
            })
    
            let desertInnerInfo = filteredDeserts.map((d)=>{
                return ` <div class="total-desert">
                <img src="${d.photo}" class="js-img" alt="---">
                <div class="price-cont">
                    <p>${d.name}</p>
                    <p>${d.price}$</p>
                </div>
            </div>`
            }) 
    
            forSearch.innerHTML = desertInnerInfo.join(" ")
          }
        }
  )

  buttons.forEach((eachBtn)=>{

      eachBtn.addEventListener("click", ()=>{
        let btnValue = eachBtn.value.toLowerCase()

        if (btnValue == "all") {
          activateInter(totalDesert)
          forSearch.innerHTML = fullDesert.join(" ")
        }
        else{
            let filteredDeserts = desertInfo.filter((dFiltered)=>{
                return btnValue == dFiltered.tagName
            })
    
            let desertInnerInfo = filteredDeserts.map((d)=>{
                return ` <div class="total-desert">
                <img src="${d.photo}" class="js-img" alt="---">
                <div class="price-cont">
                    <p>${d.name}</p>
                    <p>${d.price}$</p>
                </div>
            </div>`
            }) 
    
            forSearch.innerHTML = desertInnerInfo.join(" ")
        }

    })
  })

  let hamBurger = document.querySelector(".hamburger")
  let menu = document.querySelector(".menu")
  let totalDesert = document.querySelectorAll(".total-desert")

  hamBurger.addEventListener("click", ()=>{
    menu.classList.toggle("appear")
  })

  
  let animateObserver = new IntersectionObserver((eachFood)=>{
    eachFood.forEach((f)=>{
        f.target.classList.toggle("animate", f.isIntersecting)
        if (f.isIntersecting) {
          animateObserver.unobserve(f.target)
        }
      })
    },{ 
    })
    totalDesert.forEach((t)=>{
      animateObserver.observe(t)
    })
