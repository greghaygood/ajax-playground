class CircusApi {

    API_URL = "http://circuslabs.net:3000/data" // example-key-12345

    getData(key)  {
        console.log('getting data for key: ' + key)

        axios.get(`${this.API_URL}/${key}`)  //.then( (data) => console.log(data) )
            .then(this.handleSuccessfulResponse)
            .catch(this.handleError)
    }

    saveData(key, value) {
        console.log('saving some data: ' + key + ' = ' + value)

        axios.post(`${this.API_URL}/${key}`, {
            type: 'string',
            value: value
        })
            .then(this.handleSuccessfulResponse)
            .catch(this.handleError)
    }

    handleSuccessfulResponse(response) {
        console.log('got a response!', response)
    }

    handleError(error) {
        console.info('got an error!', error)
    }
}
