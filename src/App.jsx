import "./App.css";
// Méthode 1 des images : on importe chaque image
import dino from "./assets/dinosaur.png";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-2xl text-white bg-slate-500 text-shadow-md">
      <p className="w-2/4 text-center">
        Ce template est bien configuré pour vos applications front-end avec
        Vite, Tailwind et Vercel
      </p>
      {/* Méthode 1 : on peut donc directement utiliser son nom */}
      <img width={150} height={150} src={dino} alt="" />
      {/* Méthode 2 : après création du dossier "public" à la racine, on peut utiliser le chemin relatif */}
      <img width={150} height={150} src="./assets/trex.png" alt="" />
    </div>
  );
}

export default App;
