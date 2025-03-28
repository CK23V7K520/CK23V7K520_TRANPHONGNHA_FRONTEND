import createApiClient from '../utils/apiClient';

class ContactService {
    constructor(baseURL = "/api/contacts") {
        this.api = createApiClient(baseURL);
    }
    async getALl() {
        return (await this.api.get("/")).data;
    }
    async create() {
        return (await this.api.post("/")).data;
    }
    async delateAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;  
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ContactService();