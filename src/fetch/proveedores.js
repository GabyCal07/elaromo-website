const baseUrl = process.env.REACT_APP_API_URL;

export const getProvByCategory = async(categoria) => {

        const URL = `${baseUrl}/proveedores/${categoria}`;        
        
        return new Promise((resolve, reject) => {
            fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                reject(
                    "No hemos podido recuperar los datos del servidor. El código de respuesta del servidor es: " +
                    response.status
                );
            })
            .then((json) => resolve(json))
            .catch((err) => reject(err));
        });    
    }
        