import Header from '@/components/header';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1 px-4 py-8">
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}
