const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      Characters: [],
      Vehicles: [],
      Planets: [],
      Character:{},
      Favorite:[]

    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      getCharacters: () => {
        fetch("https://www.swapi.tech/api/people")//fetch para obtener los perosnajes
          .then((response) => response.json())
          .then((data) => setStore({ Characters: data.results }))
          // .then(data => console.log(data.results)) //así podemos consultar el array en la consola, luego se debe setaer mira la linea 33
      },
      getVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles")//fetch para obtener los vehiculos
          .then((response) => response.json())
          .then((data) => setStore({ Vehicles: data.results })) 
      },
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")//fetch para obtener los planetas
          .then((response) => response.json())
          .then((data) => setStore({ Planets: data.results }))
      },
      getCharacter:(theid)=>{
        fetch(`https://www.swapi.tech/api/people/${theid}`)//fetch para obtener cada personaje
          .then((response) => response.json())
          .then((data) => setStore({ Character: data.result }))
      },
      addFavorites:(fav)=>{
        setStore({Favorite: getStore().Favorite.concat(fav)})
      },
      deleteFav:(i)=>{
        setStore({Favorite: getStore().Favorite.filter(
          (item,index) => index !== i)})
        console.log("funciona");
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
