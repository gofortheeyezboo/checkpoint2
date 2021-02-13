let totalMins = 0
let multiplier = 1
let autoMod = 0



let clickUpgrades = {
    pickaxes: {
      price: 100,
      quantity: 0,
      multiplier: 1
    },
    fusioncutter:{
        price: 500,
        quantity: 0,
        multiplier: 6,
    },
    tnt: {
        price: 1000,
        quantity: 0,
        multiplier: 12
    }
  };
  
  let automaticUpgrades = {
    scv: {
      price: 800,
      quantity: 0,
      multiplier: 7
    },
    mule: {
        price: 2000,
        quantity: 0,
        multiplier: 19
      },
      elitemulesquad: {
        price: 5000,
        quantity: 0,
        multiplier: 50
      }
  };

function mine(){
    totalMins = totalMins + 1*(multiplier)
    update()
}
 function update(){
     let mineralsElem = document.getElementById('minerals')
     let multiplierElem = document.getElementById('total-multiplier')
     let automatedElem = document.getElementById('automated-counter')

     automatedElem.innerText = `${autoMod}`
     multiplierElem.innerText = `${multiplier}`
     mineralsElem.innerText = `${totalMins}`
 }
 function buySCV(){
     if(totalMins >= automaticUpgrades.scv.price){
         totalMins -= automaticUpgrades.scv.price
         automaticUpgrades.scv.quantity++
         collectAutoUpgrades()
         update()
     }else{
         alert('You have not enough minerals, Hover upgrades to see mneral cost')
     }
 }
 function buyMule(){
    if(totalMins >= automaticUpgrades.mule.price){
        totalMins -= automaticUpgrades.mule.price
        automaticUpgrades.mule.quantity++
        collectAutoUpgrades()
        update()
    }else{
        alert('You have not enough minerals, Hover upgrades to see mneral cost')
    }
}
function buyEliteMuleSquad(){
    if(totalMins >= automaticUpgrades.elitemulesquad.price){
        totalMins -= automaticUpgrades.elitemulesquad.price
        automaticUpgrades.elitemulesquad.quantity++
        collectAutoUpgrades()
        update()
    }else{
        alert('You have not enough minerals, Hover upgrades to see mneral cost')
    }
}
 function buyPickaxe(){
     if(totalMins >= clickUpgrades.pickaxes.price){
         totalMins = totalMins  - clickUpgrades.pickaxes.price
         givePickaxe()
     }else{
        alert('You have not enough minerals, Hover upgrades to see mneral cost')
    }
 }
 function buyFusionCutter(){
     if(totalMins >= clickUpgrades.fusioncutter.price){
         totalMins = totalMins - clickUpgrades.fusioncutter.price
         giveCutter()
     }else{
        alert('You have not enough minerals, Hover upgrades to see mneral cost')
    }
 }
 function buyTNT(){
    if(totalMins >= clickUpgrades.tnt.price){
        totalMins = totalMins - clickUpgrades.tnt.price
        giveTNT()
    }else{
        alert('You have not enough minerals, Hover upgrades to see mneral cost')
    }
 }
 function givePickaxe(){
    multiplier = multiplier + clickUpgrades.pickaxes.multiplier
    clickUpgrades.pickaxes.quantity++
    let pickAxeCounterElem = document.getElementById('pickaxe-count')
    pickAxeCounterElem.innerText = `${clickUpgrades.pickaxes.quantity}`
update()
 }
 function giveCutter(){
    multiplier = multiplier + clickUpgrades.fusioncutter.multiplier
    clickUpgrades.fusioncutter.quantity++
    let fusionCutterCounterElem = document.getElementById('cutter-count')
    fusionCutterCounterElem.innerText = `${clickUpgrades.fusioncutter.quantity}`
    update()
 }
 function giveTNT(){
    multiplier = multiplier + clickUpgrades.tnt.multiplier
    clickUpgrades.tnt.quantity++
    let tntCounterElem = document.getElementById('tnt-count')
    tntCounterElem.innerText = `${clickUpgrades.tnt.quantity}`
    update()     
 }
 function collectAutoUpgrades(){
    let autoTotal = 0
    for(let key in automaticUpgrades){
     autoTotal += automaticUpgrades[key].multiplier*automaticUpgrades[key].quantity
}
totalMins += autoTotal
autoMod = autoTotal
update()
 }
 function startInterval() {
   let collectionInterval = setInterval(collectAutoUpgrades, 3000);
  }



startInterval()
  update()