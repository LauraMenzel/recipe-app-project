import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      const data = await response.json();
      console.log(data);
    };
    getData();
  }, []);
}

const Home = () => {
  return <h1>Home</h1>;
};

export default App;
