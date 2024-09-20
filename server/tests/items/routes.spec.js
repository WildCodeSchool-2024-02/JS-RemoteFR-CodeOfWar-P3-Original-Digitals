// Import required dependencies
const { app, request } = require("../config");

describe("GET /api/movies", () => {
  it("it should return a list of movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.status).toBe(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("it should return one movie when it exists", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.status).toBe(200);
  });

  it("it should return a 404 when the movie does not exist", async () => {
    const response = await request(app).get("/api/movies/99");

    expect(response.status).toBe(404);
  });
});

describe("PUT /api/movies/:id", () => {
  it("it should return ok when edited successfully", async () => {
    const data = {
      "title" : "Inception",
      "duration" : "149",
      "synopsis" : "description plus courte",
      "date" : "2010-07-17",
      "classification" : "16",
      "picture" : "https://media.istockphoto.com/id/1129862281/fr/photo/constructions-de-gratte-ciel-dans-la-ville-urbaine-bangkok-thailand-tête-en-bas-pendant-la.jpg?b=1&s=612x612&w=0&k=20&c=w3Z-OZEF_Gtg-j-_t3SBvKRha_TA6vP_IHcZjjX7kVw=",
      "URL" : "https://www.youtube.com/embed/CPTIgILtna8"
  }
    const response = await request(app).put("/api/movies/1").send(data);

    expect(response.status).toBe(200);
  });
});