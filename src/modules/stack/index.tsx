import Stacks from "@/lib/stack";

export default function Stack() {
  return (
    <div className="flex flex-col p-2">
      <h1 className="text-2xl font-bold">STACK</h1>
      <div className="grid grid-cols-2 gap-2 pt-2 md:grid-cols-6 w-fit">
        {Stacks().map((stack, index) => (
          <div key={index} className="flex flex-col items-center w-full p-2 border rounded-md bg-foreground/[0.01] shadow-sm">
            {/* <img src={stack.icon} alt={stack.name} className="w-10 h-10 aspect-square" /> */}
            <div className="w-9 h-9">{stack.icon}</div>
            <h2 className="font-bold text-md">{stack.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
