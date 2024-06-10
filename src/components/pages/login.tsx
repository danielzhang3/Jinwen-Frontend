"use client";
import useFetch from "@/hooks/useFetch";
import { setLocalUserData } from "@/utils/Functions";
import { loginValidationSchema } from "@/validationSchema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AuthLayout from "../layouts/authLayout";
import InputField from "../theme/input";
import CustomButton from "../theme/customButton";

const Login = () => {
  const router = useRouter();
  const [LoginApi, { response, loading, error }] = useFetch("auth/login/", {
    method: "post",
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  const handleLogin = async (values) => {
    const res = await LoginApi(values);
    console.log("res", res);

    if (res?.status) {
      toast.success(res.message);
      setLocalUserData(res?.data);
      if (res?.data?.role?.id === 1) {
        router.push("/admin/dashboard");
      } else {
        router.push("/investor/dashboard");
      }
    } else {
      toast.error(res.message);
      console.log(res);
    }
  };

  return (
    <div>
      <p className="font-[900] leading-[47px] text-[40px] text-[#494F53] max-[500px]:text-[33px] max-[500px]:leading-[37px] ">
        {" "}
        LOG IN
      </p>
      <p className="font-[300] leading-[18.8px] text-[16px] text-[#494F53] my-[10px] ">
        {" "}
        Please fill the below details to log in.
      </p>
      <div className="my-5 mt-10">
        <InputField
          formik={formik}
          placeholder="Email"
          type="email"
          name="email"
          noRadius
        />
      </div>
      <div className="my-5 mb-8">
        <InputField
          formik={formik}
          placeholder="Password"
          type="password"
          name="password"
          noRadius
        />
      </div>
      <p
        className="font-[300] leading-[18.8px] mt-2 text-[16px] text-[#3190E6] text-right cursor-pointer"
        onClick={() => router.push("/auth/forgotPassword")}
      >
        Forgot Password?
      </p>
      <div className="flex justify-between gap-3 items-center my-8">
        <CustomButton
          onClick={() => formik.handleSubmit()}
          disabled={loading}
          loading={loading}
          noRadius
        >
          Log In
        </CustomButton>
        <p
          className="font-[600] leading-[23.5px] text-[20px] text-[#FF782C] max-[500px]:text-[15px] cursor-pointer hover:underline"
          onClick={() => router.push("/auth/signup")}
        >
          Create Account?
        </p>
      </div>
    </div>
  );
};

export default Login;
