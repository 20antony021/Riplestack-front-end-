import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { toast } from 'react-toastify';
import { useState } from "react";
import { axiosApi } from "config";
import { useDispatch } from "react-redux";
import { login } from "store/slices/auth";
import { useNavigate } from "react-router-dom";
import { ButtonToolbar, Form, InputGroup } from "rsuite";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [pwd_visible, setPwdVisible] = useState(false);
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleChangePasswordView = () => {
    setPwdVisible(!pwd_visible);
  };

  const handleSubmit = async (data) => {
    if(data.password.length < 8){
      toast.warn("The password should be more than 8 characters.");
      return false;
    }
    try{
      setLoading(true);
      const res = await axiosApi.post("/api/auth/login", data);
      const { platforms, token, user } = res.data;
      axiosApi.defaults.headers.common['Authorization'] = token;
      localStorage.setItem('Riplestack_info', token);
      dispatch(login({ platforms, token, user }));
      toast.success("Logged in successfully!");
      setLoading(false);
      navigator("/");
    }catch(err){
      toast.error("Please check your credentials");
      setLoading(false);
    }
  }

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-[32px] lg:mb-10 lg:items-center lg:justify-end">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-normal text-navy-700 dark:text-white">
          Welcome to <span className="font-bold">Riplestack</span>
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Ready to manage all your social media accounts from one place?
        </p>
        <Form fluid onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.ControlLabel>Email*</Form.ControlLabel>
            <Form.Control placeholder="name@email.com" required name="email" type="email" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.ControlLabel>Password*</Form.ControlLabel>
            <InputGroup inside>
              <Form.Control required name="password" placeholder="Min. 8 characters" type={pwd_visible ? 'text' : 'password'} />
              <InputGroup.Button onClick={handleChangePasswordView}>
                {pwd_visible ? <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg> : <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/></svg>}
              </InputGroup.Button>
            </InputGroup>
          </Form.Group>
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox name={`remember`} onChange={(e) => setRemember(e.target.checked)} />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Remember me
              </p>
            </div>
            <a
              className="text-sm font-medium text-[#8912E7] hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          <Form.Group>
            <ButtonToolbar>
              <button type="submit" disabled={loading} className="relative flex items-center justify-center bg-gradient-to-b from-[#7F03E2] to-[#A13BF2] px-[40px] linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                { loading ? <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  : "Sign In"
                }
              </button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
        <div className="mt-3 mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-white hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        
      </div>
    </div>
  );
}
