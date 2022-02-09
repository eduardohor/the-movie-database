import { Logo } from "./styles";
import imgLogo from "../../assets/img/logo.svg";

export function LogoType() {
  return (
    <Logo>
      <img src={imgLogo} alt="Logo TMDB" />
    </Logo>
  );
}
