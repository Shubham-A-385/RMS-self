import { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = ()=>{
    navigate("/register");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* LEFT SECTION */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-teal-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/90 to-orange-900/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between w-full p-12 text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              The Quiet Engine
              <br />
              of Excellence.
            </h1>

            <p className="text-lg text-slate-200 max-w-lg">
              Streamlining high-volume hospitality with data-driven precision
              and intuitive restaurant management.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
              <p className="text-sm uppercase tracking-widest text-teal-100">
                Global Reach
              </p>

              <h3 className="text-xl font-semibold mt-2">
                Powering 2,500+ Kitchens Worldwide
              </h3>
            </div>

            
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h2>

            <p className="text-slate-500">
              Log in to manage your branch operations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email or Username
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="manager@hotelix.com"
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-teal-800 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input type="checkbox" />

              <span className="text-sm text-slate-600">
                Remember this device for 30 days
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-teal-900 hover:bg-teal-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              Access Dashboard
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Register */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-slate-300"></div>

              <span className="text-sm text-slate-500">
                New to Hotelix?
              </span>

              <div className="flex-1 h-px bg-slate-300"></div>
            </div>

            <button className="w-full border border-teal-900 text-teal-900 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
            onClick={handleRegister}>
              Create Management Account
            </button>
          </div>

          <footer className="mt-10 flex justify-center gap-6 text-sm text-slate-400">
            <button>Privacy Policy</button>
            <button>Terms</button>
            <button>Status</button>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Login;