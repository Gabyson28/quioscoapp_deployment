import Layout from "../layout/Layout";
import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";


export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y Personaliza tu pedido a continuación
      </p>
      <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map((p) => (
          <Producto key={p.id} producto={p} />
        ))}
      </div>
    </Layout>
  );
}
