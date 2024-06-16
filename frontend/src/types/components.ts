import { Data } from "./api";

export interface HomeProps {
    data : Data[] | null;
    loading : boolean;
}