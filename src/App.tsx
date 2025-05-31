import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import { Mars, Venus, Eye, EyeOff } from "lucide-react";

const schema = z.object({
  displayName: z.string().optional(),
  username: z.string().min(1, { message: "Username is required" }),
  phoneNumber: z.string().min(10, { message: "must be 10 digits" }).max(10),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  gender: z.string().optional(),
  theme: z.string().optional(),
  region: z.string().optional(),
  birthday: z.date().optional(),
  status: z.string().optional(),
});

function App() {
  const [data, setData] = useState({});
  const [showPwd, setShowPwd] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      displayName: "",
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
      gender: "",
      theme: "",
      region: "",
      birthday: new Date("2000-01-01"),
      status: "",
    },
  });

  const selectGender = watch("gender");

  const onSubmit = handleSubmit((data) => {
    setData(data);
  });
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="flex justify-center sm:mt-12 mt-6">
        <div className="sm:flex md:w-[95%] lg:w-[75%] w-full">
          <div className="sm:w-[25%] w-full">
            <Sidebar />
          </div>
          <div className="flex justify-center sm:mt-8 sm:w-[75%] w-full p-4 text-sm">
            <div className="space-y-10 w-full ml-4">
              <div>
                <h1 className="text-brown font-semibold text-xl mb-4">
                  Account Info
                </h1>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-x-3 flex">
                    <label>DisplayName</label>
                    <input
                      className="p-2 border-1 border-slate-400 bg-gray-100 text-sm rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                      type="text"
                      placeholder="displayname"
                      {...register("displayName")}
                    />
                  </div>
                  <div className="space-x-3 flex">
                    <div>
                      <label>Username</label>
                      <span className="text-red-500">*</span>
                    </div>
                    <div className="w-full">
                      <input
                        className="p-2 border-1 border-slate-400 bg-gray-100 text-sm rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                        type="text"
                        placeholder="username"
                        {...register("username")}
                      />
                      {errors.username && (
                        <p className="text-red-500">
                          {errors.username.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-x-3 flex">
                    <div>
                      <label className="whitespace-nowrap">Phone Number</label>
                      <span className="text-red-500">*</span>
                    </div>
                    <div className="w-full">
                      <input
                        className="p-2 border-1 border-slate-400 text-sm bg-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                        type="text"
                        placeholder="0001112223"
                        {...register("phoneNumber")}
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500">
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-x-3 flex">
                    <div>
                      <label>Email</label>
                      <span className="text-red-500">*</span>
                    </div>
                    <div className="w-full">
                      <input
                        className="p-2 border-1 border-slate-400 bg-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                        type="email"
                        placeholder="example@gmail.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-x-3 flex">
                    <div>
                      <label>Password</label>
                      <span className="text-red-500">*</span>
                    </div>
                    <div className="w-full">
                      <div className="relative">
                        <input
                          className="p-2 border-1 border-slate-400 bg-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                          type={showPwd ? "text" : "password"}
                          placeholder="Enter your password"
                          {...register("password")}
                        />
                        <button
                          className="absolute top-1 left-[90%] sm:left-[90%] md:left-[94%] rounded-full cursor-pointer hover:bg-slate-200 p-[5px]"
                          type="button"
                          onClick={() => setShowPwd(!showPwd)}
                        >
                          {showPwd ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <h1 className="text-brown font-semibold text-xl mt-5">
                  Personal
                </h1>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <div className="space-x-3 flex items-center">
                    <label>Gender</label>
                    <div className="flex w-full rounded-full">
                      <input {...register("gender")} hidden />
                      <button
                        className={`bg-gray-100 w-full px-2 cursor-pointer justify-items-center rounded-es-full rounded-tl-full border-r-1 border-slate-400 py-1 ${
                          selectGender === "male" ? "bg-sky-100" : ""
                        }`}
                        type="button"
                        onClick={() => setValue("gender", "male")}
                      >
                        <Mars size={20} color="#4c93e0" />
                      </button>
                      <button
                        className={`bg-gray-100 w-full px-2 cursor-pointer rounded-tr-full rounded-br-full justify-items-center ${
                          selectGender === "female" ? "bg-pink-200" : ""
                        }`}
                        type="button"
                        onClick={() => setValue("gender", "female")}
                      >
                        <Venus size={20} color="#f274e3" />
                      </button>
                    </div>
                  </div>
                  <div className="space-x-3 flex">
                    <label>Theme</label>
                    <select
                      className="p-2 border-1 border-slate-400 text-sm bg-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                      {...register("theme")}
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                  <div className="space-x-3 flex">
                    <label>Region</label>
                    <select
                      className="p-2 border-1 border-slate-400 bg-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                      {...register("region")}
                    >
                      <option value="asia">Asia</option>
                      <option value="europe">Europe</option>
                      <option value="africa">Africa</option>
                      <option value="north america">North America</option>
                      <option value="south america">South America</option>
                      <option value="oceania">Oceania</option>
                    </select>
                  </div>
                  <div className="space-x-3 flex">
                    <label>Birthday</label>
                    <input
                      className="p-2 border-1 border-slate-400 bg-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                      type="date"
                      {...register("birthday", {
                        setValueAs: (value) => new Date(value),
                      })}
                    />
                  </div>
                  <div className="space-x-3 flex">
                    <label className="whitespace-nowrap">
                      Relationship Status
                    </label>
                    <select
                      className="p-2 border-1 border-slate-400 bg-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green px-2"
                      {...register("status")}
                    >
                      <option value="single">Single</option>
                      <option value="dating">Dating</option>
                      <option value="engaged">Engaged</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="shadow-xl flex w-full justify-center rounded-xl cursor-pointer p-2 text-yellow hover:bg-brown bg-orange hover:text-orange transition"
                onClick={onSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
