const elvenShieldRecipe = {
    leatherStrops:2,    
    ironIgot:1,
    refinedMoonstone:4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,leather:1,
    refinedMoonstone:4,
}
elvenGauntletsRecipe

console.log(elvenShieldRecipe)
console.log(elvenGauntletsRecipe)