let stocks = {
  fruits: ["grapes", "banana", "apple", "strawberry"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "nuts"]
}

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      resolve()
    }
    else {
      reject(console.log("shop is closed"))
    }
  })
}

time().then(success).catch();
function success() {

  setTimeout(()=>{
    console.log(`${stocks.fruits[0]} was selected`)

    setTimeout(()=>{
      console.log("production started")

      setTimeout(()=>{
        console.log("fruits has been chopped")
        setTimeout(()=>{
          console.log(`${stocks.liquid[0]} added`)
          setTimeout(()=>{
            console.log("Machine started")
            setTimeout(()=>{
              console.log(`Ice cream placed on ${stocks.holder[0]}`)
              setTimeout(()=>{
                console.log(`${stocks.toppings[1]} as too added`)
              },2000)
            },2000)
          },2000)
        },2000)
      },2000)

    })
  },3000)
}
 











