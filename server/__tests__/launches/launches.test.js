const request = require('supertest');

const app = require('../../src/app')

describe('Test GET /launches', ()=> {
  test('It should respond with 200 success', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
  });
})

describe('Test POST /launches', ()=> {

  const completeLaunchData = {
    mission: 'USS Enterprise',
    rocket: 'Emmanuel 404',
    destination: 'Kepler-1808',
    launchDate: 'January 4, 2028',
  }

  const completeLaunchDataWithoutDate = {
    mission: 'USS Enterprise',
    rocket: 'Emmanuel 404',
    destination: 'Kepler-1808',
  }

  test('It should respond with 201 success', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(completeLaunchDataWithoutDate)
  })

  // Test for errors

  test('It shoud return missing required properties', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchDataWithoutDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'The launch already exists',
    })
  })
})



