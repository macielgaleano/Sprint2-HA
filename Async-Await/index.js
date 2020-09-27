const getVehicle = async(name) => {
  const vehicle = {
    car: '🚗',
    truck: '🚛',
    bus: '🚎'
  }

  return Promise.resolve(vehicle[name]);
}

getVehicle('bus').then(console.log);

const getAllVehicules = async() => {
  try {
    const a = await getVehicle('car');
    const b = await getVehicle('bus');
    console.log(a, b);
  } catch (error) {
    console.log(error);
  }
  
}
getAllVehicules();

//using map with await