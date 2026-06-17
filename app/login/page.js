"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // NEW: show errors to user

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // clear previous errors

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // API returned an error (400, 401, 500, etc.)
        setError(data.message || "Login failed. Please try again.");
        return; // stop here, don't redirect
      }

      // Save logged in user
      localStorage.setItem("user", JSON.stringify(data.user));

      // Clear form
      setEmail("");
      setPassword("");

      // Redirect to homepage
      router.push("/");

    } catch (err) {
      // Network error or API crashed
      setError("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false); // ALWAYS stop loading, success or fail
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl p-10 border rounded-lg shadow-sm">

        <h1 className="text-3xl font-bold text-green-700 text-center">
          Login
        </h1>

        {/* Show error message */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-md placeholder-gray-500 text-gray-800"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-md w-full pr-10 placeholder-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex justify-end">
            <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-3 rounded-md disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <a href="/signup" className="text-green-600 ml-1">Signup</a>
        </p>

      </div>
    </div>
  );
}