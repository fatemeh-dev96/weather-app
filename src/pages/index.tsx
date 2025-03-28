import Weather from "@/components/weather/Weather";


export default function Home() {
  return (
     <main className={"flex justify-center items-center h-[100vh]"}>
       <Weather address={"tehran"}/>
     </main>
  );
}
