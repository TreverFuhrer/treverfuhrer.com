import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/config";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center mx-auto w-full px-6 py-12 space-y-10">
      {/* Header */}
      <header className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{site.name}</h1>
        </div>
      </header>

      {/* Socials */}
      <div className="flex flex-wrap gap-3">
        {site.socials.map((s) => (
          <Link key={s.href} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </Link>
        ))}
        <Link href={site.resumeUrl} target="_blank" rel="noreferrer">
          View Resume
        </Link>
      </div>

      {/* Projects 
      <section className="space-y-4">
        <h2 className="text-lg font-medium text-neutral-200">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {site.projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              target="_blank"
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 shadow hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              <div className="mb-1.5 text-base font-medium">{p.title}</div>
              <div className="text-sm text-neutral-400">{p.blurb}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
*/}
    </div>
  );
}