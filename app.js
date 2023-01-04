
document.addEventListener('DOMContentLoaded', ()=>{
   const random = randomId(1, 151);
    fecthData(random);
})

const fecthData = async(id) =>{
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data);

        //array de tipos PKMN
        

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            tipo: data.types.map(type => type.type.name),
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial_atq: data.stats[3].base_stat,
            especial_def: data.stats[4].base_stat,
            velocidad: data.stats[5].base_stat,
            
        }

        randomPoke(pokemon);
    } catch (error) {
        console.log(error);
        
    }
}
//generar un numero random para buscar pokemon
const randomId =(min, max) => {
    return Math.floor(Math.random() * (max -min) +min);
}

const randomPoke = (pokemon) =>{

    console.log(pokemon.tipo);
    const primera = document.querySelector(".primera");
    const template = document.getElementById("template-card").content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-img-top').setAttribute('src', pokemon.img);
    clone.querySelector('.card-header').innerHTML = `<b>HP ${pokemon.hp}</b>`
    clone.querySelector('.card-footer').innerHTML = ` <b>HP <span>${pokemon.hp} </span>${pokemon.nombre}</b>`
    clone.querySelector('.card-title').innerHTML = `<b>${pokemon.tipo}</b>`
    clone.querySelectorAll('.card-text')[0].textContent = "Ataque " + pokemon.ataque
    clone.querySelectorAll('.card-text')[1].textContent = "Defensa " + pokemon.defensa
    clone.querySelectorAll('.card-text')[2].textContent = "Especial ATQ " + pokemon.especial_atq
    clone.querySelectorAll('.card-text')[3].textContent = "Especial DEF" + pokemon.especial_def
    clone.querySelectorAll('.card-text')[4].textContent = "Velocidad" + pokemon.velocidad

    fragment.appendChild(clone);
    primera.appendChild(fragment);
}



