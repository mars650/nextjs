//import Image from "next/image";

async function getData(){
  const reqponse = await fetch("https://fisrt-pr.shuttleapp.rs/corses",{
    method: "GET",
  });

  return reqponse.json();
}

export default async function Home() {
  const posts = await getData(); 
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Some Text</h1>
        <h1>{posts['url']}</h1>
<div>
    {posts.map((post) => {
      return (
        <div key={post.name}>
        <p>{post.name}</p>
        {/* {JSON.stringify(post)} */}
        </div>

      )
    })}
    </div>
        </main>
    </div>
  );
}
