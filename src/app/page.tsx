import { mySites } from "@/lib/data";

export default function Home() {
  return (
    <main className="leading-relaxed">
      <h1 className="text-4xl font-bold sm:text-5xl">👾 Hello, everyone!</h1>
      <br />
      <p>
        Hello and welcome to my corner of the web! 🌐✨ Crafted with the magic
        of{" "}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>
        , this is more than just a blog—it&apos;s a digital journal chronicling
        my coding odyssey.
      </p>
      <br />
      <p>
        Here, I invite you to join me on this exciting journey through the world
        of coding. Whether it&apos;s diving into intriguing projects, jotting
        down essential notes, or creating step-by-step code tutorials, this
        space is my canvas for sharing and learning.
      </p>
      <br />
      <p>
        Why did I create this hub, you ask? Well, it&apos;s not just for you;
        it&apos;s for me too! Consider this a personal coding vault where I
        document my projects and insights. A quick refresher for future me, and
        a helpful resource for you.
      </p>
      <br />
      <p>
        So buckle up, explore the code-filled expanse, and let&apos;s embark on
        this coding adventure together! 🚀💻
      </p>
      <br />
      <h5 className="text-xl font-bold">Some of my sites:</h5>
      <ul>
        {mySites.map((site) => (
          <li key={site.name}>
            <a href={site.url} target="_blank">
              {site.name}
            </a>{" "}
            - {site.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
