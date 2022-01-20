const path = require('path')
const fs = require('fs')        //Leer y escribir archivo .json

const model = {
    listar: () => JSON.parse(fs.readFileSync(path.resolve(__dirname,'..', 'data', 'products.json'))),
    mostrar: id => model.list().find(e => e.id == id),
    guardar: data => {
        let all = model.list()
        let id = all.length > 0 ? all[all.length -1].id +1 : 1
        let product = {id: id,...data}
        all.push(product)
        fs.writeFileSync(path.resolve(__dirname,'..', 'data', 'products.json'),JSON.stringify(all,null,2))
        return product
    }
}

module.exports = model