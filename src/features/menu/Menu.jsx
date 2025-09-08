import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  // This way is "render as you fetch"
  // the previous way of useEffect was
  // "fetch after render"

  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
// loader can be anywhere, but it is convention
// to put it in the file that needs data
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
