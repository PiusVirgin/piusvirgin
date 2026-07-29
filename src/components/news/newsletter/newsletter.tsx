import Container from "@/components/layout/container";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border bg-gradient-to-br from-primary/10 via-background to-primary/5 px-8 py-20 text-center md:px-20">
          {/* Glow */}
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

          <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Stay Connected
            </span>

            <h2 className="mt-6 text-5xl font-black">Never Miss a Story</h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Get the latest news, insights and important announcements
              delivered directly to your inbox.
            </p>

            <form className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row">
              <Input
                placeholder="Enter your email"
                className="h-14 rounded-full"
              />

              <Button className="h-14 rounded-full px-8" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
