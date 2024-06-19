import { getDataAction } from "@/actions/todoActions";
import Todos from "@/components/tutorials/todos/Todos";

export const dynamic = "force-dynamic";

export default async function Page() {
  console.log("*****--top--******-------");
  console.log(`revalidated path before ${Date.now()}`);
  const data = await getDataAction();
  console.log(`revalidated path after ${Date.now()}:`, data);
  console.log("*****--bottom******-------");

  return <Todos todos={data} />;
}
