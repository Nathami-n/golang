import { expect } from 'vitest';
import app from '../app.js';
import request from 'supertest';

describe("POST /send-emai", () => {
    
    describe("Posting with no credentials",  () => {

        it("should respond with a status code of 400 and an error message", async () => {
            const response = await request(app).post('/send-email').send({
                from: null,
                to: null,
                subject: null,
                content: null
            });

            expect(response.status).toBe(400);
            expect(response.body.error).toBeTruthy();
        })
    })
})
