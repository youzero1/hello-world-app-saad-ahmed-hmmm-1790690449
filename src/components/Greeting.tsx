type GreetingProps = {
  name?: string;
  subtitle?: string;
};

export function Greeting({
  name = 'World',
  subtitle = 'Your app is up and running. Nice to meet you.',
}: GreetingProps) {
  return (
    <div className="mx-auto w-full max-w-2xl text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
        Hello, {name}!
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
