import Hello from "../components/hello";

export default function Home() {
  //throw new Error("Not implemented");
  return (
    <>
      <h1 className="text-3xl">Welcome to nextjs!</h1>
      <Hello />
    </>
  );
}
