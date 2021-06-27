const request = require('supertest');
const app = require('../app')

it('Should return code 200 to a GET api Call', async () => {
    const res = await request(app)
        .get('/?search=test')
    expect(res.status).toBe(200)
})