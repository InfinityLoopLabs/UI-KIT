import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <section className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold">UI Kit</h1>
        <p className="text-muted-foreground">
          Vite + Tailwind CSS v4 with shadcn/ui ready to go.
        </p>
        <div className="flex justify-center gap-3">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </section>
    </main>
  );
}
