//https://solace.ist.rit.edu.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/
//https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/
//this is the base of my proxy to get the data!
const proxyServer = "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/course/courseID="

// endpoint should be something like 'about/' or 'degrees/'
async function getData(endpoint){
    const result = await fetch(`${proxyServer}${endpoint}`);
    return await result.json();
}

export default getData;