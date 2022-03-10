const anchorClass = 'transition opacity-75 hover:(opacity-100 text-emerald-500)';

export default function Index() {
  const links = [
    {
      href: 'https://remix.run/tutorials/blog',
      text: '15m Quickstart Blog Tutorial',
    },
    {
      href: 'https://remix.run/tutorials/jokes',
      text: 'Deep Dive Jokes App Tutorial',
    },
    {
      href: 'https://remix.run/docs',
      text: 'Remix Docs',
    },
    {
      href: 'https://twind.dev/',
      text: 'Twind Docs',
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <div className="p-4">
        <h1 className="text-4xl font-semibold mb-6">Welcome to Remix</h1>
        <ul className="list-disc space-y-3 pl-6">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className={anchorClass} target="_blank" rel="noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
