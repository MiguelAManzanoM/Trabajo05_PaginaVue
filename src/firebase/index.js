import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyASvuasMKPrE_JfI8Xv-W8GYR0RGu24-WM",
  authDomain: "autentificacionfirebasevue.firebaseapp.com",
  projectId: "autentificacionfirebasevue",
  storageBucket: "autentificacionfirebasevue.appspot.com",
  messagingSenderId: "346425581895",
  appId: "1:346425581895:web:2fcbe7d0a2b1a8341a6c62"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };