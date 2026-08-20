function Settings({
  theme,
  setTheme,
  accent,
  setAccent,
}) {
  const accents = [
    { name: "White", value: "white" },
    { name: "Blue", value: "blue" },
    { name: "Purple", value: "purple" },
    { name: "Green", value: "green" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm text-neutral-500">
          Customize your experience
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Settings
        </h1>

        <p className="mt-2 text-neutral-400">
          Make DayFlow feel like yours.
        </p>
      </header>

      {/* Appearance */}

      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
        <h2 className="font-medium">
          Appearance
        </h2>

        <p className="mt-1 text-sm text-neutral-500">
          Choose how DayFlow looks.
        </p>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => setTheme("dark")}
            className={`rounded-xl border px-5 py-3 text-sm ${
              theme === "dark"
                ? "border-white bg-white text-black"
                : "border-neutral-800 text-neutral-400"
            }`}
          >
            Dark
          </button>

          <button
            onClick={() => setTheme("light")}
            className={`rounded-xl border px-5 py-3 text-sm ${
              theme === "light"
                ? "border-black bg-black text-white"
                : "border-neutral-800 text-neutral-400"
            }`}
          >
            Light
          </button>
        </div>
      </section>

      {/* Accent */}

      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
        <h2 className="font-medium">
          Accent Color
        </h2>

        <p className="mt-1 text-sm text-neutral-500">
          Choose your interface accent.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {accents.map((item) => (
            <button
              key={item.value}
              onClick={() => setAccent(item.value)}
              className={`rounded-xl border px-4 py-3 text-sm transition ${
                accent === item.value
                  ? "border-white"
                  : "border-neutral-800"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Settings;