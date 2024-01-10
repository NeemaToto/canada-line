import dynamic from "next/dynamic"
import Header from "../../components/Header";

// Reason for dynamic is because map will render in client side
const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col	justify-center items-center pt-16 pb-16	">
        <h1 className="text-3xl	">Start from Waterfront Station and explore all the stations offered by the <span style={{ color: 'red' }}>Canada Line</span></h1>
        <DynamicMap />
      </div>
    </main>
  )
}
