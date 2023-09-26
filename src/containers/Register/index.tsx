import { RegisterForm } from "../../components";
import {
  RegisterForm as RegisterFormProps,
  RegisterResponse,
} from "../../types";

const Register = () => {
  const onSubmit = async (data: RegisterFormProps) => {
    const fetching = await fetch(
      "https://mock-api.arikmpt.com/api/user/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const response: RegisterResponse = await fetching.json();
    if (response) {
      window.location.replace("/login");
      console.log(response);
    }
  };

  return <RegisterForm onSubmit={onSubmit} />;
};

export default Register;
