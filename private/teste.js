const spawner = require('child_process').spawn

const data_to_pass = {
    data_sent: "Send this to py",
    data_received: undefined 
}

console.log('Data sent to py script:', data_to_pass)

const py_process = spawner('python', ['./teste.py', JSON.stringify(data_to_pass)])

py_process.stdout.on('data', (data) => {
    console.log('Data received from python script:', JSON.parse(data.toString()))
})