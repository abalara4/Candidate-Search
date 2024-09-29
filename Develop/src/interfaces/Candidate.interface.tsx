// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    id: number;
    name: string;
    email: string;
    phone: string;
    resume: string;
    job: string;
    status: string;
    created_at: string;
    updated_at: string;
}