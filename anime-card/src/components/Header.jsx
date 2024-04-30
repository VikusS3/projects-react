import { useState } from "react";

export function Header() {
  const [profile, setProfile] = useState(false);

  const showProfile = () => {
    setProfile(!profile);
    console.log(profile);
  }
  return (
    <header
      className="
    text-center
    p-5
  "
    >
      <h1 className="text-5xl bg-transparent font-bold text-white">
        Anime Card
      </h1>
      <button onClick={showProfile} className=" bg-primary-100 text-white text-2xl font-bold mt-3 py-2 px-5 rounded-lg hover:bg-primary-200 transition-colors ease-in-out duration-300">
       {
          profile ? 'Ocultar Perfil' : 'Mostrar Perfil'

       }
      </button>
    </header>
  );
}
