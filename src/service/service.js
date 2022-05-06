import app from "../config/firebase.js";
import {getDatabase,ref,get} from "firebase/database";

class DataService {
    async getAll() {
        const snapshot = await get(ref(getDatabase(app)));
        return snapshot.val();
    }
}
export default new DataService();
