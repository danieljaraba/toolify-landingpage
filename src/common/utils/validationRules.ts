import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.nombre) {
    errors.nombre = "Se requiere un nombre";
  }
  if (!values.email) {
    errors.email = "Se requiere un correo electrónico";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El correo es inválido";
  }
  if (!values.soy) {
    errors.soy = "Se requiere un tipo de razón social";
  }
  return errors;
}
