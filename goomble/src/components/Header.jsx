import { AplicactionIcon, LabIcons } from "../icons/Icons";

export default function Header({ extraClass }) {
  return (
    <header className={`${extraClass}`}>
      <nav>
        <ul className="flex justify-end gap-7 text-zinc-300 font-medium">
          <li className="hover:underline">
            <a href="#">Gmail</a>
          </li>
          <li className="hover:underline">
            <a href="#">Imágenes</a>
          </li>
          <li className="hover:cursor-pointer">
            <LabIcons />
          </li>
          <li className="hover:cursor-pointer">
            <AplicactionIcon />
          </li>
          <li className="hover:cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-green-500" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
