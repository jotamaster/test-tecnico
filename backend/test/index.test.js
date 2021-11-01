
import request from 'supertest'
import app from '../src/app'

import './../src/database';

 let server = app.listen('3700');

 
describe("GET all cars", () => {

    test("should respond with a 200 status code", async () => {

        await request(app).get("/api/cars")
            .send()
            .expect(200)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);

    })

    afterEach(async () => {
        await server.close();        
    });

})


describe("GET One car by slug", () => {

    test("should respond with a 200 status code", async () => {
        const slug  = 'jorge-bustamante-changan-new-alsvin-2015'
        await request(app).get(`/api/cars/slug/${slug}`)
            .send()
            .expect(200)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);

    })

    test("should respond with a 404 status code", async () => {
        const slug  = 'example-slug-not-found'
        await request(app).get(`/api/cars/slug/${slug}`)
            .send()
            .expect(404,null);

    })

    afterEach(async () => {
        await server.close();        
    });

})


describe("POST cars with filters", () => {

    const filters = { 
        "brands":[ "Renault" , "Mazda"],
        "carClasses":["jeep"],
        "years":[]
    }

    test("should respond with a 200 status code", async () => {

        await request(app).post("/api/cars/filters")
            .send(filters)
            .expect(200)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);

    })

    afterEach(async () => {
        await server.close();        
    });

})

