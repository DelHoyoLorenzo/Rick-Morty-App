const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const user = require('../src/utils/user');

describe('Test de RUTAS', ()=>{
    it('Responde con status: 200', async ()=>{
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
        let response = await agent.get('/rickandmorty/character/1')
        
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('species')
        expect(response.body).toHaveProperty('gender')
        expect(response.body).toHaveProperty('status')
        expect(response.body).toHaveProperty('origin')
        expect(response.body).toHaveProperty('image')
        
    });

    it('Si hay un error responde con status: 500', async ()=>{
        await agent.get('/rickandmorty/character/900').expect(500)
        
    })
})

describe("GET /rickandmorty/login", ()=>{
    it('Si ejecuto la ruta con mi user correcto debo obtener un obj con una propiedad access en true',  async()=>{
        const {email,password}=user[0];
        /* `/rickandmorty/login?email=${email}&password=${password}` */
        let response = await agent.get('/rickandmorty/login?email=delhoyo.lorenzo@gmail.com&password=123456')
        expect(response.body.access).toEqual(true)
    })

    it('Si ejecuto la ruta con mi user incorrecto debo obtener un obj con una propiedad access en false',  async()=>{
        const {email,password}=user[0];
        let response = await agent.get(`/rickandmorty/login`)
        expect(response.body.access).toEqual(false)
    })

})

describe( "POST /rickandmorty/fav",()=>{
    const char1={id: 1, name: 'Poleard'}
    const char2={id: 2, name: 'Pollard'}
    /* it('Si la respuesta es array deberia dar true', async ()=>{
        let response = await agent.post('/rickandmorty/fav')
        expect(typeof response.body === 'object').toEqual(true)
    }) */
    it('Si la respuesta es array deberia dar true', async ()=>{
        let response = await agent.post('/rickandmorty/fav').send(char1)

        expect(response.body).toContainEqual(char1);
    })//por default toContain evalua un array, yo quiero los valores internos, el objeto

    it('Si mando otro array deberian estar los dos char', async ()=>{
        let response = await agent.post('/rickandmorty/fav').send(char2)
        expect(response.body).toContainEqual(char1);
        expect(response.body).toContainEqual(char2);
    })
    
})

describe("DELETE /rickandmorty/fav/:id",()=>{
    const char1={id: 1, name: 'Poleard'}
    const char2={id: 2, name: 'Pollard'}

    it('En el caso de que no haya ningun personaje con el Id que envias que se devuelvan los mismos elementos previos sin modificar', async ()=>{
        /* `/rickandmorty/fav/${id}` */

        const response = await agent.delete('/rickandmorty/fav/1123132');
        expect(response.body).toContainEqual(char1);
        expect(response.body).toContainEqual(char2);
        //espero el mismo array con los mismos personajes porque 
        //puse un id incorrecto
    })

    it('Si mando un id correcto me devuelve el array sin el elemento', async()=>{
        const response = await agent.delete('/rickandmorty/fav/1');

        expect(response.body).not.toContainEqual(char1);
    })
    
})

