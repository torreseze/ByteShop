
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIfTbW2qZNSy6aew35Dgs4weBtEWHDhfM",
  authDomain: "ecommerce-react-avanzado.firebaseapp.com",
  projectId: "ecommerce-react-avanzado",
  storageBucket: "ecommerce-react-avanzado.appspot.com",
  messagingSenderId: "469787168987",
  appId: "1:469787168987:web:32aa4404402ce78c83bcfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireStoreInit = () => app