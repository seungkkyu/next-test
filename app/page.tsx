export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="text-center">
        <h1 className="text-4xl font-bold">GitHub Actions 배포 테스트</h1>
        <p className="mt-4 text-lg text-gray-600">
          push하면 자동으로 빌드되고 배포됩니다.
        </p>
      </section>
    </main>
  );
}
