const getVehicle = async(name) => {
  const vehicle = {
    car: '🚗',
    truck: '🚛',
    bus: '🚎'
  }

  return Promise.resolve(vehicle[name]);
}

// getVehicle('bus').then(console.log);

const getAllVehicules = async() => {
  try {
    const a = await getVehicle('car');
    const b = await getVehicle('bus');
    return(a, b);
  } catch (error) {
    console.log(error);
  }
  
}
getAllVehicules();

//using map with await

const vehicles = ['car','truck','bus'];

const vehiclesMap = vehicles.map(async v => {
  const emoji = await getVehicle(v)
  console.log('-' + emoji)
  return emoji
}); 

//using for with await

const vehiclesLoop = async() => {
  for( const vehicle of vehicles ){
    const emoji = await getVehicle(vehicle);
    console.log(vehicle + emoji)
  }
}

vehiclesLoop();

//Short form of using for with await

const VehiclesLoop2 = async() => {
  for await (const emoji of vehicles){
    console.log(emoji);
  }
}

VehiclesLoop2(); //Preguntar a marcus por el resultado de este for, porque no espera la llamada asyncrona

//conditionals with await

const VehicleInspection = async() => {
  if (await getVehicle('car') === '🚗'){
    console.log('🚗 is a car');
  }
} 

VehicleInspection();
