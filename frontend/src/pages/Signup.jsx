import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";

export const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to creae an account"} />
            <InputBox onChange={ (e) => {
            setFirstName(e.target.value);
            }}
            placeholder= "Amey" label={"First Name"} />
              <InputBox onChange={ (e) => {
              setLastName(e.target.value);
            }} placeholder= "Bagal" label={"Last Name"} />
              <InputBox onChange={(e) => {
                setUsername(e.target.value);
            }} placeholder= "amey@example.com" label={"Email"} />
                <InputBox onChange={(e) => {
                setPassword(e.target.value);
            }} placeholder= "12345678" label={"Password"} />
              <div className="pt-4">
              <Button onClick={async () => {
                const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                    username,
                    password,
                    firstName,
                    lastName
                });
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard");
              }}
              label={"Sign up"}/>
              </div>
          <BottomWarning  label={"Already have an account?"} buttonText={"Sign in"} to={"/login"}/>
      </div>
  </div>  
</div>
}