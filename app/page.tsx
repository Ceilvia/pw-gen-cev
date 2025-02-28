import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hello World
        Password Generator
        Password Length
        Include Numbers
        Include Lowercase Characters
        Include Uppercase Characters
        Begin With A Letter
        Include Symbols textbox
        No Similar Characters like 1 i l o 0 O
        No Duplicate Characters dont use same character more than once
        No Sequential Characters abc 789
        Quantity
        Save my preference in cookies check box 
        copy 1st line    copy all
      </main>
    </div>
  );
}
