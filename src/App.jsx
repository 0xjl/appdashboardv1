import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <AppLayout>
      <section>
        <p className="text-sm text-neutral-500">
          Thursday, August 20
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Good morning.
        </h2>

        <p className="mt-2 text-neutral-400">
          Let's make today count.
        </p>
      </section>
    </AppLayout>
  );
}

export default App;