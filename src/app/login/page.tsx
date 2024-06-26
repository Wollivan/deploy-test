import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { login, signup } from "./actions";

const Login = () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2x1 p-4 md:p-8 shadow-input bg-white border borer-[#121212] dark:bg-black">
      <form className="my-8">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="Email Address"
          type="email"
          name="email"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="********"
          type="password"
          name="password"
          className="mb-6"
        />
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff49_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          formAction={login}
        >
          Login &rarr;
        </button>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff49_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          formAction={signup}
        >
          Signup &rarr;
        </button>

        {/* <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
          Don&apos;t have an account? <Link href="register">Register</Link>
        </p> */}
      </form>
    </div>
  );
};

export default Login;
