// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    avatar_url: string | undefined;
    id: number;
    name: string;
    location: string;
    Email: string;
    Company: string;
    Bio: string;
}