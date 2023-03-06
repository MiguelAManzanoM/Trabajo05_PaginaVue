import { defineStore } from "pinia";
import { auth } from "../firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: null,
        };
    },

    actions: {
        async register(email, password){
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } 
            catch (error) {
                switch(error.code){
                    case "auth/email-already-in-use":
                        alert("Correo ya asociado a un usuario");
                        break;
                    case "auth/invalid-email":
                        alert("Correo inválido");
                        break;
                }
                return;
            }
            this.user = auth.currentUser;
            this.$router.push("https://trabajo05-pagina-vue.vercel.app/dashboard");
        },
        async login(email, password){
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } 
            catch (error) {
                switch(error.code){
                    case "auth/user-not-found":
                        alert("Usuario no encontrado");
                        break;
                    case "auth/wrong-password":
                        alert("Contraseña inválida");
                        break;
                }
                return;
            }
            this.user = auth.currentUser;
            this.$router.push("https://trabajo05-pagina-vue.vercel.app/dashboard");
        },
        async logout(){
            await signOut(auth)
            this.user = null;
            this.$router.push("https://trabajo05-pagina-vue.vercel.app/login");
        }
    },
});
