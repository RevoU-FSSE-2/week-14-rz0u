import axios from "axios";
import { LoginForm } from "../../components";
import { LoginForm as LoginFormProps } from "../../types";

const Login = () => {
  const onSubmit = async (values: LoginFormProps) => {
    axios
      .post("https://mock-api.arikmpt.com/api/user/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("Login successful", response.data);
        localStorage.setItem("token", response.data.token);
        window.location.replace("/category");

        // }).then((result) => {
        //         if (result.isConfirmed) {
        //             window.location.replace('/dashboard');
        //         }
        //         setInterval(() => {
        //             window.location.replace('/dashboard');
        //         }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
    // const fetching = await fetch(
    //   "https://mock-api.arikmpt.com/api/user/login",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   }
    // );
    // const response: LoginResponse = await fetching.json();
    // if (response) {
    //   localStorage.setItem("token", response.data.token);
    //   window.location.replace("/category");
    //   console.log(response);
    // }
  };

  return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
